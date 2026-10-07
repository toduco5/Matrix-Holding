export function initScrollAnimations() {
  const selector = [
    "section",
    ".section-heading",
    ".section-header",
    ".pillar-card",
    ".sector-card",
    ".news-card",
    ".knowledge-card",
    ".team-card",
    ".member-company-card",
    ".about-intro-grid",
    ".about-grid > *",
    ".project-grid > *",
    ".ecosystem-gallery figure",
    ".detail-process article",
    ".community-steps article",
    ".boundary-grid article",
    ".property-kpis article",
    ".chart-card",
    ".hero-centered-content",
    ".live-ticker",
    "[data-reveal]"
  ].join(",");

  const targets = document.querySelectorAll(selector);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach(target => target.classList.add("is-visible"));
    return () => {};
  }

  targets.forEach((target, index) => {
    if (!target.classList.contains("reveal-item")) {
      target.classList.add("reveal-item");
      const delay = (index % 5) * 80;
      target.style.transitionDelay = `${delay}ms`;
    }
  });

  const checkVisibility = () => {
    const triggerBottom = window.innerHeight * 0.92;
    targets.forEach(target => {
      const rect = target.getBoundingClientRect();
      if (rect.top <= triggerBottom) {
        target.classList.add("is-visible");
      }
    });
  };

  // Immediate layout check
  checkVisibility();
  const timer = setTimeout(checkVisibility, 150);

  // IntersectionObserver for scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight * 0.92) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px 80px 0px", threshold: 0.01 });

  targets.forEach(target => observer.observe(target));

  // Scroll and Resize event listeners backup
  window.addEventListener("scroll", checkVisibility, { passive: true });
  window.addEventListener("resize", checkVisibility, { passive: true });

  return () => {
    clearTimeout(timer);
    window.removeEventListener("scroll", checkVisibility);
    window.removeEventListener("resize", checkVisibility);
    observer.disconnect();
  };
}
