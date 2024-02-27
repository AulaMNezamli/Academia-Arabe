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

// ======================================================

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

$(".owl-prev").click(function () {
  $(".owl-carousel").trigger("prev.owl.carousel");
});

$(".owl-next").click(function () {
  $(".owl-carousel").trigger("next.owl.carousel");
});

// ======================================================
function playPause() {
  var video = document.getElementById("myVideo");
  var overlay = document.querySelector(".overlay-one");
  var regular = document.getElementById("fa-regular");

  if (video.paused) {
    video.play();
    overlay.style.display = "none";
    regular.style.display = "none";
  } else {
    video.pause();
    overlay.style.display = "block";
    regular.style.display = "block";
  }
}

// ======================================================

