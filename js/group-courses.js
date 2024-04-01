var overlay = document.getElementById("overlay");
var drop = document.getElementById("drop");
var dropOne = document.getElementById("drop-one");
var dropTwo = document.getElementById("drop-two");

function toggleModalOpen() {
  document.body.classList.toggle("modal-open");
}

drop.onclick = (e) => {
  overlay.style.display = "block";
  toggleModalOpen();
};

dropOne.onclick = (e) => {
  overlay.style.display = "block";
  toggleModalOpen();
};

dropTwo.onclick = (e) => {
  overlay.style.display = "block";
  toggleModalOpen();
};

overlay.onclick = (_) => {
  overlay.style.display = "none";
  toggleModalOpen();
};

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
// Close
function closeNav() {
  let open = document.getElementById("mySidenav");
  open.style.display = "none";
}
function scrollToSection() {
  var section = document.getElementById("mySection");
  section.scrollIntoView({ behavior: "smooth" });
}
document
  .getElementById("contact-button")
  .addEventListener("click", function () {
    window.location.href = "contact.html";
  });
$(".slider-three").owlCarousel({
  items: 3,
  loop: true,
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
$(".slider").on("initialized.owl.carousel changed.owl.carousel", function (e) {
  if (!e.namespace) {
    return;
  }
  var carousel = e.relatedTarget;
  $(".slider-counter").text(
    (carousel.relative(carousel.current()) + 1).toString().padStart(2, "0") +
      " / " +
      carousel.items().length.toString().padStart(2, "0")
  );
});
$("#owl-carousel").owlCarousel({
  loop: true,
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
$(".slider-one")
  .on("initialized.owl.carousel changed.owl.carousel", function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $(".slider-counter-one").text(
      (carousel.relative(carousel.current()) + 1).toString().padStart(2, "0") +
        " / " +
        carousel.items().length.toString().padStart(2, "0")
    );
  })
  .owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
$("#home").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 2.5,
    },
    400: {
      items: 3.5,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});

var formToHide = document.querySelector(".div-eight");
var targetSection = document.querySelector("#mySection");

// Back to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
  showBackToTopAtSectionEnd();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showBackToTopAtSectionEnd() {
  let targetSectionPosition = targetSection.getBoundingClientRect().bottom;
  let windowHeight = window.innerHeight;
  if (targetSectionPosition <= windowHeight) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.addEventListener("scroll", function () {
  if (window.innerWidth >= 992) {
    var targetSectionPosition = targetSection.getBoundingClientRect().bottom;
    if (targetSectionPosition <= window.innerHeight) {
      formToHide.style.display = "none";
    } else {
      formToHide.style.display = "block";
    }
  } else {
    formToHide.style.display = "block";
  }
});
