(function runApp() {
  "use strict";

  const DEFAULT_RULES =
    "gem <4, gem =4, gem any, relic any, relic any, spell <5, spell <=5, spell >=5, spell >5";

  const elements = {
    feedback: document.querySelector("#rule-feedback"),
    generate: document.querySelector("#generate-market"),
    grid: document.querySelector("#market-grid"),
    note: document.querySelector("#market-note"),
    reset: document.querySelector("#reset-rules"),
    rules: document.querySelector("#market-rules"),
    toast: document.querySelector("#toast"),
  };

  let activeRules = [];
  let market = [];
  let toastTimer;

  function setFeedback(message, isError = false) {
    elements.feedback.textContent = message;
    elements.feedback.classList.toggle("is-error", isError);
    elements.rules.setAttribute("aria-invalid", String(isError));
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      elements.toast.classList.remove("is-visible");
    }, 3400);
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

    const name = document.createElement("h3");
    name.className = "card-name";
    name.textContent = card.name;

    const bottom = document.createElement("div");
    bottom.className = "card-bottom";

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const set = document.createElement("span");
    set.className = "card-set";
    set.textContent = card.set;

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
    article.append(top, name, bottom);
    return article;
  }

  function renderMarket() {
    if (!market.length) {
      elements.grid.innerHTML = '<div class="empty-state">The breach is quiet. Forge a market to begin.</div>';
      return;
    }

    const fragment = document.createDocumentFragment();
    market.forEach((card, slot) => {
      fragment.append(createCard(card, activeRules[slot], slot));
    });
    elements.grid.replaceChildren(fragment);
    elements.note.textContent = `${market.length} unique supply piles · reroll any slot`;
  }

  function generate() {
    const rules = validateEditor();
    if (!rules) return;

    try {
      const nextMarket = MarketRules.generateMarket(rules, AEONS_END_CARDS);
      activeRules = rules;
      market = nextMarket;
      renderMarket();
      setFeedback(`${rules.length} supply rules forged successfully`);
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
        AEONS_END_CARDS,
      );
      market[slot] = replacement;
      renderMarket();

      const button = elements.grid.querySelector(`[data-slot="${slot}"]`);
      if (button) button.focus({ preventScroll: true });
    } catch (error) {
      showToast(error.message);
    }
  }

  elements.generate.addEventListener("click", generate);
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
  elements.grid.addEventListener("click", (event) => {
    const button = event.target.closest(".reroll-button");
    if (button) reroll(Number(button.dataset.slot));
  });

  generate();
})();
