const navToggle = document.querySelector(".v2-nav-toggle");
const nav = document.querySelector(".v2-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
