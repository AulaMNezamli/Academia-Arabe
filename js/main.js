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
$(".owl-carousel").owlCarousel({
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
