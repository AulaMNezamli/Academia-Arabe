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
// ===================================================================

var tab;
var tabContent;

window.onload = function () {
  tabContent = document.getElementsByClassName("tabContent");
  tab = document.getElementsByClassName("tab");
  hideTabsContent(1);
};

document.getElementById("tabs").onclick = function (event) {
  var target = event.target;
  if (target.className == "tab") {
    for (var i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
};

function hideTabsContent(a) {
  for (var i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("whiteborder");
  }
}

function showTabsContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    hideTabsContent(0);
    tab[b].classList.add("whiteborder");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}

// ===================================================================

$("#slider-one")
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
    loop: false,
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

// ===================================================================

$("#slider").on("initialized.owl.carousel changed.owl.carousel", function (e) {
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
$("#slider").owlCarousel({
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

// ===================================================================

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
// ===================================================================

let tabOne = document.getElementById("tab-one");
let tabTwo = document.getElementById("tab-two");
let tabThree = document.getElementById("tab-three");
let tabFour = document.getElementById("tab-four");
let myCarouselOne = document.getElementById("my-carousel-one");
let myCarouselTwo = document.getElementById("my-carousel-two");
let myCarouselThree = document.getElementById("my-carousel-three");
let myCarouselFour = document.getElementById("my-carousel-four");

tabOne.addEventListener("click", function () {
  hideAllCarousels();
  myCarouselOne.style.display = "block";
});

tabTwo.addEventListener("click", function () {
  hideAllCarousels();
  myCarouselTwo.style.display = "block";
});

tabThree.addEventListener("click", function () {
  hideAllCarousels();
  myCarouselThree.style.display = "block";
});

tabFour.addEventListener("click", function () {
  hideAllCarousels();
  myCarouselFour.style.display = "block";
});

function hideAllCarousels() {
  myCarouselOne.style.display = "none";
  myCarouselTwo.style.display = "none";
  myCarouselThree.style.display = "none";
  myCarouselFour.style.display = "none";
}

let tabs = document.querySelectorAll(".tab-mobile");
let tabContents = document.querySelectorAll(".tabContent-mobile");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    tabContents.forEach((content) => content.classList.remove("active"));
    tabContents[index].classList.add("active");
  });
});
$("#tabs-mobile").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1.25,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 4,
    },
  },
});
$("#my-carousel-one").owlCarousel({
  loop: false,
  margin: 24,
  nav: false,
  responsive: {
    0: {
      items: 1.25,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 4,
    },
  },
});
$("#my-carousel-two").owlCarousel({
  loop: false,
  margin: 24,
  nav: false,
  responsive: {
    0: {
      items: 1.25,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 4,
    },
  },
});
$("#my-carousel-three").owlCarousel({
  loop: false,
  margin: 24,
  nav: false,
  responsive: {
    0: {
      items: 1.25,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 4,
    },
  },
});
$("#my-carousel-four").owlCarousel({
  loop: false,
  margin: 24,
  nav: false,
  responsive: {
    0: {
      items: 1.25,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 4,
    },
  },
});

// Back to top button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}