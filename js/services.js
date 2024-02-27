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