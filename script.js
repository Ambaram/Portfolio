(function () {
  "use strict";

  // --- Hero animations on load ---
  function initHeroAnimations() {
    const elements = document.querySelectorAll(".hero .animate-in");
    elements.forEach((el, i) => {
      el.style.transition = "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
      el.style.transitionDelay = `${0.15 + i * 0.1}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.add("visible"));
      });
    });
  }

  // --- Scroll-triggered animations ---
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

    // Stagger delay for grid children
    const skillCards = document.querySelectorAll(".skills-grid .skill-card");
    skillCards.forEach((card, i) => card.style.setProperty("--i", i));

    const projectCards = document.querySelectorAll(".project-cards .project-card");
    projectCards.forEach((card, i) => card.style.setProperty("--i", i));
  }

  // --- Header scroll state ---
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let lastY = window.scrollY;
    function updateHeader() {
      const y = window.scrollY;
      if (y > 80) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
      lastY = y;
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  // --- Mobile nav toggle ---
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  // --- Smooth scroll for anchor links ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const id = this.getAttribute("href");
        if (id === "#") return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // --- Footer year ---
  function initFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // --- Run on DOM ready ---
  function init() {
    initHeroAnimations();
    initScrollAnimations();
    initHeaderScroll();
    initMobileNav();
    initSmoothScroll();
    initFooterYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
