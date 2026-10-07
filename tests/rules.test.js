const test = require("node:test");
const assert = require("node:assert/strict");

const cards = require("../cards.js");
const {
  MarketError,
  RuleError,
  generateMarket,
  matchesRule,
  parseRules,
  rerollSlot,
} = require("../rules.js");

const DEFAULT_RULES =
  "gem <4, gem =4, gem any, relic any, relic any, spell <5, spell <=5, spell >=5, spell >5";
const DEFAULT_SETS = new Set([
  "Aeon's End (Core Box)",
  "The Depths",
  "The Outer Dark",
  "The Void",
  "War Eternal",
]);
const ownedCards = cards.filter((card) =>
  card.sets.some((set) => DEFAULT_SETS.has(set)),
);

test("the Wiki catalog contains 499 complete, unique supply cards", () => {
  assert.equal(cards.length, 499);
  assert.equal(new Set(cards.map((card) => card.id)).size, cards.length);
  assert.equal(new Set(cards.map((card) => card.name)).size, cards.length);
  assert.equal(new Set(cards.flatMap((card) => card.sets)).size, 29);

  cards.forEach((card) => {
    assert.ok(["gem", "relic", "spell"].includes(card.type));
    assert.ok(Number.isInteger(card.cost) && card.cost > 0);
    assert.ok(card.effect.length > 0);
    assert.ok(card.sets.length > 0);
    assert.match(card.wiki, /^https:\/\/aeonsend\.wiki\.gg\/wiki\//);
  });
});

test("the default five owned sets still contain exactly 81 cards", () => {
  assert.equal(ownedCards.length, 81);
  assert.deepEqual(
    Object.fromEntries(
      [...DEFAULT_SETS].map((set) => [
        set,
        cards.filter((card) => card.sets.includes(set)).length,
      ]),
    ),
    {
      "Aeon's End (Core Box)": 27,
      "The Depths": 8,
      "The Outer Dark": 11,
      "The Void": 8,
      "War Eternal": 27,
    },
  );
});

test("imports printed card effects from Wiki templates", () => {
  const jade = cards.find((card) => card.name === "Jade");
  assert.equal(jade.effect, "Gain 2 Æ.");
  assert.deepEqual(jade.sets, ["Aeon's End (Core Box)"]);
});

test("parses case-insensitive rules and normalizes equality", () => {
  assert.deepEqual(parseRules("Gem == 4, SPELL >=5, relic any"), [
    { type: "gem", operator: "=", cost: 4, text: "gem =4" },
    { type: "spell", operator: ">=", cost: 5, text: "spell >=5" },
    { type: "relic", operator: "any", cost: null, text: "relic any" },
  ]);
});

test("reports malformed rules with their position", () => {
  assert.throws(() => parseRules("gem <4, potion any"), RuleError);
  assert.throws(() => parseRules("gem <4,"), /empty rule/i);
});

test("matches every supported comparison", () => {
  const card = { type: "spell", cost: 5 };
  for (const [text, expected] of [
    ["spell <5", false],
    ["spell <=5", true],
    ["spell =5", true],
    ["spell >=5", true],
    ["spell >5", false],
    ["spell any", true],
    ["gem any", false],
  ]) {
    assert.equal(matchesRule(card, parseRules(text)[0]), expected, text);
  }
});

test("default market always has nine unique owned cards satisfying their rules", () => {
  const rules = parseRules(DEFAULT_RULES);

  for (let iteration = 0; iteration < 100; iteration += 1) {
    const market = generateMarket(rules, ownedCards);
    assert.equal(market.length, 9);
    assert.equal(new Set(market.map((card) => card.id)).size, 9);
    market.forEach((card, index) => assert.ok(matchesRule(card, rules[index])));
  }
});

test("matching solver preserves narrow slots when broad rules overlap", () => {
  const tinyPool = [
    { id: "one", type: "gem", cost: 3 },
    { id: "two", type: "gem", cost: 4 },
  ];
  const rules = parseRules("gem any, gem =4");
  const market = generateMarket(rules, tinyPool, () => 0);

  assert.equal(market[1].id, "two");
  assert.equal(new Set(market.map((card) => card.id)).size, 2);
});

test("rejects markets that cannot be unique", () => {
  const rules = parseRules("gem =2, gem =2");
  const jadeOnly = ownedCards.filter(
    (card) => card.type === "gem" && card.cost === 2,
  );
  assert.throws(() => generateMarket(rules, jadeOnly), MarketError);
});

test("reroll keeps the rule, selected pool, and market-wide uniqueness", () => {
  const rules = parseRules(DEFAULT_RULES);
  const market = generateMarket(rules, ownedCards);
  const oldCard = market[0];
  const replacement = rerollSlot(0, market, rules, ownedCards);

  assert.notEqual(replacement.id, oldCard.id);
  assert.ok(matchesRule(replacement, rules[0]));
  assert.ok(ownedCards.includes(replacement));
  assert.ok(!market.slice(1).some((card) => card.id === replacement.id));
});
