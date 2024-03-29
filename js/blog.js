$(document).ready(function () {
  // Initialize Owl Carousel
  $("#blogCarousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false, // Disable default navigation
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  });

  // Custom Navigation Events
  $(".custom-next-btn").click(function () {
    $("#blogCarousel").trigger("next.owl.carousel");
  });

  $(".custom-prev-btn").click(function () {
    $("#blogCarousel").trigger("prev.owl.carousel");
  });
});

// ========================================

$("#owl-carousel").owlCarousel({
  loop: false,
  margin: 24,
  nav: false,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1.25,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
// ============================================
$(".slider-three").owlCarousel({
  items: 3,
  loop: false,
  margin: 16,
  nav: true,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1.25,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4.25,
    },
  },
});
