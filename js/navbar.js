document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu");
  const mobileNav = document.getElementById("mobile-nav");
  const closeMenuButton = document.getElementById("close-menu");

  // Toggle mobile menu on hamburger click
  mobileMenuButton.addEventListener("click", function () {
    mobileNav.classList.toggle("hidden"); // Toggle the mobile navbar visibility
    mobileMenuButton.classList.toggle("active"); // Toggle the hamburger icon to cross
  });

  // Close mobile menu on close button click
  closeMenuButton.addEventListener("click", function () {
    mobileNav.classList.add("hidden");
    mobileMenuButton.classList.remove("active");
  });
});
// Select DOM elements
const mobileMenu = document.getElementById("mobile-menu");
const mobileNav = document.getElementById("mobile-nav");
const closeMenuBtn = document.getElementById("close-menu");

// Open mobile menu on hamburger click
mobileMenu.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-full");
});

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => {
  mobileNav.classList.add("translate-x-full");
});

window.addEventListener("scroll", function () {
  const logo = document.getElementById("logo");

  if (window.scrollY > 50) {
    logo.classList.remove("md:w-32", "w-20");
    logo.classList.add("md:w-20", "w-12"); // Smaller size on scroll
  } else {
    logo.classList.remove("md:w-20", "w-12");
    logo.classList.add("md:w-32", "w-20"); // Original size when at top
  }
});
