// JavaScript to toggle the navbar on small screens
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

// Toggle the display of navigation links when hamburger icon is clicked
mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
