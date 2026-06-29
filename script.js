const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const revealItems = document.querySelectorAll(".reveal");
const reviewTrack = document.querySelector("[data-reviews]");
const customSelects = document.querySelectorAll("[data-custom-select]");
const faqBoards = document.querySelectorAll("[data-faq-tabs]");

if (window.lucide?.createIcons && window.lucide?.icons) {
  window.lucide.createIcons({ icons: window.lucide.icons });
}

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu?.classList.toggle("is-open", !isOpen);
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        const delayMs = Number.parseFloat(entry.target.style.transitionDelay) || 0;
        window.setTimeout(() => {
          entry.target.style.transitionDelay = "";
        }, delayMs + 900);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelector("[data-review-prev]")?.addEventListener("click", () => {
  reviewTrack?.scrollBy({ left: -320, behavior: "smooth" });
});

document.querySelector("[data-review-next]")?.addEventListener("click", () => {
  reviewTrack?.scrollBy({ left: 320, behavior: "smooth" });
});

faqBoards.forEach((board) => {
  const questions = [...board.querySelectorAll("[data-faq-question]")];
  const answerCard = board.querySelector(".faq-answer-card");
  const answerText = board.querySelector("[data-faq-answer-text]");
  const answerIndex = board.querySelector("[data-faq-index]");

  const activateQuestion = (question, focus = false) => {
    const activeIndex = questions.indexOf(question);

    questions.forEach((item) => {
      const isActive = item === question;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
      item.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    if (answerCard) {
      answerCard.setAttribute("aria-labelledby", question.id);
      answerCard.classList.add("is-changing");
    }

    window.setTimeout(() => {
      if (answerText) answerText.textContent = question.dataset.faqAnswer || "";
      if (answerIndex) answerIndex.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
      answerCard?.classList.remove("is-changing");
    }, 140);

    if (focus) question.focus();
  };

  questions.forEach((question, index) => {
    question.setAttribute("tabindex", question.classList.contains("is-active") ? "0" : "-1");

    question.addEventListener("click", () => activateQuestion(question));
    question.addEventListener("keydown", (event) => {
      const keyMap = {
        ArrowDown: (index + 1) % questions.length,
        ArrowRight: (index + 1) % questions.length,
        ArrowUp: (index - 1 + questions.length) % questions.length,
        ArrowLeft: (index - 1 + questions.length) % questions.length,
        Home: 0,
        End: questions.length - 1,
      };

      if (event.key in keyMap) {
        event.preventDefault();
        activateQuestion(questions[keyMap[event.key]], true);
      }
    });
  });
});

const closeCustomSelect = (select) => {
  select.classList.remove("is-open");
  select.querySelector("[data-custom-select-button]")?.setAttribute("aria-expanded", "false");
};

const openCustomSelect = (select) => {
  customSelects.forEach((item) => {
    if (item !== select) closeCustomSelect(item);
  });
  select.classList.add("is-open");
  select.querySelector("[data-custom-select-button]")?.setAttribute("aria-expanded", "true");
};

customSelects.forEach((select) => {
  const trigger = select.querySelector("[data-custom-select-button]");
  const valueLabel = select.querySelector("[data-custom-select-value]");
  const hiddenInput = select.querySelector('input[type="hidden"]');
  const options = [...select.querySelectorAll('[role="option"]')];

  const chooseOption = (option) => {
    options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
    if (valueLabel) valueLabel.textContent = option.textContent;
    if (hiddenInput) hiddenInput.value = option.dataset.value || option.textContent || "";
    closeCustomSelect(select);
    trigger?.focus();
  };

  trigger?.addEventListener("click", () => {
    if (select.classList.contains("is-open")) {
      closeCustomSelect(select);
    } else {
      openCustomSelect(select);
    }
  });

  trigger?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openCustomSelect(select);
      const selected = options.find((option) => option.getAttribute("aria-selected") === "true");
      (selected || options[0])?.focus();
    }
    if (event.key === "Escape") closeCustomSelect(select);
  });

  options.forEach((option, index) => {
    option.addEventListener("click", () => chooseOption(option));
    option.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        chooseOption(option);
      }
      if (event.key === "Escape") {
        closeCustomSelect(select);
        trigger?.focus();
      }
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const nextIndex = (index + direction + options.length) % options.length;
        options[nextIndex]?.focus();
      }
    });
  });
});

document.addEventListener("click", (event) => {
  customSelects.forEach((select) => {
    if (!select.contains(event.target)) closeCustomSelect(select);
  });
});
