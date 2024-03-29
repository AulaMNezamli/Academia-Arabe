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