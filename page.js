const navToggle = document.getElementById("navToggle");
const navLinksMobile = document.getElementById("navLinksMobile");
navToggle.addEventListener("click", () => {
  const isOpen = navLinksMobile.classList.toggle("open");
  navToggle.classList.toggle("active", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
navLinksMobile.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinksMobile.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  }),
);
