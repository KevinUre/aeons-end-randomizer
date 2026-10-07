(function runApp() {
  "use strict";

  const DEFAULT_RULES =
    "gem <4, gem =4, gem any, relic any, relic any, spell <5, spell <=5, spell >=5, spell >5";
  const DEFAULT_SETS = [
    "Aeon's End (Core Box)", "The Depths", "The Outer Dark", "The Void", "War Eternal",
  ];
  const SET_ORDER = [
    "Aeon's End (Core Box)", "The Depths", "The Nameless", "War Eternal",
    "The Void", "The Outer Dark", "Legacy", "Buried Secrets", "The New Age",
    "Shattered Dreams", "The Ancients", "Into The Wild", "Outcasts",
    "Return To Gravehold", "Southern Village", "Legacy of Gravehold",
    "Past and Future", "Origins", "Evolution", "The Descent", "The Caverns",
    "The Abyss", "The Surface", "The Ruins", "The Returned", "Beyond the Breach",
    "Tales of Old Gravehold", "Promo", "Promo Pack 1 (Digital)",
  ];
  const STORAGE_KEY = "breach-market:preferences:v1";

  const elements = {
    catalogSummary: document.querySelector("#catalog-summary"),
    feedback: document.querySelector("#rule-feedback"),
    generate: document.querySelector("#generate-market"),
    grid: document.querySelector("#market-grid"),
    note: document.querySelector("#market-note"),
    reset: document.querySelector("#reset-rules"),
    rules: document.querySelector("#market-rules"),
    selectedSetSummary: document.querySelector("#selected-set-summary"),
    setList: document.querySelector("#set-list"),
    setPicker: document.querySelector("#set-picker"),
    toast: document.querySelector("#toast"),
  };

  const allSets = [...new Set(AEONS_END_CARDS.flatMap((card) => card.sets))].sort((a, b) => {
    const ai = SET_ORDER.indexOf(a);
    const bi = SET_ORDER.indexOf(b);
    if (ai < 0 && bi < 0) return a.localeCompare(b);
    if (ai < 0) return 1;
    if (bi < 0) return -1;
    return ai - bi;
  });

  let activeCards = [];
  let activeRules = [];
  let activeSets = new Set();
  let market = [];
  let toastTimer;

  function readPreferences() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || !Array.isArray(saved.sets)) return null;
      return {
        rules: typeof saved.rules === "string" ? saved.rules : DEFAULT_RULES,
        sets: saved.sets.filter((set) => allSets.includes(set)),
      };
    } catch {
      return null;
    }
  }

  function savePreferences(rules, sets) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ rules, sets: [...sets] }));
    } catch {
      // The randomizer still works when browser storage is unavailable.
    }
  }

  function selectedSets() {
    return new Set(
      [...elements.setList.querySelectorAll('input[type="checkbox"]:checked')].map(
        (input) => input.value,
      ),
    );
  }

  function cardsForSets(sets) {
    return AEONS_END_CARDS.filter((card) => card.sets.some((set) => sets.has(set)));
  }

  function setFeedback(message, isError = false) {
    elements.feedback.textContent = message;
    elements.feedback.classList.toggle("is-error", isError);
    elements.rules.setAttribute("aria-invalid", String(isError));
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 3400);
  }

  function validateEditor() {
    try {
      const rules = MarketRules.parseRules(elements.rules.value);
      setFeedback(`${rules.length} valid supply ${rules.length === 1 ? "rule" : "rules"}`);
      return rules;
    } catch (error) {
      setFeedback(error.message, true);
      return null;
    }
  }

  function updateSetSummary() {
    const sets = selectedSets();
    const cardCount = cardsForSets(sets).length;
    elements.selectedSetSummary.textContent =
      `${sets.size} ${sets.size === 1 ? "set" : "sets"} · ${cardCount} ${cardCount === 1 ? "card" : "cards"}`;
  }

  function renderSetPicker(initialSets) {
    const fragment = document.createDocumentFragment();

    allSets.forEach((set, index) => {
      const label = document.createElement("label");
      label.className = "set-option";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = set;
      input.id = `set-${index}`;
      input.checked = initialSets.has(set);

      const marker = document.createElement("span");
      marker.className = "set-check";
      marker.setAttribute("aria-hidden", "true");

      const copy = document.createElement("span");
      copy.className = "set-option-copy";
      const name = document.createElement("strong");
      name.textContent = set === "Aeon's End (Core Box)" ? "Aeon's End" : set;
      const count = document.createElement("small");
      const setCount = AEONS_END_CARDS.filter((card) => card.sets.includes(set)).length;
      count.textContent = `${setCount} cards`;

      copy.append(name, count);
      label.append(input, marker, copy);
      fragment.append(label);
    });

    elements.setList.replaceChildren(fragment);
    updateSetSummary();
  }

  function applySetShortcut(action) {
    const wanted =
      action === "owned" ? new Set(DEFAULT_SETS) :
      action === "all" ? new Set(allSets) : new Set();

    elements.setList.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.checked = wanted.has(input.value);
    });
    updateSetSummary();
  }

  function closeEffects(except = null) {
    elements.grid.querySelectorAll(".market-card.effect-open").forEach((card) => {
      if (card === except) return;
      card.classList.remove("effect-open");
      const button = card.querySelector(".card-name-button");
      button?.setAttribute("aria-expanded", "false");
      button?.blur();
    });
  }

  function createCard(card, rule, slot) {
    const article = document.createElement("article");
    article.className = "market-card";
    article.dataset.type = card.type;
    article.style.setProperty("--slot", slot);

    const top = document.createElement("div");
    top.className = "card-top";
    const type = document.createElement("span");
    type.className = "card-type";
    type.textContent = card.type;
    const cost = document.createElement("span");
    cost.className = "card-cost";
    cost.setAttribute("aria-label", `Cost ${card.cost}`);
    cost.textContent = card.cost;

    const effectTrigger = document.createElement("div");
    effectTrigger.className = "effect-trigger";
    const name = document.createElement("button");
    name.className = "card-name card-name-button";
    name.type = "button";
    name.textContent = card.name;
    name.setAttribute("aria-expanded", "false");
    name.setAttribute("aria-controls", `effect-${slot}`);
    name.setAttribute("aria-label", `${card.name}. Show card effect.`);

    const effect = document.createElement("div");
    effect.className = "effect-popover";
    effect.id = `effect-${slot}`;
    effect.setAttribute("role", "tooltip");
    const effectLabel = document.createElement("span");
    effectLabel.className = "effect-label";
    effectLabel.textContent = "Card effect";
    const effectText = document.createElement("p");
    effectText.textContent = card.effect;
    const wikiLink = document.createElement("a");
    wikiLink.href = card.wiki;
    wikiLink.target = "_blank";
    wikiLink.rel = "noreferrer";
    wikiLink.textContent = "View Wiki source ↗";
    effect.append(effectLabel, effectText, wikiLink);
    effectTrigger.append(name, effect);

    const bottom = document.createElement("div");
    bottom.className = "card-bottom";
    const meta = document.createElement("div");
    meta.className = "card-meta";
    const set = document.createElement("span");
    set.className = "card-set";
    const includedSets = card.sets.filter((setName) => activeSets.has(setName));
    set.textContent = includedSets.join(" · ") || card.sets.join(" · ");
    const sourceRule = document.createElement("span");
    sourceRule.className = "card-rule";
    sourceRule.textContent = `Rule ${slot + 1} · ${rule.text}`;
    const reroll = document.createElement("button");
    reroll.className = "reroll-button";
    reroll.type = "button";
    reroll.dataset.slot = slot;
    reroll.setAttribute("aria-label", `Reroll ${card.name} using rule ${rule.text}`);
    reroll.innerHTML = '<span class="reroll-icon" aria-hidden="true">↻</span> Reroll';

    top.append(type, cost);
    meta.append(set, sourceRule);
    bottom.append(meta, reroll);
    article.append(top, effectTrigger, bottom);
    return article;
  }

  function renderMarket() {
    closeEffects();
    if (!market.length) {
      elements.grid.innerHTML = '<div class="empty-state">Generate a market to begin.</div>';
      return;
    }

    const fragment = document.createDocumentFragment();
    market.forEach((card, slot) => fragment.append(createCard(card, activeRules[slot], slot)));
    elements.grid.replaceChildren(fragment);
    elements.note.textContent =
      `${market.length} unique supply piles · tap a card name for its effect`;
  }

  function generate({ persist = true } = {}) {
    const rules = validateEditor();
    if (!rules) return;

    const sets = selectedSets();
    if (!sets.size) {
      const message = "Select at least one set before generating.";
      setFeedback(message, true);
      showToast(message);
      elements.setPicker.open = true;
      return;
    }

    const pool = cardsForSets(sets);
    try {
      market = MarketRules.generateMarket(rules, pool);
      activeCards = pool;
      activeRules = rules;
      activeSets = sets;
      renderMarket();
      setFeedback(`${rules.length} supply rules generated successfully`);
      if (persist) savePreferences(elements.rules.value.trim(), sets);
    } catch (error) {
      setFeedback(error.message, true);
      showToast(error.message);
    }
  }

  function reroll(slot) {
    try {
      const replacement = MarketRules.rerollSlot(
        slot,
        market,
        activeRules,
        activeCards,
      );
      const currentCard = elements.grid.children[slot];
      const replacementCard = createCard(replacement, activeRules[slot], slot);

      replacementCard.classList.add("is-rerolled");
      market[slot] = replacement;
      closeEffects();
      currentCard.replaceWith(replacementCard);
      replacementCard
        .querySelector(".reroll-button")
        ?.focus({ preventScroll: true });
    } catch (error) {
      showToast(error.message);
    }
  }

  const saved = readPreferences();
  const initialSets = new Set(saved?.sets?.length ? saved.sets : DEFAULT_SETS);
  if (saved?.rules) elements.rules.value = saved.rules;
  elements.catalogSummary.lastChild.textContent =
    ` ${AEONS_END_CARDS.length} cards · ${allSets.length} sets`;
  renderSetPicker(initialSets);

  elements.generate.addEventListener("click", () => generate());
  elements.reset.addEventListener("click", () => {
    elements.rules.value = DEFAULT_RULES;
    validateEditor();
    elements.rules.focus();
  });
  elements.rules.addEventListener("input", validateEditor);
  elements.rules.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      generate();
    }
  });
  elements.setList.addEventListener("change", updateSetSummary);
  elements.setPicker.addEventListener("click", (event) => {
    const action = event.target.closest("[data-set-action]")?.dataset.setAction;
    if (action) applySetShortcut(action);
  });
  elements.grid.addEventListener("click", (event) => {
    const rerollButton = event.target.closest(".reroll-button");
    if (rerollButton) {
      reroll(Number(rerollButton.dataset.slot));
      return;
    }

    const nameButton = event.target.closest(".card-name-button");
    if (!nameButton) return;
    const card = nameButton.closest(".market-card");
    const wasOpen = card.classList.contains("effect-open");
    closeEffects();
    card.classList.toggle("effect-open", !wasOpen);
    nameButton.setAttribute("aria-expanded", String(!wasOpen));
    if (wasOpen) nameButton.blur();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".effect-trigger")) closeEffects();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeEffects();
  });

  generate({ persist: false });
})();
