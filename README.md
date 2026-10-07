# Breach Market

A zero-build, rule-driven market randomizer for **Aeon's End Second Edition**. It includes the market cards from:

- Aeon's End (core set)
- The Depths
- The Outer Dark
- The Void
- War Eternal

The page is plain HTML, CSS, and JavaScript. There are no dependencies, network requests, cookies, or build step.

## Rule language

Write a comma-delimited list of supply slots. Each slot is a card type followed by a cost test:

```text
gem <4, gem =4, gem any, relic any, relic any, spell <5, spell <=5, spell >=5, spell >5
```

Card types are `gem`, `relic`, and `spell`. Cost tests are `<`, `<=`, `=`, `>=`, `>`, and `any`. Rules are case-insensitive and may also be separated by line breaks.

The generator uses randomized bipartite matching, so overlapping rules still produce a unique market whenever a valid one exists. A card rerolled in place continues to follow the rule for its slot and cannot duplicate another market card.

## Run locally

Open `index.html` directly, or serve this directory with any static file server.

Run the dependency-free test suite with:

```sh
npm test
```

## Publish on GitHub Pages

Push the repository to GitHub, then open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the repository's main branch and `/ (root)`, and save.

## Card data

The embedded dataset contains only names, types, costs, and set names for the 81 owned market cards. It was assembled from the open-source [`aer-data`](https://github.com/on3iro/aeons-end-randomizer) dataset and cross-checked against the [Aeon's End Wiki card list](https://aeonsend.wiki.gg/wiki/Card_List).

This is an unofficial fan project. Aeon's End and its card names are property of their respective owners.
