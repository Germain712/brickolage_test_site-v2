const navToggle = document.querySelector(".v2-nav-toggle");
const nav = document.querySelector(".v2-nav");
const themeToggle = document.querySelector(".v2-theme-toggle");

// NAV MENU
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// Close menu when clicking a link
document.querySelectorAll(".v2-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// THEME TOGGLE
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
