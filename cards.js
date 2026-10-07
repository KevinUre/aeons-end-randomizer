(function exposeCardData(root, factory) {
  const cards = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = cards;
  }

  root.AEONS_END_CARDS = cards;
})(typeof globalThis !== "undefined" ? globalThis : this, function buildCardData() {
  "use strict";

  const sets = {
    AE: "Aeon's End",
    DEPTHS: "The Depths",
    OUTER_DARK: "The Outer Dark",
    VOID: "The Void",
    WE: "War Eternal",
  };

  const rows = [
    // Aeon's End Second Edition — 27 supply piles
    ["Diamond Cluster", "gem", 4, sets.AE],
    ["Chaos Arc", "spell", 6, sets.AE],
    ["Ignite", "spell", 4, sets.AE],
    ["Essence Theft", "spell", 5, sets.AE],
    ["Searing Ruby", "gem", 4, sets.AE],
    ["Feral Lightning", "spell", 5, sets.AE],
    ["Planar Insight", "spell", 6, sets.AE],
    ["Spectral Echo", "spell", 3, sets.AE],
    ["Burning Opal", "gem", 5, sets.AE],
    ["Consuming Void", "spell", 7, sets.AE],
    ["Unstable Prism", "relic", 3, sets.AE],
    ["Clouded Sapphire", "gem", 6, sets.AE],
    ["Mage's Talisman", "relic", 5, sets.AE],
    ["Flexing Dagger", "relic", 2, sets.AE],
    ["Lava Tendril", "spell", 4, sets.AE],
    ["Bottled Vortex", "relic", 3, sets.AE],
    ["Arcane Nexus", "spell", 7, sets.AE],
    ["Dark Fire", "spell", 5, sets.AE],
    ["Phoenix Flame", "spell", 3, sets.AE],
    ["Jade", "gem", 2, sets.AE],
    ["Amplify Vision", "spell", 4, sets.AE],
    ["V'riswood Amber", "gem", 3, sets.AE],
    ["Blasting Staff", "relic", 4, sets.AE],
    ["Sifter's Pearl", "gem", 3, sets.AE],
    ["Wildfire Whip", "spell", 6, sets.AE],
    ["Focusing Orb", "relic", 4, sets.AE],
    ["Oblivion Swell", "spell", 5, sets.AE],

    // The Depths — 8 supply piles
    ["Void Bond", "spell", 4, sets.DEPTHS],
    ["Combustion", "spell", 5, sets.DEPTHS],
    ["Vim Dynamo", "relic", 4, sets.DEPTHS],
    ["Disintegrating Scythe", "spell", 7, sets.DEPTHS],
    ["Monstrous Inferno", "spell", 8, sets.DEPTHS],
    ["Devouring Shadow", "spell", 6, sets.DEPTHS],
    ["Banishing Topaz", "gem", 5, sets.DEPTHS],
    ["Transmogrifier", "relic", 4, sets.DEPTHS],

    // The Outer Dark — 11 supply piles
    ["Char", "spell", 8, sets.OUTER_DARK],
    ["Alien Element", "gem", 4, sets.OUTER_DARK],
    ["Scorch", "spell", 5, sets.OUTER_DARK],
    ["Pyromancy", "spell", 7, sets.OUTER_DARK],
    ["Feedback Aura", "spell", 5, sets.OUTER_DARK],
    ["Catalyst", "spell", 6, sets.OUTER_DARK],
    ["Pain Stone", "gem", 6, sets.OUTER_DARK],
    ["Astral Cube", "relic", 5, sets.OUTER_DARK],
    ["Riddle Sphere", "relic", 3, sets.OUTER_DARK],
    ["Nether Conduit", "spell", 7, sets.OUTER_DARK],
    ["Haunted Berylite", "gem", 3, sets.OUTER_DARK],

    // The Void — 8 supply piles
    ["Fossilized Scarab", "gem", 3, sets.VOID],
    ["Thermal Dart", "spell", 4, sets.VOID],
    ["Resonate", "spell", 6, sets.VOID],
    ["Conflagration", "spell", 3, sets.VOID],
    ["Dimensional Key", "relic", 8, sets.VOID],
    ["Inner Fire", "spell", 2, sets.VOID],
    ["Fulminate", "spell", 5, sets.VOID],
    ["Eternity Charm", "relic", 3, sets.VOID],

    // War Eternal — 27 supply piles
    ["Erratic Ingot", "gem", 5, sets.WE],
    ["Reduce to Ash", "spell", 7, sets.WE],
    ["Vortex Gauntlet", "relic", 6, sets.WE],
    ["Carbonize", "spell", 4, sets.WE],
    ["Equilibrium", "spell", 7, sets.WE],
    ["Volcanic Glass", "gem", 3, sets.WE],
    ["Convection Field", "spell", 5, sets.WE],
    ["Jagged Lightning", "spell", 4, sets.WE],
    ["Bloodstone Jewel", "gem", 6, sets.WE],
    ["Kindle", "spell", 4, sets.WE],
    ["Thoughtform Familiar", "spell", 3, sets.WE],
    ["Crystallize", "spell", 8, sets.WE],
    ["Fiery Torrent", "spell", 5, sets.WE],
    ["Celestial Spire", "spell", 5, sets.WE],
    ["Conjure the Lost", "spell", 6, sets.WE],
    ["Nova Forge", "spell", 6, sets.WE],
    ["Dread Diamond", "gem", 3, sets.WE],
    ["Cairn Compass", "relic", 4, sets.WE],
    ["Scoria Slag", "gem", 4, sets.WE],
    ["Breach Ore", "gem", 4, sets.WE],
    ["Fiend Catcher", "relic", 3, sets.WE],
    ["Pyrotechnic Surge", "spell", 4, sets.WE],
    ["Aurora", "spell", 5, sets.WE],
    ["Conclave Scroll", "relic", 3, sets.WE],
    ["Primordial Fetish", "relic", 4, sets.WE],
    ["Frozen Magmite", "gem", 3, sets.WE],
    ["Mage's Totem", "relic", 2, sets.WE],
  ];

  return rows.map(([name, type, cost, set], index) =>
    Object.freeze({ id: `market-${index + 1}`, name, type, cost, set }),
  );
});
