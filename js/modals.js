/*Reactor 4*/

let reactorModal = document.getElementById("vidModal");
let modalOverlay = document.getElementById("modal-overlay");
let cardButton = document.getElementById("reactorButton");
let span = document.getElementsByClassName("close")[0];

cardButton.onclick = function () {
  reactorModal.style.display = "block";
  modalOverlay.style.display = "block";
};

span.onclick = function () {
  reactorModal.style.display = "none";
  modalOverlay.style.display = "none";
};

/*Amusement Park*/

let amusementButton = document.getElementById("amuseButton");

amusementButton.onclick = function () {
  window.open(
    "https://www.tripadvisor.co.uk/Attraction_Review-g10441492-d7087958-Reviews-Pripyat_Amusement_Park-Pripyat_Kiev_Oblast.html"
  );
};

/*Duga radar*/

let dugaButton = document.getElementById("dugaButton");

dugaButton.onclick = function () {
  window.open("https://en.wikipedia.org/wiki/Duga_radar#");
};

/*Red forest*/

let forestButton = document.getElementById("forestButton");

forestButton.onclick = function() {
    window.open("")
}