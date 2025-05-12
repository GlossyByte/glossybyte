document.addEventListener("DOMContentLoaded", function () {
  // Scroll to section on menu click
  const links = document.querySelectorAll(".navbar a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjusting for navbar height
          behavior: "smooth",
        });
      }
    });
  });

  // Add active class on scroll to sections
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.5, // This can be adjusted depending on when you want the link to become active
  };
});

window.addEventListener("load", function () {
  if (window.location.hash) {
    // Temporarily remove hash and scroll to top
    const scrollY = window.scrollY;
    const hash = window.location.hash;
    history.replaceState(null, null, " ");
    window.scrollTo(0, 0);
    setTimeout(() => {
      history.replaceState(null, null, hash);
    }, 0);
  }
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, // Enables continuous loop mode
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2, // 2 slides per view on tablet
    },
    1024: {
      slidesPerView: 3, // 3 slides per view on larger screens
    },
  },
});
