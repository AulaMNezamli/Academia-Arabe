var overlay = document.getElementById("overlay");
var drop = document.getElementById("drop");
var dropOne = document.getElementById("drop-one");
var dropTwo = document.getElementById("drop-two");

drop.onclick = (e) => {
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
};

dropOne.onclick = (e) => {
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
};

dropTwo.onclick = (e) => {
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
};

overlay.onclick = (_) => {
  overlay.style.display = "none";
  document.body.style.overflowY = "auto";
};
// ========================================================

// SideBar
function openNav() {
  let open = document.getElementById("mySidenav");

  if (open.style.display === "none") {
    open.style.display = "block";
    open.style.width = "100%";
    open.style.transition = ".4s";
  } else {
    open.style.display = "none";
  }
}
// ========================================================

// Close
function closeNav() {
  let open = document.getElementById("mySidenav");
  open.style.display = "none";
}
function scrollToSection() {
  var section = document.getElementById("mySection");
  section.scrollIntoView({ behavior: "smooth" });
}
// ========================================================

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
      items: 4,
    },
  },
});
// ============================================
$(".slider-three").owlCarousel({
  items: 3,
  loop: false,
  margin: 16,
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
      items: 4.25,
    },
  },
});
// ====================================================
