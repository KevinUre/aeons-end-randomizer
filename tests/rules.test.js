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

test("the owned collection contains all 81 market cards", () => {
  assert.equal(cards.length, 81);
  assert.deepEqual(
    Object.fromEntries(
      [...new Set(cards.map((card) => card.set))].map((set) => [
        set,
        cards.filter((card) => card.set === set).length,
      ]),
    ),
    {
      "Aeon's End": 27,
      "The Depths": 8,
      "The Outer Dark": 11,
      "The Void": 8,
      "War Eternal": 27,
    },
  );
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

test("default market always has nine unique cards satisfying their rules", () => {
  const rules = parseRules(DEFAULT_RULES);

  for (let iteration = 0; iteration < 100; iteration += 1) {
    const market = generateMarket(rules, cards);
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
  const jadeOnly = cards.filter((card) => card.type === "gem" && card.cost === 2);
  assert.throws(() => generateMarket(rules, jadeOnly), MarketError);
});

test("reroll keeps the rule and market-wide uniqueness", () => {
  const rules = parseRules(DEFAULT_RULES);
  const market = generateMarket(rules, cards);
  const oldCard = market[0];
  const replacement = rerollSlot(0, market, rules, cards);

  assert.notEqual(replacement.id, oldCard.id);
  assert.ok(matchesRule(replacement, rules[0]));
  assert.ok(!market.slice(1).some((card) => card.id === replacement.id));
});
