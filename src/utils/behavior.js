export function initScrollAnimations() {
  const targets = document.querySelectorAll([
    "main > section",
    "main .section-heading",
    "main .pillar-card",
    "main .sector-card",
    "main .news-card",
    "main .knowledge-card",
    "main .team-card",
    "main .about-grid > *",
    "main .project-grid > *",
    "main .ecosystem-gallery figure",
    "main .detail-process article",
    "main .community-steps article",
    "main .boundary-grid article",
    "main .property-kpis article",
    "main .chart-card",
    "[data-reveal]",
  ].join(","));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach(target => target.classList.add("is-visible"));
    return () => {};
  }

  targets.forEach((target, index) => {
    target.classList.add("reveal-item");
    target.style.setProperty("--reveal-delay", `${index * 80}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

  targets.forEach(target => observer.observe(target));
  return () => observer.disconnect();
}
