# Breach Market

A zero-build, rule-driven market randomizer for **Aeon's End**. The embedded catalog currently contains 499 unique randomizable supply cards across 29 official set labels, including campaign content and promos.

The original collection remains the default selection:

- Aeon's End (core set)
- The Depths
- The Outer Dark
- The Void
- War Eternal

Open the collapsed **Drawing from** panel to choose any combination of sets. The set selection and market definition are saved to local storage after a market is generated and restored on that device the next time the page loads.

## Rule language

Write a comma-delimited list of supply slots. Each slot is a card type followed by a cost test:

```text
gem <4, gem =4, gem any, relic any, relic any, spell <5, spell <=5, spell >=5, spell >5
```

Card types are `gem`, `relic`, and `spell`. Cost tests are `<`, `<=`, `=`, `>=`, `>`, and `any`. Rules are case-insensitive and may also be separated by line breaks.

The generator uses randomized bipartite matching, so overlapping rules still produce a unique market whenever a valid one exists. A card rerolled in place continues to follow the rule for its slot, stays inside the selected set pool, and cannot duplicate another market card.

Hover a card name with a mouse, focus it with a keyboard, or tap it on a phone to display the printed card effect.

## Run locally

Open `index.html` directly, or serve this directory with any static file server. The page is plain HTML, CSS, and JavaScript with no runtime dependencies or network requests.

Run the dependency-free test suite with:

```sh
npm test
```

## Publish on GitHub Pages

Push the repository to GitHub, then open **Settings -> Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the repository's main branch and `/ (root)`, and save.

## Card data

The embedded dataset includes each card's name, type, cost, applicable set labels, printed effect, and source URL. It is generated from public `PlayerCard` templates on the [Aeon's End Wiki](https://aeonsend.wiki.gg/wiki/Card_List).

Refresh the catalog with:

```sh
node scripts/import-wiki-cards.js --write
```

Wiki-derived card data is provided under the Wiki's [CC BY-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/). Application code is MIT-licensed. This is an unofficial fan project; Aeon's End and its card names are property of their respective owners.
