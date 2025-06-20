document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-menu");
  closeBtn.addEventListener("click", closeMenu);

  // Function to open the menu
  function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    overlay.classList.remove("hidden");
  }

  // Function to close the menu
  function closeMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }

  // Toggle on button click
  toggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("translate-x-full")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Optional: Close when clicking on the overlay
  overlay.addEventListener("click", closeMenu);

  // Swiper for Trusted Partners
  const trustedPartnersSwiper = new Swiper(".trusted-partners-swiper", {
    slidesPerView: 4,
    spaceBetween: 100,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });

  // Swiper for Services
  const servicesSwiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: ".services-swiper .swiper-button-next",
    //   prevEl: ".services-swiper .swiper-button-prev",
    // },
    // pagination: {
    //   el: ".services-swiper .swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
  });
});
