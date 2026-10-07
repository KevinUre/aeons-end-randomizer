(function exposeRuleEngine(root, factory) {
  const engine = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = engine;
  }

  root.MarketRules = engine;
})(typeof globalThis !== "undefined" ? globalThis : this, function buildRuleEngine() {
  "use strict";

  const VALID_TYPES = new Set(["gem", "relic", "spell"]);
  const VALID_OPERATORS = new Set(["<", "<=", "=", ">=", ">"]);

  class RuleError extends Error {
    constructor(message, ruleIndex = null) {
      super(message);
      this.name = "RuleError";
      this.ruleIndex = ruleIndex;
    }
  }

  class MarketError extends Error {
    constructor(message) {
      super(message);
      this.name = "MarketError";
    }
  }

  function parseRules(input) {
    if (typeof input !== "string" || !input.trim()) {
      throw new RuleError("Add at least one market rule.");
    }

    const pieces = input.split(/,|\n/).map((part) => part.trim());

    if (pieces.some((part) => !part)) {
      throw new RuleError("There is an empty rule. Remove the extra comma or line break.");
    }

    if (pieces.length > 81) {
      throw new RuleError("This collection contains only 81 unique market cards.");
    }

    return pieces.map((piece, index) => {
      const match = piece.match(/^(gem|relic|spell)\s+(any|(?:<=|>=|==|=|<|>)\s*\d+)$/i);

      if (!match) {
        throw new RuleError(
          `Rule ${index + 1} ("${piece}") is not valid. Try something like "spell >=5" or "relic any".`,
          index,
        );
      }

      const type = match[1].toLowerCase();
      const criterion = match[2].toLowerCase().replace(/\s+/g, "");

      if (!VALID_TYPES.has(type)) {
        throw new RuleError(`Unknown card type in rule ${index + 1}.`, index);
      }

      if (criterion === "any") {
        return Object.freeze({ type, operator: "any", cost: null, text: `${type} any` });
      }

      const criterionMatch = criterion.match(/^(<=|>=|==|=|<|>)(\d+)$/);
      const operator = criterionMatch[1] === "==" ? "=" : criterionMatch[1];
      const cost = Number(criterionMatch[2]);

      if (!VALID_OPERATORS.has(operator)) {
        throw new RuleError(`Unknown cost test in rule ${index + 1}.`, index);
      }

      return Object.freeze({ type, operator, cost, text: `${type} ${operator}${cost}` });
    });
  }

  function matchesRule(card, rule) {
    if (!card || card.type !== rule.type) return false;
    if (rule.operator === "any") return true;

    switch (rule.operator) {
      case "<":
        return card.cost < rule.cost;
      case "<=":
        return card.cost <= rule.cost;
      case "=":
        return card.cost === rule.cost;
      case ">=":
        return card.cost >= rule.cost;
      case ">":
        return card.cost > rule.cost;
      default:
        return false;
    }
  }

  function shuffled(items, random = Math.random) {
    const copy = [...items];

    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  // Randomized bipartite matching guarantees a valid unique market whenever
  // one exists, even when broad rules overlap narrow rules.
  function generateMarket(rules, cards, random = Math.random) {
    if (!Array.isArray(rules) || !rules.length) {
      throw new MarketError("There are no rules to generate.");
    }

    const candidates = rules.map((rule, index) => {
      const matches = shuffled(cards.filter((card) => matchesRule(card, rule)), random);

      if (!matches.length) {
        throw new MarketError(`Rule ${index + 1} ("${rule.text}") matches no cards you own.`);
      }

      return matches;
    });

    const slotOrder = rules
      .map((_, index) => index)
      .sort((a, b) => candidates[a].length - candidates[b].length || random() - 0.5);
    const assignment = new Array(rules.length);
    const cardToSlot = new Map();

    function augment(slot, seenCards, seenSlots) {
      if (seenSlots.has(slot)) return false;
      seenSlots.add(slot);

      for (const card of candidates[slot]) {
        if (seenCards.has(card.id)) continue;
        seenCards.add(card.id);

        const previousSlot = cardToSlot.get(card.id);
        if (
          previousSlot === undefined ||
          augment(previousSlot, seenCards, seenSlots)
        ) {
          assignment[slot] = card;
          cardToSlot.set(card.id, slot);
          return true;
        }
      }

      return false;
    }

    for (const slot of slotOrder) {
      if (!augment(slot, new Set(), new Set())) {
        throw new MarketError(
          "Those rules cannot produce a market of unique cards. Broaden one of the repeated rules.",
        );
      }
    }

    return assignment;
  }

  function rerollSlot(slot, market, rules, cards, random = Math.random) {
    if (!market[slot] || !rules[slot]) {
      throw new MarketError("That market slot does not exist.");
    }

    const occupied = new Set(
      market.filter((_, index) => index !== slot).map((card) => card.id),
    );
    const currentId = market[slot].id;
    const alternatives = cards.filter(
      (card) =>
        card.id !== currentId &&
        !occupied.has(card.id) &&
        matchesRule(card, rules[slot]),
    );

    if (!alternatives.length) {
      throw new MarketError(`No other unused card matches "${rules[slot].text}".`);
    }

    return alternatives[Math.floor(random() * alternatives.length)];
  }

  return Object.freeze({
    MarketError,
    RuleError,
    generateMarket,
    matchesRule,
    parseRules,
    rerollSlot,
    shuffled,
  });
});
