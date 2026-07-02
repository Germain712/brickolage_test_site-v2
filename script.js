const navToggle = document.querySelector(".v2-nav-toggle");
const nav = document.querySelector(".v2-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// Close menu when clicking a link (mobile)
document.querySelectorAll(".v2-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
