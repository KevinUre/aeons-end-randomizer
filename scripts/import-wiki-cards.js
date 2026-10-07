#!/usr/bin/env node

/*
 * Imports official randomizable supply cards from the Aeon's End Wiki.
 *
 * Usage:
 *   node scripts/import-wiki-cards.js          # print a summary only
 *   node scripts/import-wiki-cards.js --write  # replace cards.js
 */

const fs = require("node:fs");
const path = require("node:path");

const API = "https://aeonsend.wiki.gg/api.php";
const USER_AGENT = "BreachMarket/1.1 (GitHub Pages fan tool data importer)";
const CARD_CATEGORIES = ["Gem", "Relic", "Spell"];
const EXCLUDED_CATEGORIES = [
  "No Randomizer",
  "Community Content",
  "Starter Card",
  "Treasure",
];

async function apiGet(params) {
  const url = new URL(API);
  Object.entries({ format: "json", formatversion: "2", ...params }).forEach(
    ([key, value]) => url.searchParams.set(key, value),
  );
  const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!response.ok) throw new Error(`Wiki API returned ${response.status}`);
  return response.json();
}

async function apiPost(params) {
  const body = new URLSearchParams({ format: "json", formatversion: "2", ...params });
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "User-Agent": USER_AGENT,
    },
    body,
  });
  if (!response.ok) throw new Error(`Wiki API returned ${response.status}`);
  return response.json();
}

async function categoryTitles(category) {
  const titles = [];
  let cmcontinue;

  do {
    const data = await apiGet({
      action: "query",
      list: "categorymembers",
      cmtitle: `Category:${category}`,
      cmnamespace: "0",
      cmlimit: "500",
      ...(cmcontinue ? { cmcontinue } : {}),
    });
    titles.push(...data.query.categorymembers.map((page) => page.title));
    cmcontinue = data.continue?.cmcontinue;
  } while (cmcontinue);

  return titles;
}

function chunks(items, size) {
  const result = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

async function fetchPages(titles) {
  const pages = [];

  for (const batch of chunks(titles, 40)) {
    let clcontinue;
    const pageCategories = new Map();
    let batchPages = [];

    do {
      const data = await apiPost({
        action: "query",
        prop: "revisions|categories",
        rvprop: "content",
        rvslots: "main",
        cllimit: "max",
        clshow: "!hidden",
        titles: batch.join("|"),
        ...(clcontinue ? { clcontinue } : {}),
      });

      if (!batchPages.length) batchPages = data.query.pages;
      for (const page of data.query.pages) {
        const collected = pageCategories.get(page.pageid) || [];
        collected.push(...(page.categories || []).map((entry) => entry.title));
        pageCategories.set(page.pageid, collected);
      }
      clcontinue = data.continue?.clcontinue;
    } while (clcontinue);

    pages.push(
      ...batchPages.map((page) => ({
        ...page,
        categories: pageCategories.get(page.pageid) || [],
        wikitext: page.revisions?.[0]?.slots?.main?.content || "",
      })),
    );
  }

  return pages;
}

function extractBalancedTemplate(wikitext, templateName) {
  const start = wikitext.search(new RegExp(`\\{\\{${templateName}\\b`, "i"));
  if (start < 0) return null;

  let depth = 0;
  for (let index = start; index < wikitext.length - 1; index += 1) {
    const pair = wikitext.slice(index, index + 2);
    if (pair === "{{") {
      depth += 1;
      index += 1;
    } else if (pair === "}}") {
      depth -= 1;
      if (depth === 0) {
        const openingLength = 2 + templateName.length;
        return wikitext.slice(start + openingLength, index);
      }
      index += 1;
    }
  }

  return null;
}

function splitTemplateParams(source) {
  const parts = [];
  let current = "";
  let braceDepth = 0;
  let linkDepth = 0;

  for (let index = 0; index < source.length; index += 1) {
    const pair = source.slice(index, index + 2);
    if (pair === "{{") {
      braceDepth += 1;
      current += pair;
      index += 1;
    } else if (pair === "}}") {
      braceDepth -= 1;
      current += pair;
      index += 1;
    } else if (pair === "[[") {
      linkDepth += 1;
      current += pair;
      index += 1;
    } else if (pair === "]]" && linkDepth > 0) {
      linkDepth -= 1;
      current += pair;
      index += 1;
    } else if (source[index] === "|" && braceDepth === 0 && linkDepth === 0) {
      parts.push(current);
      current = "";
    } else {
      current += source[index];
    }
  }
  parts.push(current);

  return Object.fromEntries(
    parts
      .map((part) => {
        const equals = part.indexOf("=");
        if (equals < 0) return null;
        return [part.slice(0, equals).trim(), part.slice(equals + 1).trim()];
      })
      .filter(Boolean),
  );
}

function plainText(wikitext) {
  return wikitext
    .replace(/<!--.*?-->/gs, "")
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<hr\s*\/?\s*>/gi, "\n—\n")
    .replace(/<\/p\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\{\{\s*(?:Cost|Aether|Æ)\s*\}\}/gi, "Æ")
    .replace(/\{\{\s*(?:or|OR)\s*\}\}/g, "\nOR\n")
    .replace(/\{\{\s*Keyword\s*\|\s*([^}|]+).*?\}\}/gi, "$1")
    .replace(/\{\{\s*([^{}|]+)(?:\|([^{}]+))?\}\}/g, (_, name, value) =>
      (value || name).trim(),
    )
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/'''?/g, "")
    .replace(/&AElig;|&#198;/gi, "Æ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/^\s*[*#:;]+\s*/gm, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\s*\n\s*/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseCard(page) {
  if (
    page.categories.some((category) =>
      EXCLUDED_CATEGORIES.some((excluded) => category.includes(excluded)),
    )
  ) {
    return null;
  }

  const template = extractBalancedTemplate(page.wikitext, "PlayerCard");
  if (!template) return null;
  const params = splitTemplateParams(template);
  const type = params.Type?.trim().toLowerCase();
  const costMatch = params.Cost?.match(/^\s*(\d+)/);
  const cost = costMatch ? Number(costMatch[1]) : NaN;

  if (!CARD_CATEGORIES.map((value) => value.toLowerCase()).includes(type)) return null;
  if (!Number.isFinite(cost) || cost <= 0) return null;

  const sets = Object.entries(params)
    .filter(([key, value]) => /^Box(?:\s+\d+)?$/i.test(key) && value.trim())
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, value]) => plainText(value));

  if (!sets.length) return null;

  const rules = params.Rules || params.Effect;
  if (!rules) return null;

  return {
    id: `wiki-${page.pageid}`,
    name: page.title,
    type,
    cost,
    sets: [...new Set(sets)],
    effect: plainText(rules),
    wiki: `https://aeonsend.wiki.gg/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`,
  };
}

function makeCardsModule(cards) {
  const payload = JSON.stringify(cards, null, 2).replace(/</g, "\\u003c");
  return `(function exposeCardData(root, factory) {\n` +
    `  const cards = factory();\n\n` +
    `  if (typeof module === "object" && module.exports) {\n` +
    `    module.exports = cards;\n` +
    `  }\n\n` +
    `  root.AEONS_END_CARDS = cards;\n` +
    `})(typeof globalThis !== "undefined" ? globalThis : this, function buildCardData() {\n` +
    `  "use strict";\n\n` +
    `  // Generated from Aeon's End Wiki PlayerCard templates.\n` +
    `  // Run: node scripts/import-wiki-cards.js --write\n` +
    `  return Object.freeze(${payload}.map((card) => Object.freeze(card)));\n` +
    `});\n`;
}

async function main() {
  const categoryLists = await Promise.all(CARD_CATEGORIES.map(categoryTitles));
  const titles = [...new Set(categoryLists.flat())].sort();
  const pages = await fetchPages(titles);
  const cards = pages.map(parseCard).filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));
  const setCounts = new Map();

  for (const card of cards) {
    for (const set of card.sets) setCounts.set(set, (setCounts.get(set) || 0) + 1);
  }

  console.log(`Found ${cards.length} randomizable supply cards across ${setCounts.size} set labels.`);
  for (const [set, count] of [...setCounts].sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`${String(count).padStart(3)}  ${set}`);
  }

  const missingEffects = cards.filter((card) => !card.effect);
  if (missingEffects.length) {
    throw new Error(`${missingEffects.length} cards have no effect text.`);
  }

  if (process.argv.includes("--write")) {
    const target = path.resolve(__dirname, "..", "cards.js");
    fs.writeFileSync(target, makeCardsModule(cards), "utf8");
    console.log(`Wrote ${target}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
