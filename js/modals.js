/*Reactor 4*/

/*When opening the card, the modal is diplayed in the browser*/

var reactorModal = document.getElementById("reactorModal");
var modalOverlay = document.getElementById("modal-overlay");
var cardButton = document.getElementById("reactorButton");
var span = document.getElementsByClassName("close")[0];

cardButton.onclick = function () {
  reactorModal.style.display = "block";
  modalOverlay.style.display = "block";
};

span.onclick = function () {
  reactorModal.style.display = "none";
  modalOverlay.style.display = "none";
};

/*Amusement Park*/

/*When opening the card, the user is taken to Trip Advisor via a new tab*/

var amusementButton = document.getElementById("amuseButton");

amusementButton.onclick = function () {
  window.open(
    "https://www.tripadvisor.co.uk/Attraction_Review-g10441492-d7087958-Reviews-Pripyat_Amusement_Park-Pripyat_Kiev_Oblast.html"
  );
};

/*Duga radar*/

/*When opening the card, the user is taken to Wikipedia via a new tab*/

var dugaButton = document.getElementById("dugaButton");

dugaButton.onclick = function () {
  window.open("https://en.wikipedia.org/wiki/Duga_radar#");
};

/*Red forest*/

/*When opening the card, the modal is diplayed in the browser*/

var forestButton = document.getElementById("forestButton");
var forestModal = document.getElementById("forestModal");
var forestSpan = document.getElementsByClassName("forestClose")[0];

forestButton.onclick = function () {
  forestModal.style.display = "block";
  modalOverlay.style.display = "block";
};

forestSpan.onclick = function () {
  forestModal.style.display = "none";
  modalOverlay.style.display = "none";
};
