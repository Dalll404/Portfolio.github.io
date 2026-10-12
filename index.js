// Small progressive enhancements for the portfolio.
const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const navbar = document.querySelector(".navbar");
const navbarCollapse = document.querySelector("#navbarNav");

// Close the mobile menu after choosing a section.
navbarCollapse?.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.bootstrap && navbarCollapse.classList.contains("show")) {
      window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});

// Keep the active navigation item in sync with the visible section.
const sectionLinks = [
  ...document.querySelectorAll(".navbar .nav-link[href^='#']"),
];
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && observedSections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        sectionLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    {
      rootMargin: `-${navbar?.offsetHeight ?? 72}px 0px -55% 0px`,
      threshold: 0,
    },
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

// Add an unobtrusive shortcut back to the top once the visitor scrolls down.
const backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.type = "button";
backToTop.setAttribute("aria-label", "Kembali ke atas");
backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
document.body.append(backToTop);

const updateBackToTop = () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
};

window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
});
