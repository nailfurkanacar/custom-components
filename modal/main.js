const modalBtn = document.querySelector(".modalBtn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeIcon = modalOverlay.querySelector(".close-icon");
const acceptBtn = modalOverlay.querySelector(".acceptBtn");
const cancelBtn = modalOverlay.querySelector(".cancelBtn");

modalBtn.addEventListener("click", () => (modalOverlay.style.display = "flex"));
closeIcon.addEventListener(
  "click",
  () => (modalOverlay.style.display = "none")
);
acceptBtn.addEventListener("click", () => {
  console.log("Accepted");
  modalOverlay.style.display = "none";
});
cancelBtn.addEventListener("click", () => {
  console.log("Cancelled");
  modalOverlay.style.display = "none";
});
