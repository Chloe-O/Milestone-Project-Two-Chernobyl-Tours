let openModalButtons = document.querySelectorAll("[data-modal-target]");
let closeModalButtons = document.querySelectorAll("[data-close-button]");
let overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let modal = document.querySelector(button.dataset.modalTarget);
    openModalButtons(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function openModal(modal) {
  if (modal == null) return;
  modal;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
