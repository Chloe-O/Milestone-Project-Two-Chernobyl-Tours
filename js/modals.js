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
