
const navbar = document.getElementById("navbar");

function updateNavbar() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateNavbar, {
  passive: true
});

updateNavbar();

document.getElementById("year").textContent =
  new Date().getFullYear();
