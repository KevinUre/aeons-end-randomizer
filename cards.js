(function exposeCardData(root, factory) {
  const cards = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = cards;
  }

  root.AEONS_END_CARDS = cards;
})(typeof globalThis !== "undefined" ? globalThis : this, function buildCardData() {
  "use strict";

  // Generated from Aeon's End Wiki PlayerCard templates.
  // Run: node scripts/import-wiki-cards.js --write
  return Object.freeze([
  {
    "id": "wiki-3330",
    "name": "Abacus of Ignition",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Promo"
    ],
    "effect": "You may cast any ally's prepped spell. Any ally draws a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Abacus_of_Ignition"
  },
  {
    "id": "wiki-770",
    "name": "Accelerating Field",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Deal 3 damage.\nIf this is the first time you have cast an Accelerating Field this turn, you may reveal the top four cards of your deck. You may place any cards named Accelerating Field revealed this way into your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Accelerating_Field"
  },
  {
    "id": "wiki-621",
    "name": "Acidic Flomite",
    "type": "gem",
    "cost": 5,
    "sets": [
      "The Descent"
    ],
    "effect": "Gain 3 Æ.\nYou may lose 1 charge. If you do, place an immolate token on an enemy.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Acidic_Flomite"
  },
  {
    "id": "wiki-1354",
    "name": "Adrenal Batteries",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 pulse tokens. You may lose 4 pulse tokens. If you do, open any player's closed breach. Then, gain a spell from any supply pile that costs 5 Æ or less and prep that spell to any player's opened breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Adrenal_Batteries"
  },
  {
    "id": "wiki-1918",
    "name": "Aether Conduit",
    "type": "relic",
    "cost": 4,
    "sets": [
      "The New Age"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, the player who cast that spell gains 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Aether_Conduit"
  },
  {
    "id": "wiki-3103",
    "name": "Aether Dust",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nEach ally gains an AetherToken.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Aether_Dust"
  },
  {
    "id": "wiki-1291",
    "name": "Aether Infuser",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Past and Future"
    ],
    "effect": "Attach this to any player's breach.\nWhen a spell is cast from this breach, the player who cast that spell gains 1 Æ.\nUse this card only when playing with Auren.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Aether_Infuser"
  },
  {
    "id": "wiki-727",
    "name": "Aether Ripple",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 2 damage. Each ally gains an AetherToken.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Aether_Ripple"
  },
  {
    "id": "wiki-328",
    "name": "Aether Widget",
    "type": "relic",
    "cost": 2,
    "sets": [
      "The Ruins"
    ],
    "effect": "Any ally may prep a spell in hand to one of their opened or closed breaches.\n—\nYou may discard this during any ally's main phase. If you do, that ally may cast one of their prepped spells.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Aether_Widget"
  },
  {
    "id": "wiki-349",
    "name": "Aetherrune",
    "type": "relic",
    "cost": 8,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain a charge.\nCast any player's prepped spell without discarding it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Aetherrune"
  },
  {
    "id": "wiki-86",
    "name": "Alchemical Ignition",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Descent"
    ],
    "effect": "While prepped, once per turn when any player places an elemental token, they place an additional elemental token of the same type on that enemy.\nCast: Place 2 venom tokens on an enemy and deal 2 damage to it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Alchemical_Ignition"
  },
  {
    "id": "wiki-3390",
    "name": "Alien Element",
    "type": "gem",
    "cost": 4,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Gain 1 Æ.\nFor each of your breaches with a spell prepped to it, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Alien_Element"
  },
  {
    "id": "wiki-1007",
    "name": "All-out Barrage",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Abyss"
    ],
    "effect": "Cast: Deal 4 damage. You may place the bottom card of the nemesis deck on top of the nemesis deck. If you do, deal an additional 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/All-out_Barrage"
  },
  {
    "id": "wiki-2353",
    "name": "Allaying Shell",
    "type": "gem",
    "cost": 5,
    "sets": [
      "The Ruins"
    ],
    "effect": "Gain 2 Æ.\nSilence a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Allaying_Shell"
  },
  {
    "id": "wiki-50",
    "name": "Amplify Vision",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Focus your closed breach with the lowest focus cost. Deal 2 damage. If all of your breaches are opened, deal 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Amplify_Vision"
  },
  {
    "id": "wiki-3855",
    "name": "Amplifying Calcite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 2 Æ.\nOR\nGain 3 Æ that can only be used to Develop cards.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Amplifying_Calcite"
  },
  {
    "id": "wiki-339",
    "name": "Ancient Cyanolith",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Ancient_Cyanolith"
  },
  {
    "id": "wiki-835",
    "name": "Ancient Secrets (Raven)",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 7 damage. You may lose any amount of Knowledge. For each Knowledge lost this way, deal an additional 1 damage.\nThis is part of Raven's Forgotten Ritual deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Ancient_Secrets_(Raven)"
  },
  {
    "id": "wiki-4512",
    "name": "Apocalypse",
    "type": "spell",
    "cost": 11,
    "sets": [
      "Past and Future"
    ],
    "effect": "While prepped, all your other\nprepped spells have Echo.\nCast: Deal 6 damage.\nThis starts the game in the Swap zone.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Apocalypse"
  },
  {
    "id": "wiki-2676",
    "name": "Arc of Intellect",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 6 damage. You may spend 1 Knowledge to divide the damage this spell deals however you choose among any number of enemies.\nThis is part of Raven's Forgotten Ritual deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Arc_of_Intellect"
  },
  {
    "id": "wiki-294",
    "name": "Arcane Facet",
    "type": "gem",
    "cost": 1,
    "sets": [
      "The Caverns"
    ],
    "effect": "Gain 1 Æ.\nOR\nYou may discard any number of other facets. Gain 2 Æ and an additional 2 Æ for each card discarded this way. This Æ can only be used to gain a relic.\nUse this card only when playing with Alcheia.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Arcane_Facet"
  },
  {
    "id": "wiki-3657",
    "name": "Arcane Nexus",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "While prepped, once per turn during your main phase you may return a gem you played this turn to your hand.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Arcane_Nexus"
  },
  {
    "id": "wiki-1176",
    "name": "Arcane Relay",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Any ally draws a card and then reveals their hand. Deal 4 damage. Deal 1 additional damage for each card in that ally's hand that costs 1 Æ or more.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Arcane_Relay"
  },
  {
    "id": "wiki-2240",
    "name": "Arcane Salvo",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "While prepped, once per turn during your main phase you may place a relic you played this turn or a relic in your discard pile on top of your deck.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Arcane_Salvo"
  },
  {
    "id": "wiki-804",
    "name": "Archaic Discharge",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Caverns"
    ],
    "effect": "While prepped, after you play a relic, place a charge token on this.\nCast: Deal 4 damage. Deal an additional 2 damage for each charge token on this. Then, discard all of the tokens placed on this.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Archaic_Discharge"
  },
  {
    "id": "wiki-8377",
    "name": "Arcing Firethorn",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Surface"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may cast any player's prepped spell. If you do, that spell deals 1 additional damage.\nUse this card only when playing with Inco.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Arcing_Firethorn"
  },
  {
    "id": "wiki-3272",
    "name": "Arcing Silicate",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ. Gain 1 pulse token. You may lose any number of pulse tokens. Deal damage equal to the number of pulse tokens lost this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Arcing_Silicate"
  },
  {
    "id": "wiki-1569",
    "name": "Astral Cube",
    "type": "relic",
    "cost": 5,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Return a gem you played this turn to your hand.\nReveal the top card of the turn order deck. If you revealed a player's turn order card, that player gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Astral_Cube"
  },
  {
    "id": "wiki-7975",
    "name": "Atomized Ash",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "When you gain this, gain 1 pulse token.\n—\nGain 2 Æ.\n—\nRecall Lose 1 pulse token to deal 1 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Atomized_Ash"
  },
  {
    "id": "wiki-526",
    "name": "Aurora",
    "type": "spell",
    "cost": 5,
    "sets": [
      "War Eternal"
    ],
    "effect": "While prepped, once per turn during your main phase you may gain 1 charge.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Aurora"
  },
  {
    "id": "wiki-973",
    "name": "Backfire",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 4 damage. You may lose 1 charge to return this to your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Backfire"
  },
  {
    "id": "wiki-1837",
    "name": "Banishing Topaz",
    "type": "gem",
    "cost": 5,
    "sets": [
      "The Depths"
    ],
    "effect": "Gain 2 Æ.\nYou may place a card in hand on top of your deck. If you do, gain an additional 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Banishing_Topaz"
  },
  {
    "id": "wiki-8348",
    "name": "Bell of Gravehold",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Promo"
    ],
    "effect": "Any player destroys any number of cards in hand and gains an AetherToken for each card destroyed this way.\n—\nRecall Discard a card in hand. If you do, any ally gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bell_of_Gravehold"
  },
  {
    "id": "wiki-3254",
    "name": "Bending Beam",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 2 damage. If this spell was cast from an opened III breach, deal 3 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bending_Beam"
  },
  {
    "id": "wiki-2140",
    "name": "Bestowing Light",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Deal 5 damage.\nAny ally gains an Æ token for each spell prepped in an adjacent breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bestowing_Light"
  },
  {
    "id": "wiki-715",
    "name": "Blackened Orb",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Tales of Old Gravehold"
    ],
    "effect": "Cast any player's prepped spell without discarding it. That spell deals 2 less damage, minimum 0.\nOR\nCast any player's prepped spell and destroy it. That spell deals 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Blackened_Orb"
  },
  {
    "id": "wiki-3005",
    "name": "Blade of Wisdom",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "When you gain this, if there are seven or more other cards in your discard pile, gain 2 life.\nCast: Deal 5 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Blade_of_Wisdom"
  },
  {
    "id": "wiki-363",
    "name": "Blast Sphere",
    "type": "relic",
    "cost": 8,
    "sets": [
      "Into The Wild"
    ],
    "effect": "Cast any player's prepped spell three times without discarding it and then destroy it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Blast_Sphere"
  },
  {
    "id": "wiki-2425",
    "name": "Blasting Staff",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "You may cast a prepped spell that you prepped this turn. If you do, that spell deals 2 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Blasting_Staff"
  },
  {
    "id": "wiki-1398",
    "name": "Blaze",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Nameless"
    ],
    "effect": "When you gain this, you may place it on top of any player's discard pile.\nCast: Deal 2 damage. Deal 1 additional damage for each other time you have cast Blaze this turn and for each other Blaze you currently have prepped.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Blaze"
  },
  {
    "id": "wiki-1197",
    "name": "Bloodstone Jewel",
    "type": "gem",
    "cost": 6,
    "sets": [
      "War Eternal"
    ],
    "effect": "When you gain a Bloodstone Jewel for the first time on you turn, gain 3 Æ.\nGain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bloodstone_Jewel"
  },
  {
    "id": "wiki-8378",
    "name": "Blooming Firethorn",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Surface"
    ],
    "effect": "Cast: Deal 2 damage.\nConjure.\nUse this card only when playing with Inco.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Blooming_Firethorn"
  },
  {
    "id": "wiki-8382",
    "name": "Book of Before",
    "type": "relic",
    "cost": 6,
    "sets": [
      "The Returned"
    ],
    "effect": "Attach this to any player's breach.\nWhen a spell is cast from this breach, Gravehold gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Book_of_Before"
  },
  {
    "id": "wiki-1340",
    "name": "Bottled Demon",
    "type": "relic",
    "cost": 2,
    "sets": [
      "The Abyss"
    ],
    "effect": "Gain 1 charge. You may have an enemy gain 2 life. If you do, gain an additional 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bottled_Demon"
  },
  {
    "id": "wiki-2804",
    "name": "Bottled Star",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 3 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bottled_Star"
  },
  {
    "id": "wiki-141",
    "name": "Bottled Sun",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Outcasts"
    ],
    "effect": "Xaxos: Outcast gains 3 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bottled_Sun"
  },
  {
    "id": "wiki-3715",
    "name": "Bottled Vortex",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Destroy this.\nDestroy up to two cards in your hand or discard pile.\nDraw a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bottled_Vortex"
  },
  {
    "id": "wiki-2272",
    "name": "Bouncing Boom",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The New Age"
    ],
    "effect": "Echo\nCast: Deal 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Bouncing_Boom"
  },
  {
    "id": "wiki-2289",
    "name": "Boundless Engulf",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 4 damage. If your discard pile has eight or more cards, including this, you may return this to your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Boundless_Engulf"
  },
  {
    "id": "wiki-8260",
    "name": "Boundless Fire",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Surface"
    ],
    "effect": "Cast: Deal 2 damage.\n—\nRecall Lose a charge to place this into your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Boundless_Fire"
  },
  {
    "id": "wiki-2744",
    "name": "Brain Lance",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 2 damage. You may spend any amount of Knowledge. For each Knowledge you spend, this spell deals an additional 2 damage.\nUse this card only when playing with Kavoc.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Brain_Lance"
  },
  {
    "id": "wiki-2609",
    "name": "Branching Radite",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ.\nIf you have two or more prepped spells, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Branching_Radite"
  },
  {
    "id": "wiki-2976",
    "name": "Brane Knife",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 1 charge.\nAny ally focuses their closed breach with the lowest focus cost.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Brane_Knife"
  },
  {
    "id": "wiki-1072",
    "name": "Breach Collision",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Legacy"
    ],
    "effect": "When you gain this, you may place it on top of any player's discard pile.\nCast: Deal 5 damage. Gravehold gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Breach_Collision"
  },
  {
    "id": "wiki-399",
    "name": "Breach Communion",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "While prepped, once per turn during your main phase you may gain 1 pulse token.\nCast: Deal 2 damage. You may lose 2 pulse tokens. If you do, deal 3 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Breach_Communion"
  },
  {
    "id": "wiki-354",
    "name": "Breach Extractor",
    "type": "relic",
    "cost": 5,
    "sets": [
      "The Ancients"
    ],
    "effect": "Any player destroys up to two cards in hand.\nOR\nDestroy this. Gravehold gains 3 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Breach_Extractor"
  },
  {
    "id": "wiki-522",
    "name": "Breach Flare",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 2 damage. Focus any player's III breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Breach_Flare"
  },
  {
    "id": "wiki-1107",
    "name": "Breach Ore",
    "type": "gem",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "Gain 2 Æ.\nOR\nFocus your closed breach with the lowest focus cost.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Breach_Ore"
  },
  {
    "id": "wiki-1100",
    "name": "Breach Seeker",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Echo\nCast: Deal 1 damage. Focus any ally's breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Breach_Seeker"
  },
  {
    "id": "wiki-4984",
    "name": "Brimstone Battery",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Any player destroys a card in their hand or discard pile. If that card costs 3 Æ or more, boost this.\nOR\nAttach this to any player's breach. When a spell is cast from this breach, if this card is fully boosted, Gravehold gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Brimstone_Battery"
  },
  {
    "id": "wiki-1857",
    "name": "Brutal Reckoning",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 8 damage divided however you choose among any number of minions.\nOR\nCast: Deal 10 damage to the nemesis.\nUse this card only when playing with Xaxos: Reckoner.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Brutal_Reckoning"
  },
  {
    "id": "wiki-2752",
    "name": "Building Storm",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 2 damage.\nDeal 1 additional damage for every copy of this card in the Develop zone.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Building_Storm"
  },
  {
    "id": "wiki-1288",
    "name": "Burning Current",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "While prepped, during your casting phase you may lose 2 pulse tokens. If you do, spells you cast this turn deal 1 additional damage.\nCast: Deal 1 damage. Gain 1 pulse token.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Burning_Current"
  },
  {
    "id": "wiki-3512",
    "name": "Burning Opal",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Gain 3 Æ.\nYou may discard a card in hand. If you do, any ally draws a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Burning_Opal"
  },
  {
    "id": "wiki-1778",
    "name": "Cache Glass",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Gain 2 Æ.\nIf there is a Cache Glass in your discard pile, you may destroy a card in your discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cache_Glass"
  },
  {
    "id": "wiki-1906",
    "name": "Caged Fire",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The New Age"
    ],
    "effect": "Destroy the top card of any player's discard pile.\nOR\nDestroy this. Gain 2 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Caged_Fire"
  },
  {
    "id": "wiki-772",
    "name": "Cairn Compass",
    "type": "relic",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "Any ally may prep a spell in their discard pile to their opened or closed breach(es).",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cairn_Compass"
  },
  {
    "id": "wiki-8379",
    "name": "Calming Firethorn",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Surface"
    ],
    "effect": "Cast: Deal 3 damage.\nGain 1 charge.\nUse this card only when playing with Inco.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Calming_Firethorn"
  },
  {
    "id": "wiki-1523",
    "name": "Carbonize",
    "type": "spell",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast: Deal 3 damage.\nReveal the top card of the turn order deck. You may place that card on the bottom of the turn order deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Carbonize"
  },
  {
    "id": "wiki-2356",
    "name": "Carnivorous Roox",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 1 Æ. You may destroy a card in hand to gain Æ equal to its cost.\nOR\nDestroy this. Focus your closed breach with the lowest focus cost twice.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Carnivorous_Roox"
  },
  {
    "id": "wiki-1844",
    "name": "Cascade",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 3 damage. You may return a card that costs 4 Æ or less from your discard pile to your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cascade"
  },
  {
    "id": "wiki-2864",
    "name": "Cat's Eye",
    "type": "relic",
    "cost": 1,
    "sets": [
      "Southern Village"
    ],
    "effect": "You cannot gain this card if you have gained another card this turn. You cannot gain any other cards the turn you gain this.\nGain 1 charge. You may destroy this. If you do, gain 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cat's_Eye"
  },
  {
    "id": "wiki-1312",
    "name": "Cataclysm Seed",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Promo"
    ],
    "effect": "Gain a charge.\nOR\nDestroy this. Each player may destroy any number of cards in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cataclysm_Seed"
  },
  {
    "id": "wiki-1353",
    "name": "Catalyst",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Cast: Deal 2 damage.\nIf you have 2 life or less, deal 5 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Catalyst"
  },
  {
    "id": "wiki-3136",
    "name": "Cavernous Maw",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 2 damage.\nYou may destroy a card in your discard pile that costs 4 Æ or more. If you do, swap this card for Dragonflare and place it on top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cavernous_Maw"
  },
  {
    "id": "wiki-2917",
    "name": "Celestial Spire",
    "type": "spell",
    "cost": 5,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast: Deal 3 damage.\nIf this card's supply pile is empty, any ally draws a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Celestial_Spire"
  },
  {
    "id": "wiki-2627",
    "name": "Chain of Retrieval",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Focus any ally's breach.\nOR\nReturn a card in your discard pile to your hand that costs 6 Æ or less.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Chain_of_Retrieval"
  },
  {
    "id": "wiki-838",
    "name": "Chaos Arc",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Deal 3 damage.\nDeal 2 additional damage for each prepped spell in an adjacent breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Chaos_Arc"
  },
  {
    "id": "wiki-1809",
    "name": "Chaos Charm",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Two different players may destroy a card in hand.\nYou may destroy this. If you do, remove a fire token from your location on the map.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Chaos_Charm"
  },
  {
    "id": "wiki-3667",
    "name": "Char",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Cast: Deal 6 damage.\nIf this damage causes a minion to be discarded, any player gains 2 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Char"
  },
  {
    "id": "wiki-8340",
    "name": "Chromia Sphere",
    "type": "gem",
    "cost": 5,
    "sets": [
      "The Surface"
    ],
    "effect": "Gain 2 Æ.\nIf there are two or more copies of this card in the Develop zone, gain an additional 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Chromia_Sphere"
  },
  {
    "id": "wiki-3185",
    "name": "Chronal Arc",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Promo"
    ],
    "effect": "This spell must be prepped to two adjacent breaches so that this card touches both breaches. This fully occupies both breaches.\nCast: Deal 4 damage. You may place this card into your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Chronal_Arc"
  },
  {
    "id": "wiki-7959",
    "name": "Chronoid",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Any ally gains 3 AetherTokens.\n—\nRecall Look at the top card of the turn order deck. You may place that card on the bottom or the top of the turn order deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Chronoid"
  },
  {
    "id": "wiki-358",
    "name": "Chronophage Coil",
    "type": "relic",
    "cost": 8,
    "sets": [
      "Promo"
    ],
    "effect": "Destroy this. Shuffle any player's turn order card into the turn order deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Chronophage_Coil"
  },
  {
    "id": "wiki-2475",
    "name": "Cinder Shower",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Southern Village"
    ],
    "effect": "While prepped, when you gain a card, deal 1 damage.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cinder_Shower"
  },
  {
    "id": "wiki-3484",
    "name": "Citrine Shrapnel",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Promo"
    ],
    "effect": "Gain 1 Æ for each copy of this card in the Develop zone.\nOR\nDevelop a Citrine Shrapnel.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Citrine_Shrapnel"
  },
  {
    "id": "wiki-2650",
    "name": "Cleanse",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Return To Gravehold"
    ],
    "effect": "Cast: Deal 3 damage.\nIf you have 3 or less life, gain 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cleanse"
  },
  {
    "id": "wiki-296",
    "name": "Clouded Sapphire",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Gain 3 Æ.\nIf this is the first time you have played Clouded Sapphire this turn, any ally gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Clouded_Sapphire"
  },
  {
    "id": "wiki-918",
    "name": "Cobalt Clump",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nThe next time you gain a card that costs 5 Æ or more this turn, silence a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cobalt_Clump"
  },
  {
    "id": "wiki-8339",
    "name": "Coiled Trillium",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Returned"
    ],
    "effect": "Gain 2 Æ.\nAny ally may discard a Coiled Trillium in hand. If they do, they gain 2 AetherTokens and 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Coiled_Trillium"
  },
  {
    "id": "wiki-2808",
    "name": "Combust Legend",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Caverns"
    ],
    "effect": "While prepped, after any player plays a relic, place an AetherToken on this.\nCast: Deal 3 damage. Gain all of the AetherTokens on this.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Combust_Legend"
  },
  {
    "id": "wiki-1209",
    "name": "Combustion",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Depths"
    ],
    "effect": "Cast: Deal 2 damage to a minion. Deal 2 damage to a different minion or the nemesis.\n(Effects that modify damage affect both instances of damage this spell deals.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Combustion"
  },
  {
    "id": "wiki-8342",
    "name": "Comet Scrap",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Promo"
    ],
    "effect": "Gain 2 Æ.\nAny ally may place a card in hand on top of your deck. If they do, gain 1 additional Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Comet_Scrap"
  },
  {
    "id": "wiki-3533",
    "name": "Conclave Scroll",
    "type": "relic",
    "cost": 3,
    "sets": [
      "War Eternal"
    ],
    "effect": "Gain 1 charge.\nIf this card's supply pile is empty, you may destroy the top card of any ally's discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Conclave_Scroll"
  },
  {
    "id": "wiki-3524",
    "name": "Conductive Grit",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ. Gain 1 pulse token.\nOR\nYou may lose 1 pulse token. If you do, gain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Conductive_Grit"
  },
  {
    "id": "wiki-1048",
    "name": "Conflagration",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Void"
    ],
    "effect": "LINK\n(Two spells with Link may be prepped to the same breach.)\nCast: Deal 2 damage. Gain 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Conflagration"
  },
  {
    "id": "wiki-1674",
    "name": "Conjure the Lost",
    "type": "spell",
    "cost": 6,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast: Deal 5 damage.\nYou may destroy this. If you do, Gravehold gains 4 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Conjure_the_Lost"
  },
  {
    "id": "wiki-2141",
    "name": "Consume Magic",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 3 damage.\nIf this defeats a minion from the nemesis deck, swap this card for Detonate.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Consume_Magic"
  },
  {
    "id": "wiki-64",
    "name": "Consuming Void",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Destroy up to two cards in hand.\nDeal 3 damage for each card destroyed in this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Consuming_Void"
  },
  {
    "id": "wiki-1612",
    "name": "Contingency Kit",
    "type": "relic",
    "cost": 4,
    "sets": [
      "The Ruins"
    ],
    "effect": "Any ally draws two cards and then discards one card.\nOR\nFocus any player's breach.\nIf you have 2 life or less, do both.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Contingency_Kit"
  },
  {
    "id": "wiki-1782",
    "name": "Convection Field",
    "type": "spell",
    "cost": 5,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast: Deal 4 damage.\nOR\nCast: Deal 2 damage. Any ally may destroy a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Convection_Field"
  },
  {
    "id": "wiki-874",
    "name": "Coruscating Mirror",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The Descent"
    ],
    "effect": "When a minion is drawn from the nemesis deck, you may reveal this from hand to place an electrify token on that minion.\n—\nAny ally draws a card and gains an AetherToken.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Coruscating_Mirror"
  },
  {
    "id": "wiki-1440",
    "name": "Coruscating Sapal",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Promo"
    ],
    "effect": "Gain 2 Æ.\nYou may lose 1 charge. If you do, gain an additional 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Coruscating_Sapal"
  },
  {
    "id": "wiki-8261",
    "name": "Cosmic Pulse",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Surface"
    ],
    "effect": "While prepped, any number of spells may be conjured to this breach.\nWhile prepped, once per turn during your main phase, you may Conjure.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cosmic_Pulse"
  },
  {
    "id": "wiki-2738",
    "name": "Cosmic Reckoning",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: If this is the first spell you cast this turn, any ally draws four cards and preps any number of spells in hand to their opened or closed breaches.\nUse this card only when playing with Xaxos: Reckoner.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Cosmic_Reckoning"
  },
  {
    "id": "wiki-2374",
    "name": "Crescendo Ray",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Cast: Deal 3 damage.\nGain 1 Æ for each other spell you have prepped.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Crescendo_Ray"
  },
  {
    "id": "wiki-3113",
    "name": "Crescent Greave",
    "type": "relic",
    "cost": 8,
    "sets": [
      "Evolution"
    ],
    "effect": "When you Develop this, draw an additional card at the end of this turn.\n—\nGain 2 charges.\nDraw an additional card at the end of this turn.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Crescent_Greave"
  },
  {
    "id": "wiki-2361",
    "name": "Crumbling Compound",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ. You may discard a gem in hand. If you do, gain an additional 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Crumbling_Compound"
  },
  {
    "id": "wiki-1669",
    "name": "Crystal Carapace",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 4 damage.\n—\nWhen another card or effect would cause you to discard or destroy this, you may return it to your hand. If it was prepped, you may prep it. (Ignore this effect while this card is in the supply.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Crystal_Carapace"
  },
  {
    "id": "wiki-3845",
    "name": "Crystallize",
    "type": "spell",
    "cost": 8,
    "sets": [
      "War Eternal"
    ],
    "effect": "This spell must be prepped to adjacent breaches so that this card touches both breaches. This fully occupies both breaches.\nCast: Any ally reveals their hand. Deal 2 damage for each gem in that ally's hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Crystallize"
  },
  {
    "id": "wiki-1927",
    "name": "Dark Fire",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Discard up to two cards in hand.\nDeal 3 damage for each card discarded this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dark_Fire"
  },
  {
    "id": "wiki-2008",
    "name": "Darklite Sample",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nYou may place your deck into your discard pile without rearranging the cards.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Darklite_Sample"
  },
  {
    "id": "wiki-293",
    "name": "Dawn Barrage",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Deal 1 damage.\nOther spells you cast during your casting phase this turn deal an additional 1 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dawn_Barrage"
  },
  {
    "id": "wiki-1662",
    "name": "Dead Reckoning",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Echo\nCast: Deal 4 damage.\nUse this card only when playing with Xaxos: Reckoner.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dead_Reckoning"
  },
  {
    "id": "wiki-7963",
    "name": "Deadly Accord",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 2 damage.\nAny ally may discard a Deadly Accord in hand and draw a card. If they do, deal 1 additional damage and you may destroy a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Deadly_Accord"
  },
  {
    "id": "wiki-3521",
    "name": "Defensive Dome",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "When an attack is drawn from the nemesis deck, you may reveal and destroy this to discard that attack without resolving it.\n—\nAny player gains 2 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Defensive_Dome"
  },
  {
    "id": "wiki-3546",
    "name": "Deluge of Power",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The New Age"
    ],
    "effect": "Cast: Deal 4 damage.\nAny ally may discard up to two cards in hand. They draw a card for each card discarded this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Deluge_of_Power"
  },
  {
    "id": "wiki-7966",
    "name": "Descent of Destruction",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "While prepped, once per turn during your main phase, you may Conjure to an opened or closed breach.\nCast: Deal 4 damage. Spells you cast this turn that cost 2 Æ or less deal 2 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Descent_of_Destruction"
  },
  {
    "id": "wiki-235",
    "name": "Destiny Forger",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Any ally may destroy a card in hand. That player may gain a card that costs up to 2 Æ more than the destroyed card and place it into their hand.\nOR\nDestroy this. Gain 2 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Destiny_Forger"
  },
  {
    "id": "wiki-3351",
    "name": "Detonate",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 3 damage to a minion. Deal 3 damage to the nemesis.\nThis starts the game in the Swap zone.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Detonate"
  },
  {
    "id": "wiki-1143",
    "name": "Devouring Shadow",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Depths"
    ],
    "effect": "While prepped, once per turn during your main phase you may destroy a card in hand.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Devouring_Shadow"
  },
  {
    "id": "wiki-6",
    "name": "Diamin",
    "type": "gem",
    "cost": 8,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 4 Æ.\nYou may cast any player's prepped spell.\nThis starts the game in the Swap zone.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Diamin"
  },
  {
    "id": "wiki-867",
    "name": "Diamond Cluster",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Gain 2 Æ.\nIf this is the second time you have played Diamond Cluster this turn, gain an additional 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Diamond_Cluster"
  },
  {
    "id": "wiki-1515",
    "name": "Dimensional Key",
    "type": "relic",
    "cost": 8,
    "sets": [
      "The Void"
    ],
    "effect": "Any ally draws two cards.\nOR\nDestroy this. Suffer 1 damage. Place a card in play from the nemesis deck on top of the nemesis deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dimensional_Key"
  },
  {
    "id": "wiki-118",
    "name": "Disintegrating Scythe",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Depths"
    ],
    "effect": "Cast: Deal 8 damage. Suffer 1 damage. Instead of discarding this, destroy it or place it on top of any player's discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Disintegrating_Scythe"
  },
  {
    "id": "wiki-700",
    "name": "Dizzying Burst",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 6 damage. Reveal the turn order deck. Return it in any order.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dizzying_Burst"
  },
  {
    "id": "wiki-2809",
    "name": "Double Tap",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Cast: Deal 1 damage. Deal 1 damage. (Effects that modify damage affect both instances of damage this spell deals.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Double_Tap"
  },
  {
    "id": "wiki-1922",
    "name": "Douse",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may destroy this. If you do, remove a fire token from your location on the map.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Douse"
  },
  {
    "id": "wiki-2521",
    "name": "Dragonflare",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 5 damage.\nThis starts the game in the Swap zone.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dragonflare"
  },
  {
    "id": "wiki-2378",
    "name": "Draining Touch",
    "type": "spell",
    "cost": 2,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Cast: Deal 1 damage. Gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Draining_Touch"
  },
  {
    "id": "wiki-2544",
    "name": "Dread Diamond",
    "type": "gem",
    "cost": 3,
    "sets": [
      "War Eternal"
    ],
    "effect": "Gain 2 Æ.\nYou may discard a prepped spell. If you do, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dread_Diamond"
  },
  {
    "id": "wiki-8368",
    "name": "Dreamer's Crown",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The Surface"
    ],
    "effect": "Gain 1 charge and 2 pulse tokens.\nOR\nYou may lose 4 pulse tokens to deal damage equal to your unspent Æ. Then lose all of your unspent Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dreamer's_Crown"
  },
  {
    "id": "wiki-1013",
    "name": "Drown in Flames",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Promo"
    ],
    "effect": "Cast: Deal 4 damage to a minion or the nemesis. You may lose 2 charges. If you do, repeat this. (Effects that modify damage affect each instance of damage this spell deals.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Drown_in_Flames"
  },
  {
    "id": "wiki-1960",
    "name": "Dual Flash",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Ancients"
    ],
    "effect": "Cast: Deal 2 damage.\nIf this is the first time you have cast Dual Flash during your casting phase this turn, you may cast any player's prepped Dual Flash without discarding it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dual_Flash"
  },
  {
    "id": "wiki-846",
    "name": "Duplicating Sazite",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 3 Æ.\nThe next time you gain a card this turn, you may discard a prepped spell that costs 1 Æ or more. If you do, any ally gains a card from the supply that costs less than or equal to the card you gained.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Duplicating_Sazite"
  },
  {
    "id": "wiki-953",
    "name": "Dust Caller",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Ancients"
    ],
    "effect": "Cast: Deal 4 damage.\nAny ally returns a card that costs 0 Æ from their discard pile to their hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Dust_Caller"
  },
  {
    "id": "wiki-3579",
    "name": "Echo Rune",
    "type": "relic",
    "cost": 2,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Any player gains 1 charge.\n—\nYou may discard this during any ally's main phase. If you do, they gain 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Echo_Rune"
  },
  {
    "id": "wiki-2252",
    "name": "Echo Stone",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Promo"
    ],
    "effect": "Gain 2 Æ.\nIf you have played another Echo Stone this turn, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Echo_Stone"
  },
  {
    "id": "wiki-1302",
    "name": "Electinium",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Caverns"
    ],
    "effect": "When you gain this, place an electrify token on any enemy.\n—\nGain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Electinium"
  },
  {
    "id": "wiki-3850",
    "name": "Electrum Rod",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Any player may focus one of their breaches.\nIf that player has a prepped spell that costs 5 Æ or more, gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Electrum_Rod"
  },
  {
    "id": "wiki-3124",
    "name": "Element Convertor",
    "type": "relic",
    "cost": 6,
    "sets": [
      "The Ruins"
    ],
    "effect": "The players collectively destroy up to two gems from their hands or discard piles.\nReveal the top card of the turn order deck. If it is a player card, that player gains an Æ token.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Element_Convertor"
  },
  {
    "id": "wiki-2158",
    "name": "Elemental Conduit",
    "type": "relic",
    "cost": 8,
    "sets": [
      "The Caverns"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, place an elemental token on any enemy before resolving that spell's effect.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Elemental_Conduit"
  },
  {
    "id": "wiki-1503",
    "name": "Elemental Reckoning",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 3 damage.\nAny player or Gravehold gains 3 life.\nUse this card only when playing with Xaxos: Reckoner.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Elemental_Reckoning"
  },
  {
    "id": "wiki-2208",
    "name": "Elongated Looq",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 2 Æ.\nThe next time you focus or open a breach this turn, gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Elongated_Looq"
  },
  {
    "id": "wiki-7972",
    "name": "Ember Gale",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 4 damage.\nEach ally who has six or more cards in their discard pile focuses one of their breaches.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Ember_Gale"
  },
  {
    "id": "wiki-3023",
    "name": "Embody Flame",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Cast: Deal 5 damage.\nYou may destroy a card in this card's supply pile. If you do, deal 3 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Embody_Flame"
  },
  {
    "id": "wiki-53",
    "name": "Encased Fossil",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 2 Æ.\nYou may spend 6 Æ to swap this card for Diamin.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Encased_Fossil"
  },
  {
    "id": "wiki-3058",
    "name": "Endless Weave",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Descent"
    ],
    "effect": "While prepped, when you use your ability, any ally may draw a card and prep a spell in hand to an opened or closed breach.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Endless_Weave"
  },
  {
    "id": "wiki-2165",
    "name": "Energized Conduit",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Southern Village"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, the player who cast that spell gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Energized_Conduit"
  },
  {
    "id": "wiki-1624",
    "name": "Energized Rubidium",
    "type": "gem",
    "cost": 5,
    "sets": [
      "The New Age"
    ],
    "effect": "Gain 3 Æ.\nAny ally may discard a card in hand. If they do, that player gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Energized_Rubidium"
  },
  {
    "id": "wiki-2182",
    "name": "Energizing Elixir",
    "type": "relic",
    "cost": 4,
    "sets": [
      "The Descent"
    ],
    "effect": "Any ally draws two cards.\nYou may spend 2 Knowledge to destroy a card in your hand or discard pile.\nThis is part of Raven's Forgotten Ritual deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Energizing_Elixir"
  },
  {
    "id": "wiki-3830",
    "name": "Energy Router",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Past and Future"
    ],
    "effect": "Attach this to any player's breach.\nWhen a spell is cast from this breach, any player gains 1 life.\nUse this card only when playing with Auren.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Energy_Router"
  },
  {
    "id": "wiki-654",
    "name": "Entangled Shard",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ. If you have 3 or more charges, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Entangled_Shard"
  },
  {
    "id": "wiki-1037",
    "name": "Entwined Tremor",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 6 damage. If there is a spell that costs 5 Æ or more prepped to an adjacent breach, this deals 2 additional damage. If there is a spell that costs 4 Æ or less prepped to an adjacent breach, gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Entwined_Tremor"
  },
  {
    "id": "wiki-1827",
    "name": "Equilibrium",
    "type": "spell",
    "cost": 7,
    "sets": [
      "War Eternal"
    ],
    "effect": "While prepped, when you suffer damage reduce that damage by 1, to a minimum of 1.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Equilibrium"
  },
  {
    "id": "wiki-2985",
    "name": "Erasure of Mind",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Southern Village"
    ],
    "effect": "Cast: Destroy a card in hand that costs 3 Æ or more. If you do, deal 10 damage.\nOR\nCast: Deal 5 damage. Reveal the top two cards of your deck and place any number on top of your discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Erasure_of_Mind"
  },
  {
    "id": "wiki-1035",
    "name": "Erratic Ingot",
    "type": "gem",
    "cost": 5,
    "sets": [
      "War Eternal"
    ],
    "effect": "Gain 2 Æ.\nGain an additional 2 Æ if there is at least one nemesis turn order card in the turn order discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Erratic_Ingot"
  },
  {
    "id": "wiki-178",
    "name": "Essence Theft",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may discard a card in hand. If you do, any player gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Essence_Theft"
  },
  {
    "id": "wiki-1900",
    "name": "Eternity Charm",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The Void"
    ],
    "effect": "Focus your closed breach with the lowest focus cost.\nReveal the top three cards of your deck. You may prep one of the revealed spells.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Eternity_Charm"
  },
  {
    "id": "wiki-7967",
    "name": "Eternity's Echo",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 3 damage.\n—\nRecall You may cast one of your prepped spells. Conjure.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Eternity's_Echo"
  },
  {
    "id": "wiki-2382",
    "name": "Eternus Anomaly",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nIf this is the first Anomaly card you have played this turn, return this to the Regularity deck and gain a Crystal from that deck.\nUse this card only when playing with Nook: Timeless.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Eternus_Anomaly"
  },
  {
    "id": "wiki-2205",
    "name": "Ethereal Hand",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Legacy"
    ],
    "effect": "Any ally draws two cards.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Ethereal_Hand"
  },
  {
    "id": "wiki-1689",
    "name": "Evaporating Ray",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 3 damage. Any ally may discard a card in hand that costs 2 Æ or more. If they do, this deals an additional 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Evaporating_Ray"
  },
  {
    "id": "wiki-1134",
    "name": "Exogranite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The New Age"
    ],
    "effect": "Gain 2 Æ.\nOR\nDestroy this. Gain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Exogranite"
  },
  {
    "id": "wiki-2617",
    "name": "Expunge Essence",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Caverns"
    ],
    "effect": "Cast: Remove an elemental token from an enemy. If you do, deal 6 damage to it.\nOR\nCast: Place an immolate token on an enemy and deal 2 damage to it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Expunge_Essence"
  },
  {
    "id": "wiki-3523",
    "name": "Fall Lantern",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Evolution"
    ],
    "effect": "When you Develop this, deal 2 damage.\n—\nAttach this to any player's breach. When a spell is cast from this breach, any ally may prep a spell to one of their closed or opened breaches.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fall_Lantern"
  },
  {
    "id": "wiki-3239",
    "name": "Fatal Harmony",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The New Age"
    ],
    "effect": "Cast: Deal 4 damage. Any ally may discard a Fatal Harmony in hand and draw a card. If they do, deal 3 damage. (Effects that modify damage affect both instances of damage.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fatal_Harmony"
  },
  {
    "id": "wiki-800",
    "name": "Fate's Edge",
    "type": "relic",
    "cost": 6,
    "sets": [
      "The Abyss"
    ],
    "effect": "Any player and Gravehold each gain 1 life.\nOR\nDestroy this. Place the bottom two cards of the nemesis deck on top of the nemesis deck. Then, shuffle any player's turn order card into the turn order deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fate's_Edge"
  },
  {
    "id": "wiki-3477",
    "name": "Feedback Aura",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Cast: Deal 3 damage.\nIf you have 4 or more charges, deal 3 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Feedback_Aura"
  },
  {
    "id": "wiki-1044",
    "name": "Feeding Lichen",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Evolution"
    ],
    "effect": "Gain 2 Æ.\nIf the nemesis tier is 2 or higher, draw an additional card at the end of this turn.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Feeding_Lichen"
  },
  {
    "id": "wiki-1443",
    "name": "Feral Lightning",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "This spell may be prepped to a closed breach without focusing it.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Feral_Lightning"
  },
  {
    "id": "wiki-981",
    "name": "Fiend Catcher",
    "type": "relic",
    "cost": 3,
    "sets": [
      "War Eternal"
    ],
    "effect": "You may destroy a card in your hand or discard pile.\nReveal the top card of the turn order deck. If you revealed a nemesis turn order card, you may place that card on the bottom of the turn order deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fiend_Catcher"
  },
  {
    "id": "wiki-2051",
    "name": "Fiery Conclusion",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 4 damage. If there are three or more empty supply piles, deal 3 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fiery_Conclusion"
  },
  {
    "id": "wiki-1234",
    "name": "Fiery Torrent",
    "type": "spell",
    "cost": 5,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast: Deal 2 damage.\nDeal 2 additional damage for each other Fiery Torrent prepped by any player.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fiery_Torrent"
  },
  {
    "id": "wiki-1207",
    "name": "Final Reckoning",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 4 damage.\nReveal the top three cards of your deck. You may destroy any of those cards.\nUse this card only when playing with Xaxos: Reckoner.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Final_Reckoning"
  },
  {
    "id": "wiki-2525",
    "name": "Fire Chakram",
    "type": "spell",
    "cost": 2,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fire_Chakram"
  },
  {
    "id": "wiki-2871",
    "name": "Flame Geyser",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Descent"
    ],
    "effect": "When you develop this, place an immolate token on any enemy.\n—\nCast: Place a venom token on an enemy and deal 2 damage to it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Flame_Geyser"
  },
  {
    "id": "wiki-1060",
    "name": "Flame Jab",
    "type": "spell",
    "cost": 1,
    "sets": [
      "Southern Village"
    ],
    "effect": "Cast: Deal 2 damage to a minion.\nYou may destroy this. If you do, gain 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Flame_Jab"
  },
  {
    "id": "wiki-604",
    "name": "Flamequake",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 5 damage.\n—\nRecall Lose 2 charges to remove a fire token from your location on the map.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Flamequake"
  },
  {
    "id": "wiki-3725",
    "name": "Flamium",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Descent"
    ],
    "effect": "Gain 2 Æ.\nOR\nPlace an immolate token on an enemy.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Flamium"
  },
  {
    "id": "wiki-351",
    "name": "Flash of Intellect",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "LINK (Two spells with Link may be prepped to the same breach.)\nCast: Deal 3 damage. If there are six or more other cards in your discard pile, you may gain a Flash of Intellect from the supply and place it on top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Flash_of_Intellect"
  },
  {
    "id": "wiki-1217",
    "name": "Fleeting Vision",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Promo"
    ],
    "effect": "Cast: Deal 2 damage.\nEach player may reveal the top two cards of their deck and may discard any of those cards.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fleeting_Vision"
  },
  {
    "id": "wiki-782",
    "name": "Flexing Dagger",
    "type": "relic",
    "cost": 2,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "The next time you focus or open a breach this turn, it costs 3 Æ less.\nOR\nDestroy this. Deal 1 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Flexing_Dagger"
  },
  {
    "id": "wiki-2375",
    "name": "Fluidium",
    "type": "gem",
    "cost": 2,
    "sets": [
      "The Descent"
    ],
    "effect": "Gain 2 Æ.\nGain 1 Knowledge.\nThis is part of Raven's Forgotten Ritual deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fluidium"
  },
  {
    "id": "wiki-139",
    "name": "Focusing Conduit",
    "type": "relic",
    "cost": 5,
    "sets": [
      "The Ancients"
    ],
    "effect": "Attach this to any player's breach. At the end of that player's casting phase, focus this breach. When this breach is opened, destroy this card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Focusing_Conduit"
  },
  {
    "id": "wiki-2781",
    "name": "Focusing Orb",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Focus any player's breach.\nOR\nDestroy this. Gravehold gains 3 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Focusing_Orb"
  },
  {
    "id": "wiki-3028",
    "name": "Fool's Gold",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 3 Æ.\nYou may swap this card for Smite (Spell)|Smite.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fool's_Gold"
  },
  {
    "id": "wiki-2020",
    "name": "Force Amplifier",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The New Age"
    ],
    "effect": "Cast: Deal 3 damage.\nIf this was cast from an opened III or IV breach, deal 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Force_Amplifier"
  },
  {
    "id": "wiki-1098",
    "name": "Force Bubble",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Deal 2 damage.\nOR\nCast: Return this to your hand. You may prep a spell from your hand that is not named Force Bubble.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Force_Bubble"
  },
  {
    "id": "wiki-28",
    "name": "Force Catalyst",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Promo"
    ],
    "effect": "While prepped, during your main phase you may spend 3 Æ to cast any player's prepped spell.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Force_Catalyst"
  },
  {
    "id": "wiki-210",
    "name": "Force Transfusion",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 3 damage. If you have 3 or more charges, gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Force_Transfusion"
  },
  {
    "id": "wiki-1448",
    "name": "Fortified Frost",
    "type": "spell",
    "cost": 2,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 2 damage.\nYou may discard a card in hand. If you do, deal 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fortified_Frost"
  },
  {
    "id": "wiki-933",
    "name": "Fossilized Scarab",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Void"
    ],
    "effect": "Gain 2 Æ.\nOR\nDestroy a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fossilized_Scarab"
  },
  {
    "id": "wiki-1587",
    "name": "Fountain of Elements",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Descent"
    ],
    "effect": "While prepped, once per turn when any player develops a card, that player places an elemental token on any enemy.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fountain_of_Elements"
  },
  {
    "id": "wiki-4297",
    "name": "Fractured Lightning",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 5 damage.\nReveal the top card of the nemesis deck. If it is an attack or power, overheat this card.\nIf this card is fully overheated, destroy it and the nemesis Unleashes.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fractured_Lightning"
  },
  {
    "id": "wiki-2039",
    "name": "Fractured Quartz",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Promo"
    ],
    "effect": "Gain 2 Æ.\nYou may destroy two cards in this card's supply pile. If you do, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fractured_Quartz"
  },
  {
    "id": "wiki-7971",
    "name": "Frostfire Maelstrom",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "While prepped, once per turn during your main phase, gain 1 pulse token.\nCast: Deal 2 damage divided however you choose among enemies. Lose any number of pulse tokens. Deal 1 additional damage for each pulse token lost this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Frostfire_Maelstrom"
  },
  {
    "id": "wiki-2852",
    "name": "Frozen Light",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 3 Æ.\nYou may discard this during any ally's turn. If you do, they gain 1 charge and you gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Frozen_Light"
  },
  {
    "id": "wiki-1741",
    "name": "Frozen Magmite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "War Eternal"
    ],
    "effect": "Gain 2 Æ.\nYou may place the next card you gain this turn on top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Frozen_Magmite"
  },
  {
    "id": "wiki-1814",
    "name": "Fulminate",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Void"
    ],
    "effect": "While prepped, other spells you cast deal 1 additional damage.\nLINK\n(Two spells with Link may be prepped to the same breach.)\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fulminate"
  },
  {
    "id": "wiki-3490",
    "name": "Fulmite Slab",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 1 Æ. Gain 2 pulse tokens. Until the end of the turn, you may lose 1 pulse token to gain 1 Æ any number of times.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Fulmite_Slab"
  },
  {
    "id": "wiki-3743",
    "name": "Galactum Cache",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nAny ally draws cards equal to the boost marks on this card. Then, they discard that many cards.\nThe next time you gain a card that costs 6 Æ or more this turn, boost this.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Galactum_Cache"
  },
  {
    "id": "wiki-108",
    "name": "Galvanize",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "While prepped, once during your main phase, you may Conjure.\nCast: Deal 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Galvanize"
  },
  {
    "id": "wiki-2423",
    "name": "Galvanized Bauble",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The New Age"
    ],
    "effect": "Focus any ally's breach.\nOR\nCast any player's prepped spell. You may destroy it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Galvanized_Bauble"
  },
  {
    "id": "wiki-3029",
    "name": "Galvanized Sapphire",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 2 Æ.\nXaxos: Outcast gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Galvanized_Sapphire"
  },
  {
    "id": "wiki-1433",
    "name": "Gather Force",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Origins"
    ],
    "effect": "Any ally draws two cards.\nGravehold gains 1 life.\nSwap this card for Propel.\nThis starts the game in the Swap zone.'",
    "wiki": "https://aeonsend.wiki.gg/wiki/Gather_Force"
  },
  {
    "id": "wiki-1758",
    "name": "Gathered Will",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 2 damage.\nYou may gain a spell from any supply pile that costs 4 Æ or less and place it on top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Gathered_Will"
  },
  {
    "id": "wiki-3587",
    "name": "Gathering Winds",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Southern Village"
    ],
    "effect": "Cast: Deal 2 damage.\nIf there are six or more other cards in your discard pile, focus any player's breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Gathering_Winds"
  },
  {
    "id": "wiki-3822",
    "name": "Geophage",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 1 Æ.\nYou may destroy a gem in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Geophage"
  },
  {
    "id": "wiki-1094",
    "name": "Ghost Harness",
    "type": "relic",
    "cost": 6,
    "sets": [
      "The Ruins"
    ],
    "effect": "Each player focuses their closed breach with the lowest focus cost.\nOR\nEach player may Conjure.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Ghost_Harness"
  },
  {
    "id": "wiki-2124",
    "name": "Giga Inferno",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 5 damage.\nAny player focuses a breach.\nAny player gains 1 charge.\nUse this card only when playing with Leisan.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Giga_Inferno"
  },
  {
    "id": "wiki-3098",
    "name": "Gilded Marble",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Gilded_Marble"
  },
  {
    "id": "wiki-4417",
    "name": "Glass Core",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Promo Pack 1 (Digital)"
    ],
    "effect": "Gain 2 Æ. You may lose 1 durability to gain an additional 1 Æ. When this has 0 durability, destroy it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Glass_Core"
  },
  {
    "id": "wiki-1163",
    "name": "Glass-Eyed Oracle",
    "type": "relic",
    "cost": 1,
    "sets": [
      "Return To Gravehold"
    ],
    "effect": "Gain 1 Æ.\nOR\nDestroy this and any number of copies of this card in hand. You may gain a card with cost up to three times the numbers of copies destroyed.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Glass-Eyed_Oracle"
  },
  {
    "id": "wiki-2159",
    "name": "Glint Splinter",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\n—\nRecallYou may discard a prepped spell. If you do, gain 1 Æ and you may place the next card you gain this turn on the top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Glint_Splinter"
  },
  {
    "id": "wiki-266",
    "name": "Glittering Facet",
    "type": "gem",
    "cost": 1,
    "sets": [
      "The Caverns"
    ],
    "effect": "Gain 1 Æ.\nOR\nYou may discard any number of other facets. Gain 2 Æ and an additional 2 Æ for each card discarded this way. This Æ can only be used to gain a gem.\nUse this card only when playing with Alcheia.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Glittering_Facet"
  },
  {
    "id": "wiki-1966",
    "name": "Glowing Facet",
    "type": "gem",
    "cost": 1,
    "sets": [
      "The Caverns"
    ],
    "effect": "Gain 1 Æ.\nOR\nYou may discard any number of other facets. Gain 2 Æ and an additional 2 Æ for each card discarded this way. This Æ can only be used to gain a spell.\nUse this card only when playing with Alcheia.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Glowing_Facet"
  },
  {
    "id": "wiki-3279",
    "name": "Glowstone",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 2 Æ.\nSwap this card for Illuminite.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Glowstone"
  },
  {
    "id": "wiki-2056",
    "name": "Glutton's Jewel",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Promo"
    ],
    "effect": "Gain 3 Æ.\nIf your deck and discard pile contains 15 or more cards combined, place any number of cards from a supply pile other than Glutton's Jewel on top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Glutton's_Jewel"
  },
  {
    "id": "wiki-1108",
    "name": "Golden Infusion",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, the player who cast that spell gains 2 Æ.\nUse this card only when playing with Janti.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Golden_Infusion"
  },
  {
    "id": "wiki-3861",
    "name": "Grassblade",
    "type": "spell",
    "cost": 2,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "You may destroy this from your hand during any ally's main phase. If you do, draw a card.\nCast: Deal 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Grassblade"
  },
  {
    "id": "wiki-1191",
    "name": "Gravity Node",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Any player discards a card in hand. If they do, deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Gravity_Node"
  },
  {
    "id": "wiki-4511",
    "name": "Harbinger Descent",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 6 damage.\nYou may discard three of your other prepped spells to swap this card for Apocalypse.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Harbinger_Descent"
  },
  {
    "id": "wiki-3664",
    "name": "Harmonize",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Ruins"
    ],
    "effect": "You may discard this card from your hand when any ally casts a spell to have that spell deal an additional 2 damage.\n—\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Harmonize"
  },
  {
    "id": "wiki-257",
    "name": "Hasted Intellect",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Outcasts"
    ],
    "effect": "While prepped, when you gain card, you may place that card on top of your deck.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Hasted_Intellect"
  },
  {
    "id": "wiki-415",
    "name": "Haunted Berylite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Gain 2 Æ.\nOR\nDiscard a card in hand. If you do, gain 2 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Haunted_Berylite"
  },
  {
    "id": "wiki-446",
    "name": "Heliocopter",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 2 damage.\nGain 1 charge.\nUse this card only when playing with Auren.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Heliocopter"
  },
  {
    "id": "wiki-1732",
    "name": "Helix of Amber",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 2 Æ.\nYou may suffer 1 damage. If you do, destroy a card that costs 0 Æ in your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Helix_of_Amber"
  },
  {
    "id": "wiki-7974",
    "name": "Hewn Gravitite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Gain 2 Æ. You may lose 2 pulse tokens. If you do, cast any player's prepped spell.\n—\nRecall Gain 1 pulse token.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Hewn_Gravitite"
  },
  {
    "id": "wiki-128",
    "name": "Hulking Comet",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 4 damage.\nAny ally draws three cards and discards a card in hand.\nUse this card only when playing with Leisan.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Hulking_Comet"
  },
  {
    "id": "wiki-3824",
    "name": "Humming Shell",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Promo"
    ],
    "effect": "Destroy up to two cards in hand or discard pile.\nOR\nGain 2 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Humming_Shell"
  },
  {
    "id": "wiki-207",
    "name": "Hungry Avite",
    "type": "gem",
    "cost": 6,
    "sets": [
      "The Descent"
    ],
    "effect": "If you have 2 or more charges, you may gain or develop this for 1 less Æ.\n—\nWhen you develop this, focus a breach.\n—\nGain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Hungry_Avite"
  },
  {
    "id": "wiki-8338",
    "name": "Ice-Dusted Jewel",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Returned"
    ],
    "effect": "Gain 2 Æ and 1 pulse token.\nOR\nYou may lose 5 pulse tokens to cast any player's prepped spell without discarding it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Ice-Dusted_Jewel"
  },
  {
    "id": "wiki-3095",
    "name": "Ignite",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Deal 2 damage.\nAny ally gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Ignite"
  },
  {
    "id": "wiki-788",
    "name": "Illuminating Flame",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Promo"
    ],
    "effect": "Cast: Deal 5 damage.\nIf this was cast from an opened III or IV breach, you may destroy this. If you do, gain 3 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Illuminating_Flame"
  },
  {
    "id": "wiki-2063",
    "name": "Illuminite",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 3 Æ. Swap this card for Glowstone.\nThis starts the game in the Swap zone.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Illuminite"
  },
  {
    "id": "wiki-8380",
    "name": "Imbued Firethorn",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Surface"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may destroy a card in hand.\nUse this card only when playing with Inco.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Imbued_Firethorn"
  },
  {
    "id": "wiki-2974",
    "name": "Imbued Pocketwatch",
    "type": "relic",
    "cost": 2,
    "sets": [
      "Past and Future"
    ],
    "effect": "Any player gains a charge.\nIf there are two or more Imbued Pocketwatches in the Develop zone, any player gains a life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Imbued_Pocketwatch"
  },
  {
    "id": "wiki-97",
    "name": "Imbued Smash",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The New Age"
    ],
    "effect": "Cast: Deal 4 damage. You may discard a card in hand. If you do, deal 2 damage to the nemesis. (Effects that modify damage affect both instances of damage.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Imbued_Smash"
  },
  {
    "id": "wiki-3049",
    "name": "Incinerating Fist",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Incinerating_Fist"
  },
  {
    "id": "wiki-8385",
    "name": "Infernal Cascade",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Returned"
    ],
    "effect": "Cast: Deal 2 damage.\nYou may cast any player's prepped spell that costs 2 Æ or less without discarding it. Then, cast it again.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Infernal_Cascade"
  },
  {
    "id": "wiki-90",
    "name": "Infernal Infusion",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, it deals an additional 2 damage.\nUse this card only when playing with Janti.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Infernal_Infusion"
  },
  {
    "id": "wiki-435",
    "name": "Infernal Mirror",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "Any ally gains 1 charge. Any player gains 2 pulse tokens. You may lose 2 pulse tokens. If you do, cast any player's prepped spell. That spell deals 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Infernal_Mirror"
  },
  {
    "id": "wiki-387",
    "name": "Infused Galvite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Descent"
    ],
    "effect": "Gain 2 Æ.\nOR\nGain 1 Æ. Place an electrify token on any enemy.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Infused_Galvite"
  },
  {
    "id": "wiki-337",
    "name": "Infused Ignition",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 3 damage.\nIf Xaxos: Outcast has 4 or less charges, he gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Infused_Ignition"
  },
  {
    "id": "wiki-3768",
    "name": "Inner Fire",
    "type": "spell",
    "cost": 2,
    "sets": [
      "The Void"
    ],
    "effect": "LINK\n(Two spells with Link may be prepped to the same breach.)\nCast: Deal 1 damage.\nIf the nemesis tier is 2 or higher, deal 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Inner_Fire"
  },
  {
    "id": "wiki-827",
    "name": "Inscrutable Artifact",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast any player's prepped spell that costs 5 Æ or less without discarding it.\nIf you have 3 life or less, swap this card for Aetherrune.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Inscrutable_Artifact"
  },
  {
    "id": "wiki-7973",
    "name": "Inundate",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 6 damage.\nAny ally may discard a card in hand that costs 4 Æ or more and draw a card. If they do, deal 4 damage.\n(Effects that modify damage affect each instance of damage this spell deals.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Inundate"
  },
  {
    "id": "wiki-164",
    "name": "Invention: Cosmic Locus",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Echo\nCast: Deal 2 damage. Malastar focuses a breach.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Cosmic_Locus"
  },
  {
    "id": "wiki-601",
    "name": "Invention: Demiurge Diamond",
    "type": "gem",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 4 Æ. Malastar may gain a card that costs 4 Æ or less from the supply.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Demiurge_Diamond"
  },
  {
    "id": "wiki-1957",
    "name": "Invention: Galactoscope",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, the player who cast that spell gains 1 charge, and Malastar gains 1 charge.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Galactoscope"
  },
  {
    "id": "wiki-163",
    "name": "Invention: Guiding Facet",
    "type": "gem",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 5 Æ. Malastar may return a card that costs 3 Æ or less from his discard pile to his hand.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Guiding_Facet"
  },
  {
    "id": "wiki-3631",
    "name": "Invention: Maker's Mitt",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 1 charge or destroy a card in hand or discard pile. Repeat this twice. Malastar gains an AetherToken.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Maker's_Mitt"
  },
  {
    "id": "wiki-1326",
    "name": "Invention: Meteor Strike",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 6 damage. Malastar may draw two cards. If he does, he discards two cards.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Meteor_Strike"
  },
  {
    "id": "wiki-2083",
    "name": "Invention: Quantoid",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Any ally draws three cards. Then, they discard a card in hand. Malastar draws a card.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Quantoid"
  },
  {
    "id": "wiki-2695",
    "name": "Invention: Solar Loop",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "While prepped, at the start of your casting phase you may reveal the top card of your deck. You may destroy the revealed card.\nCast: Deal 5 damage. Malastar may destroy a card in hand or discard pile.\nUse this card only when playing with Malastar: Inventor.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Invention%3A_Solar_Loop"
  },
  {
    "id": "wiki-2238",
    "name": "Iron Infusion",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "If this is destroyed, deal 5 damage.\n—\nAttach this to any player's breach. When a spell is cast from this breach, Janti gains 1 charge.\nUse this card only when playing with Janti.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Iron_Infusion"
  },
  {
    "id": "wiki-4987",
    "name": "Irradiated Jewel",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nYou may reveal the top card of the turn order deck to gain an additional 1 Æ. If a player card was revealed, overheat this card.\nIf this card is fully overheated, destroy it and Gravehold suffers 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Irradiated_Jewel"
  },
  {
    "id": "wiki-7977",
    "name": "Irradiax Lump",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Gain 3 Æ.\nGain two trinkets. Place one of the gained trinkets into your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Irradiax_Lump"
  },
  {
    "id": "wiki-2915",
    "name": "Jade",
    "type": "gem",
    "cost": 2,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Gain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Jade"
  },
  {
    "id": "wiki-932",
    "name": "Jagged Lightning",
    "type": "spell",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may discard a card in hand. If you do, any player focuses their closed breach with the lowest focus cost.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Jagged_Lightning"
  },
  {
    "id": "wiki-3741",
    "name": "Jeweled Brain",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Into The Wild"
    ],
    "effect": "Gain 2 Æ.\nOR\nGain 1 Æ. Return to your hand a card in your discard pile that costs 0 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Jeweled_Brain"
  },
  {
    "id": "wiki-7968",
    "name": "Jeweled Shrapnel",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 4 damage.\nGain two trinkets and place them on top of your deck. You may destroy a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Jeweled_Shrapnel"
  },
  {
    "id": "wiki-2866",
    "name": "Jeweled Urup",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Southern Village"
    ],
    "effect": "Gain 3 Æ.\nOR\nIf this is the second time you have played Jeweled Urup this turn, you may destroy this. If you do, gain a card from any supply pile that costs 7 Æ or less.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Jeweled_Urup"
  },
  {
    "id": "wiki-902",
    "name": "Jolting Crust",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 2 Æ. Gain 1 pulse token.\nOR\nGain 2 Æ. Lose 1 pulse token. If you do, gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Jolting_Crust"
  },
  {
    "id": "wiki-224",
    "name": "Kindle",
    "type": "spell",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "While prepped, during your main phase you may also prep one Spark to the breach this spell is prepped to. (You cannot use this effect while there is a Spark prepped to this breach.)\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Kindle"
  },
  {
    "id": "wiki-106",
    "name": "Lashing Sinew",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Origins"
    ],
    "effect": "When you prep this, draw an additional card at the end of this turn.\nCast: Deal 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Lashing_Sinew"
  },
  {
    "id": "wiki-4429",
    "name": "Lava Bolt",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Promo Pack 1 (Digital)"
    ],
    "effect": "Cast: Deal 4 damage. Lose 1 durability. When this has 0 durability, destroy it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Lava_Bolt"
  },
  {
    "id": "wiki-2352",
    "name": "Lava Tendril",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "While prepped, at the end of your casting phase deal 1 damage.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Lava_Tendril"
  },
  {
    "id": "wiki-140",
    "name": "Leeching Agate",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Nameless"
    ],
    "effect": "When you gain this, gain 1 charge.\nGain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Leeching_Agate"
  },
  {
    "id": "wiki-3014",
    "name": "Legacy Coin",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 2 Æ.\n—\nRecall Any ally gains an Æ token.\nUse this card only when playing with Nadea.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Legacy_Coin"
  },
  {
    "id": "wiki-121",
    "name": "Legacy Slayer",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Descent"
    ],
    "effect": "While prepped, when any player gains a relic, gain 1 charge.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Legacy_Slayer"
  },
  {
    "id": "wiki-4980",
    "name": "Leviathan Shell",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nIf you have played two or more other gems or relics that cost 3 Æ or more this turn, boost this. Gain an additional 1 Æ for each boost mark on this card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Leviathan_Shell"
  },
  {
    "id": "wiki-204",
    "name": "Lightbringer Staff",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "The players collectively destroy up to two cards in their hands.\nOR\nSilence up to two minions.\nOR\nDestroy this. Remove a fire token from your location on the map.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Lightbringer_Staff"
  },
  {
    "id": "wiki-3683",
    "name": "Lightning Arrow",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may discard a card in hand. If you do, Gravehold gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Lightning_Arrow"
  },
  {
    "id": "wiki-829",
    "name": "Link Conduit",
    "type": "relic",
    "cost": 6,
    "sets": [
      "The New Age"
    ],
    "effect": "Attach this to any player's breach. Two spells may be prepped to this breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Link_Conduit"
  },
  {
    "id": "wiki-3835",
    "name": "Living Gauntlet",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Reveal the top card of your deck. You may destroy or discard it. Each ally may draw a card. Each ally that does discards a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Living_Gauntlet"
  },
  {
    "id": "wiki-7976",
    "name": "Luminous Facet",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Gain 3 Æ.\nGain a trinket.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Luminous_Facet"
  },
  {
    "id": "wiki-2137",
    "name": "Lurking Sionite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The New Age"
    ],
    "effect": "Gain 2 Æ.\nIf there is a Lurking Sionite in any ally's discard pile, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Lurking_Sionite"
  },
  {
    "id": "wiki-3560",
    "name": "Mage's Talisman",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Gain 1 charge.\nAny ally gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mage's_Talisman"
  },
  {
    "id": "wiki-3380",
    "name": "Mage's Totem",
    "type": "relic",
    "cost": 2,
    "sets": [
      "War Eternal"
    ],
    "effect": "Destroy a gem or relic you played this turn.\nOR\nDestroy this. Gravehold gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mage's_Totem"
  },
  {
    "id": "wiki-3804",
    "name": "Magnetic Burst",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 3 damage. You may reveal the top two cards of your deck and place any number of those cards on top of your discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Magnetic_Burst"
  },
  {
    "id": "wiki-239",
    "name": "Magnetic Conduit",
    "type": "relic",
    "cost": 6,
    "sets": [
      "The Caverns"
    ],
    "effect": "Attach this to any player's opened breach. When a spell is cast from this breach, do not discard that spell. You cannot cast that spell again this casting phase.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Magnetic_Conduit"
  },
  {
    "id": "wiki-1283",
    "name": "Magnify",
    "type": "spell",
    "cost": 2,
    "sets": [
      "The Ruins"
    ],
    "effect": "While prepped, an additional spell that costs 2 Æ or less may be prepped to this breach.\nCast: Deal 1 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Magnify"
  },
  {
    "id": "wiki-196",
    "name": "Manifold Container",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 1 Æ.\nThe next time you gain a card this turn, you may also gain a card that costs less than the gained card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Manifold_Container"
  },
  {
    "id": "wiki-1348",
    "name": "Mantra of Strength",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Cast: Any player focuses their closed breach with the highest focus cost. Deal 1 damage. You may destroy this. If you do, deal 2 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mantra_of_Strength"
  },
  {
    "id": "wiki-3401",
    "name": "Marble Galaxy",
    "type": "relic",
    "cost": 2,
    "sets": [
      "The New Age"
    ],
    "effect": "Any ally may discard a Marble Galaxy in hand and draw a card. Gain 1 charge or focus your closed breach with the lowest focus cost. If an ally discarded a Marble Galaxy, resolve both effects.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Marble_Galaxy"
  },
  {
    "id": "wiki-279",
    "name": "Martyr's Bone",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Focus one of your breaches or Conjure.\nYou may lose 1 charge to do both.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Martyr's_Bone"
  },
  {
    "id": "wiki-691",
    "name": "Mazra's Arc",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Ancients",
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 3 damage. Focus your closed breach with the lowest focus cost.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Arc"
  },
  {
    "id": "wiki-268",
    "name": "Mazra's Chain",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 5 damage divided however you choose to the nemesis and any number of minions.\nOR\nCast: Deal 1 damage. You may cast any ally's prepped spell without discarding it.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Chain"
  },
  {
    "id": "wiki-2059",
    "name": "Mazra's Decimation",
    "type": "spell",
    "cost": 9,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 5 damage to the nemesis. Deal 5 damage to a minion.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Decimation"
  },
  {
    "id": "wiki-115",
    "name": "Mazra's Gift",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Ancients",
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 4 damage. Any ally gains 1 charge.\nOR\nCast: Deal 4 damage. Any ally gains 1 life.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Gift"
  },
  {
    "id": "wiki-3144",
    "name": "Mazra's Inferno",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Ancients",
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 6 damage.\nOR\nCast: Deal 4 damage. Destroy a card in hand.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Inferno"
  },
  {
    "id": "wiki-840",
    "name": "Mazra's Revivification",
    "type": "spell",
    "cost": 9,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 4 damage. Any ally gains 2 life and may draw a card.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Revivification"
  },
  {
    "id": "wiki-2546",
    "name": "Mazra's Teachings",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 3 damage. Silence a minion.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Teachings"
  },
  {
    "id": "wiki-1213",
    "name": "Mazra's Wisdom",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Ancients",
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 2 damage. Any ally draws a card.\nUse this card only when playing with Mazra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mazra's_Wisdom"
  },
  {
    "id": "wiki-1378",
    "name": "Mechanek Anomaly",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Focus one of your breaches. Repeat this once. If this is the first Anomaly card you have played this turn, return this to the Regularity deck and gain a Crystal from that deck.\nUse this card only when playing with Nook: Timeless.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mechanek_Anomaly"
  },
  {
    "id": "wiki-7965",
    "name": "Megaflux Slice",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 2 damage. Gain 1 pulse token.\nOR\nCast: You may lose 3 pulse tokens. If you do, deal 7 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Megaflux_Slice"
  },
  {
    "id": "wiki-2049",
    "name": "Memory Allocator",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Caverns"
    ],
    "effect": "Cast: Deal 6 damage. Set aside any number of cards in hand. After drawing cards during your draw phase, return the set-aside cards to your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Memory_Allocator"
  },
  {
    "id": "wiki-2014",
    "name": "Memory Break",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Return To Gravehold"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may destroy a card in hand. If you do, deal additional damage equal to the cost of the destroyed card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Memory_Break"
  },
  {
    "id": "wiki-2613",
    "name": "Mentite Chunk",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 3 Æ.\nIf there are seven or more cards in your discard pile, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mentite_Chunk"
  },
  {
    "id": "wiki-1151",
    "name": "Mica Shard",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Past and Future"
    ],
    "effect": "When you gain this, you may Conjure to one of your closed or opened breaches.\n—\nGain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mica_Shard"
  },
  {
    "id": "wiki-3213",
    "name": "Mirrored Infusion",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, the player who cast that spell may return it to their hand instead of discarding it.\nUse this card only when playing with Janti.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mirrored_Infusion"
  },
  {
    "id": "wiki-1721",
    "name": "Molten Hammer",
    "type": "relic",
    "cost": 5,
    "sets": [
      "The Nameless"
    ],
    "effect": "Gain 1 charge.\nYou may destroy a card in hand or on top of any player's discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Molten_Hammer"
  },
  {
    "id": "wiki-3670",
    "name": "Molten Peridot",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 2 Æ.\nIf this is the second time you have played Molten Peridot this turn, you may destroy this. If you do, gain a card that costs 4 Æ or less from any supply pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Molten_Peridot"
  },
  {
    "id": "wiki-2188",
    "name": "Monstrous Inferno",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Depths"
    ],
    "effect": "This spell must be prepped to two adjacent breaches so that this card touches both breaches. This fully occupies both breaches.\nCast: Deal 7 damage divided however you choose to the nemesis and any number of minions.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Monstrous_Inferno"
  },
  {
    "id": "wiki-1985",
    "name": "Mountain Gust",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 6 damage divided however you choose to any number of enemies.\nUse this card only when playing with Leisan.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Mountain_Gust"
  },
  {
    "id": "wiki-2715",
    "name": "Muted Lacosite",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "When you gain this, Silence a minion.\nGain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Muted_Lacosite"
  },
  {
    "id": "wiki-402",
    "name": "Nebula Shard",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nOR\nGain 1 Æ for each spell you cast during your casting phase this turn.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Nebula_Shard"
  },
  {
    "id": "wiki-8341",
    "name": "Nebulae Fragment",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Surface"
    ],
    "effect": "Gain 2 Æ.\nAny ally may discard a Nebulae Fragment in hand. If they do, that ally gains an AetherToken and may Conjure to an opened or closed breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Nebulae_Fragment"
  },
  {
    "id": "wiki-283",
    "name": "Nerve Jab",
    "type": "spell",
    "cost": 2,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Cast: Deal 1 damage. Silence a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Nerve_Jab"
  },
  {
    "id": "wiki-1617",
    "name": "Nether Conduit",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Cast: Reveal a card in hand that costs 2 Æ or more. If you do, deal damage equal to the number of cards missing in that card's supply pile. Then, any ally may gain a card from that supply pile.\n(Gem supply piles start with 7 cards. Relic and spell supply piles start with 5 cards.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Nether_Conduit"
  },
  {
    "id": "wiki-113",
    "name": "Neural Wreath",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Focus any player's breach. Any player may prep a spell in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Neural_Wreath"
  },
  {
    "id": "wiki-1744",
    "name": "Nihilum Anomaly",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ. Silence a minion.\nIf this is the first Anomaly card you have played this turn, return this to the Regularity deck and gain a Crystal from that deck.\nUse this card only when playing with Nook: Timeless.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Nihilum_Anomaly"
  },
  {
    "id": "wiki-962",
    "name": "Nocturnal Reckoning",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Allies collectively gain 4 charges. Reveal the turn order deck. Return it in any order.\nOR\nCast: Deal 8 damage.\nUse this card only when playing with Xaxos: Reckoner.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Nocturnal_Reckoning"
  },
  {
    "id": "wiki-951",
    "name": "Nova Forge",
    "type": "spell",
    "cost": 6,
    "sets": [
      "War Eternal"
    ],
    "effect": "While prepped, once per turn during your main phase you may gain 2 Æ that can only be used to gain a spell.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Nova_Forge"
  },
  {
    "id": "wiki-8262",
    "name": "Obliterating Arc",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Surface"
    ],
    "effect": "Cast: Deal 7 damage.\nDestroy a card from the Obliterating Arc supply pile. If you can't, suffer 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Obliterating_Arc"
  },
  {
    "id": "wiki-2265",
    "name": "Oblivion Swell",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "While prepped, once per turn during your main phase you main gain 1 Æ.\nCast: Deal 2 damage. You may discard a gem. If you do, deal additional damage equal to its cost.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Oblivion_Swell"
  },
  {
    "id": "wiki-1358",
    "name": "Oblivium Resin",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 2 Æ.\nIf you have three or more cards in hand that cost 0 Æ, gain an additional 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Oblivium_Resin"
  },
  {
    "id": "wiki-8349",
    "name": "Obsolescence",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Promo"
    ],
    "effect": "While prepped, once per turn during your main phase, you may gain a trinket.\nCast: Deal 1 damage. Destroy each other card in your discard pile and deck. Deal an additional 2 damage for each card destroyed this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Obsolescence"
  },
  {
    "id": "wiki-1463",
    "name": "Olivinite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Gain 2 Æ.\nOR\nDeal 1 damage to a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Olivinite"
  },
  {
    "id": "wiki-7958",
    "name": "Omen Loop",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "When you Develop this, gain 2 pulse tokens.\n—\nDestroy this. Reveal the turn order deck. Return it in any order. You may lose 1 pulse token. If you do, any ally draws a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Omen_Loop"
  },
  {
    "id": "wiki-1564",
    "name": "Orb of the Deep",
    "type": "relic",
    "cost": 2,
    "sets": [
      "Outcasts"
    ],
    "effect": "Focus your closed breach with the lowest focus cost.\nOR\nDestroy this. Gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Orb_of_the_Deep"
  },
  {
    "id": "wiki-8383",
    "name": "Pact Prism",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The Returned"
    ],
    "effect": "Gain 2 AetherTokens at the end of your turn.\nAny ally may discard a Pact Prism in hand and draw a card. If they do, you gain 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pact_Prism"
  },
  {
    "id": "wiki-2897",
    "name": "Pain Conduit",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The New Age"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, it deals 2 additional damage, and discard this card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pain_Conduit"
  },
  {
    "id": "wiki-2018",
    "name": "Pain Stone",
    "type": "gem",
    "cost": 6,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Gain 3 Æ.\nOR\nGain 2 Æ and deal 1 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pain_Stone"
  },
  {
    "id": "wiki-1723",
    "name": "Paired Storm",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Outcasts"
    ],
    "effect": "LINK (Two spells with Link may be prepped to the same breach.)\nCast: Deal 2 damage.\nIf this is the second time you have cast a Paired Storm this turn, deal 2 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Paired_Storm"
  },
  {
    "id": "wiki-823",
    "name": "Paradigm Flux",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Remove up to 2 shield tokens from minions. Deal 5 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Paradigm_Flux"
  },
  {
    "id": "wiki-1122",
    "name": "Parallel Self",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 5 damage.\n—\nRecallSpend 2 Æ to deal 2 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Parallel_Self"
  },
  {
    "id": "wiki-1160",
    "name": "Parasitic Force",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Promo"
    ],
    "effect": "You may prep this to any player's opened breach.\nCast: Deal 6 damage. You may destroy up to two cards in your hand or discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Parasitic_Force"
  },
  {
    "id": "wiki-2129",
    "name": "Patterned Strike",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The New Age"
    ],
    "effect": "Cast: Deal 4 damage.\nYou may return to your hand up to two cards in your discard pile that cost 0 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Patterned_Strike"
  },
  {
    "id": "wiki-3696",
    "name": "Petrified Phoenixium",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 2 Æ.\nThe next time you gain a card this turn, you may cast any player's prepped spell.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Petrified_Phoenixium"
  },
  {
    "id": "wiki-302",
    "name": "Phantasmagoria",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Deal 3 damage.\n—\nRecall Conjure.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phantasmagoria"
  },
  {
    "id": "wiki-292",
    "name": "Phased Portalite",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ. If your III breach is opened, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phased_Portalite"
  },
  {
    "id": "wiki-3788",
    "name": "Phoenix Blast",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 3 damage. You may spend 3 Knowledge to swap this card for Phoenix Inferno.\nUse this card only when playing with Kiri and Phoenix.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Blast"
  },
  {
    "id": "wiki-3591",
    "name": "Phoenix Blaze",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 2 damage. Kiri gains 1 AetherToken. You may spend 3 Knowledge to swap this card for Phoenix Pyre.\nUse this card only when playing with Kiri and Phoenix.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Blaze"
  },
  {
    "id": "wiki-2426",
    "name": "Phoenix Char",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 4 damage. Kiri gains a charge.\nUse this card only when playing with Kiri and Phoenix.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Char"
  },
  {
    "id": "wiki-3785",
    "name": "Phoenix Flame",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Deal 2 damage.\nYou may lose 1 charge to deal 2 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Flame"
  },
  {
    "id": "wiki-3160",
    "name": "Phoenix Inferno",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 5 damage.\nUse this card only when playing with Kiri and Phoenix.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Inferno"
  },
  {
    "id": "wiki-2547",
    "name": "Phoenix Pyre",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 3 damage. Any player gains 1 life.\nUse this card only when playing with Kiri and Phoenix.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Pyre"
  },
  {
    "id": "wiki-2567",
    "name": "Phoenix Quill",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Two different players gain 1 life each.\n—\nRecallLose 1 charge to return a card that costs 3 Æ or less from your discard pile to your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Quill"
  },
  {
    "id": "wiki-548",
    "name": "Phoenix Scorch",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 2 damage. Any player may discard a card to gain a charge. You may spend 3 Knowledge to swap this card for Phoenix Char.\nUse this card only when playing with Kiri and Phoenix.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phoenix_Scorch"
  },
  {
    "id": "wiki-7978",
    "name": "Phosphor Nugget",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Gain 2 Æ.\nRecall Any ally gains an AetherToken.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Phosphor_Nugget"
  },
  {
    "id": "wiki-2128",
    "name": "Photonix Anomaly",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 1 Æ.\nIf this is the first Anomaly card you have played this turn, return this to the Regularity deck and gain a Spark from that deck.\nUse this card only when playing with Nook: Timeless.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Photonix_Anomaly"
  },
  {
    "id": "wiki-483",
    "name": "Planar Insight",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Deal 2 damage.\nDeal 1 additional damage for each of your opened breaches.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Planar_Insight"
  },
  {
    "id": "wiki-617",
    "name": "Polyphase Turbine",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The Ancients"
    ],
    "effect": "If this is the first time you've played a Polyphase Turbine this turn, gain 2 Æ. Otherwise, gain 1 charge and 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Polyphase_Turbine"
  },
  {
    "id": "wiki-1566",
    "name": "Precision Shot",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "LINK (Two spells with Link may be prepped to the same breach.)\nCast: Deal 2 damage. If there are six or more other cards in your discard pile, deal 2 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Precision_Shot"
  },
  {
    "id": "wiki-3145",
    "name": "Primordial Fetish",
    "type": "relic",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "Focus any player's breach.\nOR\nDestroy this. Gain 3 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Primordial_Fetish"
  },
  {
    "id": "wiki-1923",
    "name": "Prismatic Flare",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "When you prep this, focus your III breach.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Prismatic_Flare"
  },
  {
    "id": "wiki-1673",
    "name": "Propel",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 4 damage.\nIf you placed this into your discard pile, swap this card for Gather Force.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Propel"
  },
  {
    "id": "wiki-3438",
    "name": "Prophetic Lens",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 1 charge. Reveal the top card of your deck. You may destroy it. If you don't, gain 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Prophetic_Lens"
  },
  {
    "id": "wiki-3547",
    "name": "Psychic Eruption",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Cast: Deal damage equal to the number of cards in any player's discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Psychic_Eruption"
  },
  {
    "id": "wiki-3750",
    "name": "Pulsing Garnet",
    "type": "gem",
    "cost": 5,
    "sets": [
      "The Abyss"
    ],
    "effect": "Gain 3 Æ.\nYou may have an enemy gain 2 life. If you do, any ally draws a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pulsing_Garnet"
  },
  {
    "id": "wiki-179",
    "name": "Pulsyrium Globe",
    "type": "gem",
    "cost": 5,
    "sets": [
      "The Ruins"
    ],
    "effect": "Gain 3 Æ.\n—\nRecall Discard a card in hand. If you do, any player gains an AetherToken.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pulsyrium_Globe"
  },
  {
    "id": "wiki-2745",
    "name": "Pyro Geist",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Legacy"
    ],
    "effect": "When you prep this, deal 1 damage.\nCast: Deal 1 damage. Deal 2 damage.\n(Effects that modify damage affect both instances of damage this spell deals when cast.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pyro_Geist"
  },
  {
    "id": "wiki-1795",
    "name": "Pyromancy",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Cast: Deal 1 damage.\nAllies may collectively discard up to two cards in hand. For each card discarded this way, deal 3 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pyromancy"
  },
  {
    "id": "wiki-2779",
    "name": "Pyrotechnic Surge",
    "type": "spell",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "This spell must be prepped to two adjacent breaches so that this card touches both breaches. This fully occupies both breaches.\nCast: Deal 4 damage.\nYou may destroy a card in your discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Pyrotechnic_Surge"
  },
  {
    "id": "wiki-638",
    "name": "Quickening Qitite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Southern Village"
    ],
    "effect": "Gain 2 Æ.\nYou may discard a card in hand. If you do, focus any player's II breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Quickening_Qitite"
  },
  {
    "id": "wiki-4985",
    "name": "Quicksilver Bolt",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "You may prep this spell to one of your opened breaches during any ally's main phase.\nWhen you prep this during your main phase, boost this.\nCast: Deal 3 damage. If this is fully boosted, it deals 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Quicksilver_Bolt"
  },
  {
    "id": "wiki-2922",
    "name": "Radiance",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The Nameless"
    ],
    "effect": "Cast: Deal 5 damage. Each ally draws a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Radiance"
  },
  {
    "id": "wiki-1727",
    "name": "Radiant Conflux",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 3 damage.\nAny ally may draw a card and then discard a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Radiant_Conflux"
  },
  {
    "id": "wiki-1787",
    "name": "Rainbow Fluorite",
    "type": "gem",
    "cost": 6,
    "sets": [
      "The Ruins"
    ],
    "effect": "Gain 3 Æ.\nOR\nGain 2 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rainbow_Fluorite"
  },
  {
    "id": "wiki-4982",
    "name": "Rainbow Surge",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 5 damage. If this causes a minion to be discarded, boost this. Gain 1 life for each boost mark on this.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rainbow_Surge"
  },
  {
    "id": "wiki-3093",
    "name": "Reality Stabilizer",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 charges. Silence a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reality_Stabilizer"
  },
  {
    "id": "wiki-389",
    "name": "Reaper's Flame",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Southern Village"
    ],
    "effect": "While prepped, once per turn when you cast another spell, you may gain a card that costs 5 Æ or less from any supply pile.\nCast: Deal 5 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reaper's_Flame"
  },
  {
    "id": "wiki-3478",
    "name": "Rebound Spike",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Promo"
    ],
    "effect": "Set aside two gems or relics played this turn, excluding this. At the end of your turn after drawing to your maximum hand size, place the set-aside cards into your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rebound_Spike"
  },
  {
    "id": "wiki-961",
    "name": "Reconstituting Circuit",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Outcasts"
    ],
    "effect": "Xaxos: Outcast gains 1 charge. You may destroy a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reconstituting_Circuit"
  },
  {
    "id": "wiki-627",
    "name": "Recurring Jasper",
    "type": "gem",
    "cost": 4,
    "sets": [
      "The New Age"
    ],
    "effect": "Gain 2 Æ.\nIf the top card of your discard pile is a spell, you may place this gem on top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Recurring_Jasper"
  },
  {
    "id": "wiki-1332",
    "name": "Redistributor",
    "type": "relic",
    "cost": 4,
    "sets": [
      "The Descent"
    ],
    "effect": "Gain 1 charge.\nAny ally gains an AetherToken. If you have 3 or more charges, that ally gains an additional AetherToken.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Redistributor"
  },
  {
    "id": "wiki-1572",
    "name": "Reduce to Ash",
    "type": "spell",
    "cost": 7,
    "sets": [
      "War Eternal"
    ],
    "effect": "While prepped, at the start of your casting phase reveal the top card of your deck. You may destroy the revealed card.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reduce_to_Ash"
  },
  {
    "id": "wiki-757",
    "name": "Refined Lumenium",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ.\nAny ally draws a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Refined_Lumenium"
  },
  {
    "id": "wiki-2485",
    "name": "Reflecting Current",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Evolution"
    ],
    "effect": "While prepped, when you prep another spell, gain 1 Æ.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reflecting_Current"
  },
  {
    "id": "wiki-3860",
    "name": "Reflective Conduit",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, the player who cast that spell may return it to their hand instead of discarding it. If they do, discard this.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reflective_Conduit"
  },
  {
    "id": "wiki-469",
    "name": "Resonant Pearl",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The New Age"
    ],
    "effect": "Gain 2 Æ.\nAny ally may discard a Resonant Pearl in hand and draw a card. If they do, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Resonant_Pearl"
  },
  {
    "id": "wiki-2654",
    "name": "Resonate",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Void"
    ],
    "effect": "Cast: Deal 4 damage.\nIf there are six or more other cards in your discard pile, deal 3 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Resonate"
  },
  {
    "id": "wiki-1414",
    "name": "Restoration Siphon",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 6 damage.\nOR\nCast: Deal 1 damage. Gravehold gains 3 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Restoration_Siphon"
  },
  {
    "id": "wiki-8381",
    "name": "Revealing Firethorn",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Surface"
    ],
    "effect": "Cast: Deal 3 damage.\nFocus your breach with the lowest focus cost.\nUse this card only when playing with Inco.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Revealing_Firethorn"
  },
  {
    "id": "wiki-1367",
    "name": "Reverberating Shock",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The New Age"
    ],
    "effect": "Echo\nCast: Deal 1 damage.\nGain 1 Æ that can only be used to gain cards.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reverberating_Shock"
  },
  {
    "id": "wiki-133",
    "name": "Reverse Gravity",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Deal 6 damage.\n—\nWhen this is placed into your discard pile, you may place this on the bottom of your discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Reverse_Gravity"
  },
  {
    "id": "wiki-2021",
    "name": "Rhodonix",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Origins"
    ],
    "effect": "Gain 3 Æ.\nIf this is the first Rhodonix you've played this turn, draw an additional card at the end of this turn.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rhodonix"
  },
  {
    "id": "wiki-2245",
    "name": "Riddlesphere",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Gain 1 charge.\nOR\nYou may lose 2 charges. If you do, gain 5 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Riddlesphere"
  },
  {
    "id": "wiki-1555",
    "name": "Rift Dagger",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain a card from any other supply pile that costs 3 Æ or less. You may destroy this to gain a card that costs up to 4 Æ instead. You may spend 1 Æ. If you do, place that card into your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rift_Dagger"
  },
  {
    "id": "wiki-7960",
    "name": "Rift Ring",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Gain 2 charges. Gain two trinkets and place them on top of your deck.\nOR\nDestroy this. If you do, gain 2 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rift_Ring"
  },
  {
    "id": "wiki-945",
    "name": "Rip, Attack!",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Into The Wild",
      "Legacy of Gravehold"
    ],
    "effect": "Any ally may prep a spell in hand. Cast up to two spells prepped by any player. Spells cast this way deal 1 additional damage.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Attack!"
  },
  {
    "id": "wiki-1022",
    "name": "Rip, Eat!",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Into The Wild",
      "Legacy of Gravehold"
    ],
    "effect": "Any ally gains 2 charges and may destroy a card in hand.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Eat!"
  },
  {
    "id": "wiki-3595",
    "name": "Rip, Fetch!",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Into The Wild",
      "Legacy of Gravehold"
    ],
    "effect": "Focus your closed breach with the lowest focus cost. You may destroy a card in hand.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Fetch!"
  },
  {
    "id": "wiki-2856",
    "name": "Rip, Go!",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Into The Wild",
      "Legacy of Gravehold"
    ],
    "effect": "Focus any ally's breach. That ally gains 1 charge.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Go!"
  },
  {
    "id": "wiki-1578",
    "name": "Rip, Guard!",
    "type": "relic",
    "cost": 9,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 life. Allies collectively gain 3 charges.\nOR\nSuffer 2 damage. Place a power from the nemesis deck that is in play into the nemesis discard pile.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Guard!"
  },
  {
    "id": "wiki-1450",
    "name": "Rip, Patrol!",
    "type": "relic",
    "cost": 9,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain a spell from the supply and place it into your hand. Discard a fire token from your location on the map.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Patrol!"
  },
  {
    "id": "wiki-3674",
    "name": "Rip, Protect!",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Any ally draws two cards. Silence a minion.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Protect!"
  },
  {
    "id": "wiki-2376",
    "name": "Rip, Scout!",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain a card that costs 4 Æ or less from the supply and place it on top of your deck.\nUse this card only when playing with Razra.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rip%2C_Scout!"
  },
  {
    "id": "wiki-2283",
    "name": "Rock Launcher",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Promo"
    ],
    "effect": "Discard or destroy a card in hand. If you do, deal damage equal to its cost.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rock_Launcher"
  },
  {
    "id": "wiki-168",
    "name": "Rose Thorn",
    "type": "spell",
    "cost": 2,
    "sets": [
      "Into The Wild"
    ],
    "effect": "Cast: Deal 2 damage. You may return this to the Rose Thorn deck.\nUse this card only when playing with Inco.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rose_Thorn"
  },
  {
    "id": "wiki-1541",
    "name": "Rune Tutor",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Gain a card that costs 6 Æ or less from any supply pile and place it on top of your deck.\nOR\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Rune_Tutor"
  },
  {
    "id": "wiki-368",
    "name": "Sage's Brand",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Nameless"
    ],
    "effect": "This spell must be prepped to two adjacent breaches so that this card touches both breaches. This fully occupies both breaches.\nWhile prepped, draw an additional card during your draw phase.\nCast: Deal 6 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Sage's_Brand"
  },
  {
    "id": "wiki-1571",
    "name": "Sapphire Infusion",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "Attach this to any player's breach.\nTwo spells may be prepped to this breach.\nUse this card only when playing with Janti.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Sapphire_Infusion"
  },
  {
    "id": "wiki-2324",
    "name": "Scholar's Opus",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 1 charge.\nIf there are seven or more cards in your discard pile, gain 1 additional charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Scholar's_Opus"
  },
  {
    "id": "wiki-2872",
    "name": "Scorch",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Outer Dark"
    ],
    "effect": "Cast: Deal 4 damage.\nIf this damage causes a minion from the nemesis deck to be discarded, any ally gains 2 charges.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Scorch"
  },
  {
    "id": "wiki-3356",
    "name": "Scoria Slag",
    "type": "gem",
    "cost": 4,
    "sets": [
      "War Eternal"
    ],
    "effect": "Gain 2 Æ.\nIf the nemesis tier is 2 or higher, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Scoria_Slag"
  },
  {
    "id": "wiki-1424",
    "name": "Scrying Bolt",
    "type": "spell",
    "cost": 6,
    "sets": [
      "The Nameless"
    ],
    "effect": "Cast: Deal 5 damage.\nYou may lose 1 charge. If you do, reveal the top two cards of the nemesis deck. Return them in any order.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Scrying_Bolt"
  },
  {
    "id": "wiki-799",
    "name": "Scrying Sugilite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nYou may reveal the top card of your deck. If it is a spell, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Scrying_Sugilite"
  },
  {
    "id": "wiki-3827",
    "name": "Searing Ruby",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Gain 2 Æ.\nGain an additional 1 Æ that can only be used to gain a spell.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Searing_Ruby"
  },
  {
    "id": "wiki-694",
    "name": "Seer's Wrath",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "When you Develop this, look at the top card of the turn order deck. You may place that card on the bottom or top of the turn order deck.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Seer's_Wrath"
  },
  {
    "id": "wiki-1904",
    "name": "Shattered Rupix",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 3 Æ.\n—\nWhen another card or effect would cause you to discard or destroy this, you may return this to your hand. (Ignore this effect while this card is in the supply.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Shattered_Rupix"
  },
  {
    "id": "wiki-1244",
    "name": "Shattering Bolt",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 2 damage. You may destroy a card in your hand.\nOR\nCast: Discard a gem in hand. If you do, deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Shattering_Bolt"
  },
  {
    "id": "wiki-4983",
    "name": "Shifter's Cloak",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Focus any player's breach. If that breach is opened this way, boost this.\nIf this card is fully boosted, cast any player's prepped spell. It deals an additional 1 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Shifter's_Cloak"
  },
  {
    "id": "wiki-2079",
    "name": "Shimmerbead",
    "type": "gem",
    "cost": 3,
    "sets": [
      "The Ruins"
    ],
    "effect": "Gain 2 Æ.\n—\nRecall If you have activated your ability this turn, gain 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Shimmerbead"
  },
  {
    "id": "wiki-1605",
    "name": "Shining Fluorite",
    "type": "gem",
    "cost": 7,
    "sets": [
      "The Ancients"
    ],
    "effect": "Gain 3 Æ.\nPlace the next spell you gain this turn into your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Shining_Fluorite"
  },
  {
    "id": "wiki-2672",
    "name": "Shining Tetrite",
    "type": "gem",
    "cost": 6,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 4 Æ that cannot be used to gain a card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Shining_Tetrite"
  },
  {
    "id": "wiki-3377",
    "name": "Sifter's Pearl",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Gain 2 Æ.\nEach player reveals the top card of their deck and either discards it or returns it to the top of their deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Sifter's_Pearl"
  },
  {
    "id": "wiki-419",
    "name": "Silent Sting",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Place a venom token on an enemy and deal 1 damage to it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Silent_Sting"
  },
  {
    "id": "wiki-1545",
    "name": "Smite (Spell)",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 4 damage.\nAny ally gains an Æ token.\nThis starts the game in the Swap zone.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Smite_(Spell)"
  },
  {
    "id": "wiki-1991",
    "name": "Snap Ritual",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "While prepped once per turn during your main phase, you may discard a card in hand to deal 2 damage.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Snap_Ritual"
  },
  {
    "id": "wiki-3198",
    "name": "Soothing Torporene",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "Gain 2 Æ.\nOR\nSilence a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Soothing_Torporene"
  },
  {
    "id": "wiki-3063",
    "name": "Soul Cords",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Any player gains 1 pulse token.\nEach player with 2 or more pulse tokens gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Soul_Cords"
  },
  {
    "id": "wiki-984",
    "name": "Soulstone",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 2 Æ.\nYou may spend 1 Knowledge. If you do, gain an additional 2 Æ.\nUse this card only when playing with Kavoc.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Soulstone"
  },
  {
    "id": "wiki-2754",
    "name": "Sparking Siphon",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "When you gain this, gain 2 pulse tokens.\nCast: Deal 2 damage. You may lose 1 pulse token. If you do, any player gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Sparking_Siphon"
  },
  {
    "id": "wiki-543",
    "name": "Spectral Echo",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Cast: Deal 2 damage.\nYou may destroy a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Spectral_Echo"
  },
  {
    "id": "wiki-2883",
    "name": "Spectralite",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Gain 2 Æ.\n—\nRecall Place a gem or relic you played this turn on top of your deck.\nUse this card only when playing with Nadea.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Spectralite"
  },
  {
    "id": "wiki-729",
    "name": "Sphere of Inversion",
    "type": "spell",
    "cost": 9,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 7 damage. Any ally may destroy a card in hand. If they do, they gain 2 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Sphere_of_Inversion"
  },
  {
    "id": "wiki-2910",
    "name": "Spirit Infusion",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Descent"
    ],
    "effect": "Attach this to any player's breach. When a spell is cast from this breach, the player who cast that spell may destroy a card in hand.\nUse this card only when playing with Janti.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Spirit_Infusion"
  },
  {
    "id": "wiki-2674",
    "name": "Spirit Jewel",
    "type": "gem",
    "cost": 4,
    "sets": [
      "The Abyss"
    ],
    "effect": "Gain 2 Æ. You may have Gravehold suffer 1 damage. If you do, gain an additional 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Spirit_Jewel"
  },
  {
    "id": "wiki-1093",
    "name": "Spirit Lift",
    "type": "spell",
    "cost": 8,
    "sets": [
      "The New Age"
    ],
    "effect": "While prepped once during your turn when you gain a charge, any ally gains 2 charges.\nCast: Deal 5 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Spirit_Lift"
  },
  {
    "id": "wiki-1351",
    "name": "Spiritual Infusion",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Tales of Old Gravehold"
    ],
    "effect": "Cast: Deal 3 damage.\nIf you've dealt 7 or more damage this turn, Gravehold gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Spiritual_Infusion"
  },
  {
    "id": "wiki-1372",
    "name": "Splinter Missile",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Promo"
    ],
    "effect": "Cast: Deal 4 damage. Any ally may discard a card in hand. If they do, divide this damage however you choose among the nemesis and any number of minions.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Splinter_Missile"
  },
  {
    "id": "wiki-3569",
    "name": "Splintered Garnet",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "When you Develop this, destroy a gem you played this turn.\n—\nGain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Splintered_Garnet"
  },
  {
    "id": "wiki-4430",
    "name": "Staff of Wonders",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Promo Pack 1 (Digital)"
    ],
    "effect": "Focus any player's breach twice. Lose 1 durability. When this has 0 durability, destroy it and gain 2 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Staff_of_Wonders"
  },
  {
    "id": "wiki-3600",
    "name": "Starfall",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Origins"
    ],
    "effect": "Cast: Deal 3 damage.\nReveal the top three cards of your deck. You may prep a spell not named Starfall that is revealed this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Starfall"
  },
  {
    "id": "wiki-2668",
    "name": "Starfire Frenzy",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 4 damage. You may discard a spell in hand. If you do, deal 1 additional damage and gain a charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Starfire_Frenzy"
  },
  {
    "id": "wiki-2646",
    "name": "Starglass",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nOR\nConjure.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Starglass"
  },
  {
    "id": "wiki-7970",
    "name": "Stonefury Eruption",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 4 damage.\nEach ally who has a Stonefury Eruption in their discard pile gains 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Stonefury_Eruption"
  },
  {
    "id": "wiki-2933",
    "name": "Storm Vapors",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Cast: Deal 3 damage.\nIf there is another Storm Vapors in any player's discard pile, focus any player's breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Storm_Vapors"
  },
  {
    "id": "wiki-8369",
    "name": "Stormspinner Wand",
    "type": "relic",
    "cost": 8,
    "sets": [
      "The Surface"
    ],
    "effect": "When you Develop this, any ally may destroy a card in hand or discard pile.\n—\nYou and any ally each gain 1 charge for each card in that ally's hand that costs 2 Æ or more.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Stormspinner_Wand"
  },
  {
    "id": "wiki-3334",
    "name": "Structure Stabilizer",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Past and Future"
    ],
    "effect": "Attach this to any player's breach.\nWhen a spell is cast from this breach, Gravehold gains 1 life.\nUse this card only when playing with Auren.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Structure_Stabilizer"
  },
  {
    "id": "wiki-1533",
    "name": "Stunning Force",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Cast: Deal 4 damage to the nemesis. Silence a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Stunning_Force"
  },
  {
    "id": "wiki-3739",
    "name": "Stupefy",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Ruins"
    ],
    "effect": "Cast: Deal 2 damage.\n—\nRecall You may discard a card to silence a minion.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Stupefy"
  },
  {
    "id": "wiki-1853",
    "name": "Summoner's Horn",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Any player may prep a spell in their discard pile to their opened or closed breaches.\n—\nRecallDiscard a card to gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Summoner's_Horn"
  },
  {
    "id": "wiki-13",
    "name": "Summonite",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 2 Æ.\nOR\nGain a Summonite from the supply and place it on top of any ally's discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Summonite"
  },
  {
    "id": "wiki-132",
    "name": "Sunken Onyx",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\nYou may discard this after any ally focuses a breach. If you do, they focus that breach again.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Sunken_Onyx"
  },
  {
    "id": "wiki-381",
    "name": "Swarm of Flame",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 5 damage.\nYou may cast any player's prepped spell that costs 5 Æ or less.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Swarm_of_Flame"
  },
  {
    "id": "wiki-3680",
    "name": "Symbiotic Synapse",
    "type": "spell",
    "cost": 7,
    "sets": [
      "The Ancients"
    ],
    "effect": "If there is another Symbiotic Synapse in any player's discard pile, this gains Echo.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Symbiotic_Synapse"
  },
  {
    "id": "wiki-2325",
    "name": "Synapse Tendril",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The Descent"
    ],
    "effect": "While prepped, once per turn during your main phase, you may spend 2 Knowledge. If you do, deal 2 damage.\nCast: Deal 4 damage.\nThis is part of Raven's Forgotten Ritual deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Synapse_Tendril"
  },
  {
    "id": "wiki-3858",
    "name": "Taluna Branch",
    "type": "relic",
    "cost": 6,
    "sets": [
      "Past and Future"
    ],
    "effect": "When you Develop this, any ally gains an Æ token.\n—\nFocus any player's breach.\nAny player may destroy a card in hand or in their discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Taluna_Branch"
  },
  {
    "id": "wiki-3262",
    "name": "Talusoid Clod",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Promo"
    ],
    "effect": "Gain 2 Æ.\n—\nRecallYou may suffer 2 damage to return this to your hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Talusoid_Clod"
  },
  {
    "id": "wiki-7961",
    "name": "Tearstone Amulet",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "When you Develop this, gain 1 charge.\n—\nAttach this to any player's breach.\nWhen a player casts a spell from this breach, any ally may Conjure.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Tearstone_Amulet"
  },
  {
    "id": "wiki-433",
    "name": "Temporal Helix",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The Nameless"
    ],
    "effect": "Cast any player's prepped spell without discarding it.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Temporal_Helix"
  },
  {
    "id": "wiki-3261",
    "name": "Temporal Strike",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "While prepped, when you cast a spell that costs 2 Æ or less, it deals 1 additional damage and you may return it to your hand.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Temporal_Strike"
  },
  {
    "id": "wiki-501",
    "name": "Tethered Darts",
    "type": "spell",
    "cost": 3,
    "sets": [
      "The New Age"
    ],
    "effect": "Cast: Deal 2 damage.\nIf this was cast from an opened III or IV breach, you may place this into any ally's hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Tethered_Darts"
  },
  {
    "id": "wiki-1698",
    "name": "Tethered Smite",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 5 damage divided however you choose to the nemesis and any number of minions.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Tethered_Smite"
  },
  {
    "id": "wiki-2381",
    "name": "Thermal Dart",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Void"
    ],
    "effect": "LINK\n(Two spells with Link may be prepped to the same breach.)\nCast: Deal 3 damage. If this is not the first Thermal Dart you have cast this turn, gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Thermal_Dart"
  },
  {
    "id": "wiki-737",
    "name": "Thieving Spirit",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Promo"
    ],
    "effect": "Cast: Deal 4 damage. Gain 1 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Thieving_Spirit"
  },
  {
    "id": "wiki-1866",
    "name": "Thistle Spear",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Past and Future"
    ],
    "effect": "Cast: Deal 5 damage.\nAny ally may gain a card from the Develop zone and place it into their hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Thistle_Spear"
  },
  {
    "id": "wiki-7962",
    "name": "Thought Totem",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "When you Develop this, any ally gains 2 AetherTokens.\n—\nGain 2 charges. Reveal the top three cards of your deck. Discard any number of them. Return the rest to the top of your deck in any order.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Thought_Totem"
  },
  {
    "id": "wiki-1553",
    "name": "Thoughtform Familiar",
    "type": "spell",
    "cost": 3,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast: Deal 2 damage.\nDeal 1 additional damage for each of your other prepped spells.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Thoughtform_Familiar"
  },
  {
    "id": "wiki-1081",
    "name": "Thunderous Oath",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 6 damage. Gain 1 pulse token. You may lose any number of pulse tokens. If you do, any ally draws cards equal to the number of pulse tokens lost this way.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Thunderous_Oath"
  },
  {
    "id": "wiki-2940",
    "name": "Time Rift",
    "type": "spell",
    "cost": 5,
    "sets": [
      "The Descent"
    ],
    "effect": "Cast: Deal 4 damage.\nEach player may reveal the top card of their deck and either discard it or return it to the top of their deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Time_Rift"
  },
  {
    "id": "wiki-1011",
    "name": "Titanic Jasmite",
    "type": "gem",
    "cost": 8,
    "sets": [
      "The Descent"
    ],
    "effect": "Gain 4 Æ.\nYou may place the next card you gain this turn into any player's hand.\nUse this card only when playing with Leisan.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Titanic_Jasmite"
  },
  {
    "id": "wiki-2015",
    "name": "Tome of the Ancients",
    "type": "relic",
    "cost": 2,
    "sets": [
      "Past and Future"
    ],
    "effect": "If all of your breaches are opened, destroy this and then destroy up to two cards in your hand or discard pile. Otherwise, focus your closed breach with the lowest focus cost.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Tome_of_the_Ancients"
  },
  {
    "id": "wiki-84",
    "name": "Tornado of Insight",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 5 damage. If you have no closed breaches, gain 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Tornado_of_Insight"
  },
  {
    "id": "wiki-8386",
    "name": "Torrential Spike",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Returned"
    ],
    "effect": "Cast: Deal 3 damage.\nAny ally may reveal the top card of their deck. If they revealed a spell, that player places that card into their hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Torrential_Spike"
  },
  {
    "id": "wiki-1273",
    "name": "Towering Obelisk",
    "type": "relic",
    "cost": 8,
    "sets": [
      "The Descent"
    ],
    "effect": "Any ally gains 3 charges.\nOR\nAny player destroys up to two cards in hand or discard pile.\nUse this card only when playing with Leisan.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Towering_Obelisk"
  },
  {
    "id": "wiki-2076",
    "name": "Transmogrifier",
    "type": "relic",
    "cost": 4,
    "sets": [
      "The Depths"
    ],
    "effect": "Destroy a card in hand.\nYou may gain a card from any supply pile that costs up to 3 Æ more than the destroyed card.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Transmogrifier"
  },
  {
    "id": "wiki-18",
    "name": "Transmuter's Lens",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Outcasts"
    ],
    "effect": "Destroy this.\nYou may destroy a card in your hand or discard pile. Gain a card that costs up to 6 Æ from any supply pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Transmuter's_Lens"
  },
  {
    "id": "wiki-1535",
    "name": "Triplite Core",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 3 Æ that can only be used to gain cards.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Triplite_Core"
  },
  {
    "id": "wiki-2278",
    "name": "Tuned Reconstructor",
    "type": "relic",
    "cost": 4,
    "sets": [
      "The Descent"
    ],
    "effect": "Any ally reveals the top card of their deck. If it is a spell, you may cast it. If the revealed card is not a spell, they may destroy it, gain a card that costs up to 3 Æ more than it, and place the gained card on top of their deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Tuned_Reconstructor"
  },
  {
    "id": "wiki-1174",
    "name": "Twisted Fang",
    "type": "spell",
    "cost": 4,
    "sets": [
      "Outcasts"
    ],
    "effect": "Cast: Deal 3 damage.\nIf this card's supply pile is empty, deal 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Twisted_Fang"
  },
  {
    "id": "wiki-1677",
    "name": "Unhinged Vortex",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Outcasts"
    ],
    "effect": "Any ally draws three cards. Then, they discard a card in hand.\nOR\nYou may focus any ally's breach. Any ally may return a card in their discard pile to their hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Unhinged_Vortex"
  },
  {
    "id": "wiki-3787",
    "name": "Unrefined Blaststone",
    "type": "gem",
    "cost": 6,
    "sets": [
      "The New Age"
    ],
    "effect": "Gain 3 Æ.\nOR\nDestroy a card in this card's supply pile. If you do, deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Unrefined_Blaststone"
  },
  {
    "id": "wiki-3815",
    "name": "Unstable Prism",
    "type": "relic",
    "cost": 3,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "Play a gem in hand twice and destroy it.\nOR\nGain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Unstable_Prism"
  },
  {
    "id": "wiki-693",
    "name": "Unstable Pyrite",
    "type": "gem",
    "cost": 2,
    "sets": [
      "Outcasts"
    ],
    "effect": "Gain 1 Æ.\nYou may destroy this. If you do, gain an additional 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Unstable_Pyrite"
  },
  {
    "id": "wiki-817",
    "name": "Unstable Rift",
    "type": "spell",
    "cost": 5,
    "sets": [
      "Outcasts"
    ],
    "effect": "While prepped, at the end of your casting phase deal 1 damage and gain 1 Æ.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Unstable_Rift"
  },
  {
    "id": "wiki-1446",
    "name": "Unveil Potential",
    "type": "spell",
    "cost": 7,
    "sets": [
      "Promo"
    ],
    "effect": "While prepped, your other spells gain the text \"OR Cast: Deal damage equal to this card's cost.\"\nCast: Deal 5 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Unveil_Potential"
  },
  {
    "id": "wiki-2449",
    "name": "V'riswood Amber",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "When you gain this, you may place it on top of your deck.\nGain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/V'riswood_Amber"
  },
  {
    "id": "wiki-3315",
    "name": "Vigorous Sunstone",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Outcasts"
    ],
    "effect": "When you gain this, if this is the second card you gained this turn, place this into your hand.\nGain 3 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Vigorous_Sunstone"
  },
  {
    "id": "wiki-1342",
    "name": "Vim Dynamo",
    "type": "relic",
    "cost": 4,
    "sets": [
      "The Depths"
    ],
    "effect": "Suffer 1 damage. Any player draws two cards.\nOR\nDestroy this. Any player gains 2 life and 1 charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Vim_Dynamo"
  },
  {
    "id": "wiki-1560",
    "name": "Vim Infusor",
    "type": "relic",
    "cost": 3,
    "sets": [
      "The Ruins"
    ],
    "effect": "Gain 1 charge.\nIf you have 2 life or less, repeat this effect.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Vim_Infusor"
  },
  {
    "id": "wiki-8384",
    "name": "Visionary Staff",
    "type": "relic",
    "cost": 5,
    "sets": [
      "The Returned"
    ],
    "effect": "Any ally draws three cards in hand and discards two cards in hand.\nOR\nResolve a Recall: effect in any player's discard pile up to two times.\n—\nRecall Gain a charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Visionary_Staff"
  },
  {
    "id": "wiki-7969",
    "name": "Vitrification",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "Cast: Deal 8 damage.\nGain three trinkets and place them on top of your deck.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Vitrification"
  },
  {
    "id": "wiki-1715",
    "name": "Void Anchor",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Silence a minion. Any ally gains 2 AetherTokens.\n—\nRecallGravehold gains 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Void_Anchor"
  },
  {
    "id": "wiki-2582",
    "name": "Void Bond",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Depths"
    ],
    "effect": "Cast: Deal 3 damage.\nYou may cast any player's prepped spell.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Void_Bond"
  },
  {
    "id": "wiki-249",
    "name": "Void Grasp",
    "type": "spell",
    "cost": 4,
    "sets": [
      "The Abyss"
    ],
    "effect": "While prepped, once per turn during your main phase, you may have a minion from the nemesis deck gain a shield token. If you do, gain 3 Æ.\nCast: Deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Void_Grasp"
  },
  {
    "id": "wiki-695",
    "name": "Void Mill",
    "type": "relic",
    "cost": 5,
    "sets": [
      "Legacy"
    ],
    "effect": "Focus any player's breach.\nTwo different players may destroy the top card of their discard pile.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Void_Mill"
  },
  {
    "id": "wiki-991",
    "name": "Voidium Spike",
    "type": "gem",
    "cost": 3,
    "sets": [
      "Buried Secrets"
    ],
    "effect": "Gain 2 Æ.\nEach ally may discard a card in hand. Each ally that does gains a charge.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Voidium_Spike"
  },
  {
    "id": "wiki-1432",
    "name": "Voidsteel Vein",
    "type": "gem",
    "cost": 4,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ.\n—\nYou may discard this when any ally casts a spell that costs 1 Æ or more. If you do, that spell deals 2 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Voidsteel_Vein"
  },
  {
    "id": "wiki-2794",
    "name": "Volcanic Glass",
    "type": "gem",
    "cost": 3,
    "sets": [
      "War Eternal"
    ],
    "effect": "When you gain this on your turn, you may spend 2 Æ. If you do, any ally also gains a Volcanic Glass and places it on top of their deck.\nGain 2 Æ.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Volcanic_Glass"
  },
  {
    "id": "wiki-2743",
    "name": "Volcanic Shrapnel",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Cast: Deal 1 damage. Deal 1 damage. Deal 1 damage. You may return to your hand up to two cards from your discard pile that cost 0 Æ. (Effects that modify damage affect all instances of damage this spell deals.)",
    "wiki": "https://aeonsend.wiki.gg/wiki/Volcanic_Shrapnel"
  },
  {
    "id": "wiki-3212",
    "name": "Volt Replicator",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Southern Village"
    ],
    "effect": "Any ally gains a card that costs 5 Æ or less. If there are two or fewer Volt Replicators in the supply, you may destroy this. If you do, place the gained card into that ally's hand instead.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Volt_Replicator"
  },
  {
    "id": "wiki-1185",
    "name": "Voltaic Relay",
    "type": "relic",
    "cost": 4,
    "sets": [
      "Legacy"
    ],
    "effect": "Any player gains 3 pulse tokens. That player may lose 1 pulse token. If they do, they destroy a card in hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Voltaic_Relay"
  },
  {
    "id": "wiki-3210",
    "name": "Vortex Gauntlet",
    "type": "relic",
    "cost": 6,
    "sets": [
      "War Eternal"
    ],
    "effect": "Cast any player's prepped spell.\nReturn that spell to that player's hand.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Vortex_Gauntlet"
  },
  {
    "id": "wiki-2750",
    "name": "Warping Haze",
    "type": "spell",
    "cost": 3,
    "sets": [
      "Legacy"
    ],
    "effect": "Cast: Deal 2 damage. If you have two or more other prepped spells, deal 1 additional damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Warping_Haze"
  },
  {
    "id": "wiki-3646",
    "name": "Washium",
    "type": "gem",
    "cost": 4,
    "sets": [
      "The Descent"
    ],
    "effect": "Gain 2 Æ.\nYou may spend 1 Æ to focus your closed breach with the lowest focus cost.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Washium"
  },
  {
    "id": "wiki-1379",
    "name": "Well of Energy",
    "type": "relic",
    "cost": 7,
    "sets": [
      "The New Age"
    ],
    "effect": "Gravehold gains 2 life.\nOR\nAny player gains 2 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Well_of_Energy"
  },
  {
    "id": "wiki-17",
    "name": "Whisper of Amethyst",
    "type": "gem",
    "cost": 6,
    "sets": [
      "The Abyss"
    ],
    "effect": "Gain 3 Æ.\nYou may discard the top card of the nemesis deck. If you do, any ally gains 2 AetherTokens.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Whisper_of_Amethyst"
  },
  {
    "id": "wiki-2921",
    "name": "Wildfire Whip",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Aeon's End (Core Box)"
    ],
    "effect": "While prepped, during your main phase you may spend 2 Æ to cast any player's prepped spell.\nCast: Deal 4 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Wildfire_Whip"
  },
  {
    "id": "wiki-861",
    "name": "Will Weaver",
    "type": "relic",
    "cost": 7,
    "sets": [
      "Shattered Dreams"
    ],
    "effect": "Gain 2 charges.\nAfter the next time you activate your ability this turn, deal 3 damage.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Will_Weaver"
  },
  {
    "id": "wiki-147",
    "name": "Witchglass",
    "type": "gem",
    "cost": 2,
    "sets": [
      "The Ruins"
    ],
    "effect": "Gain 1 Æ. Any ally gains an Æ token.\n—\nYou may discard this during an ally's main phase. If you do, that player may Conjure.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Witchglass"
  },
  {
    "id": "wiki-7964",
    "name": "Worldshift",
    "type": "spell",
    "cost": 6,
    "sets": [
      "Beyond the Breach"
    ],
    "effect": "While prepped, once per turn during your main phase you may gain 1 pulse token.\nCast: Deal 5 damage. You may lose 2 pulse tokens. If you do, focus any ally's breach.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Worldshift"
  },
  {
    "id": "wiki-2206",
    "name": "Wound Mender",
    "type": "spell",
    "cost": 8,
    "sets": [
      "Into The Wild"
    ],
    "effect": "Echo\nCast: Deal 2 damage.\nIf this was cast from an opened III or IV breach, gain 1 life.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Wound_Mender"
  },
  {
    "id": "wiki-1977",
    "name": "Zeronia Anomaly",
    "type": "gem",
    "cost": 5,
    "sets": [
      "Legacy of Gravehold"
    ],
    "effect": "Gain 2 Æ. Any ally gains a charge.\nIf this is the first Anomaly card you have played this turn, return this to the Regularity deck and gain a Crystal from that deck.\nUse this card only when playing with Nook: Timeless.",
    "wiki": "https://aeonsend.wiki.gg/wiki/Zeronia_Anomaly"
  }
].map((card) => Object.freeze(card)));
});
