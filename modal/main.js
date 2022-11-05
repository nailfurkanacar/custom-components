const custom_modal = (_title, _content, accepted, cancelled) => {
  const modalBtn = document.querySelector(".modalBtn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const title = modalOverlay.querySelector(".title");
  const content = modalOverlay.querySelector(".content");
  const closeIcon = modalOverlay.querySelector(".close-icon");
  const acceptBtn = modalOverlay.querySelector(".acceptBtn");
  const cancelBtn = modalOverlay.querySelector(".cancelBtn");

  title.innerHTML = _title;
  _content = document.querySelector(_content);
  content.appendChild(_content);

  modalBtn.addEventListener(
    "click",
    () => (modalOverlay.style.display = "flex")
  );

  const closeModal = () => {
    modalOverlay.style.display = "none";
  };

  closeIcon.addEventListener("click", () => closeModal());

  acceptBtn.addEventListener("click", () => {
    accepted();
    closeModal();
  });

  cancelBtn.addEventListener("click", () => {
    cancelled();
    closeModal();
  });
};

const triggeredAccept = () => {
  console.log("Accepted");
};
const triggeredCancelled = () => {
  console.log("Cancelled");
};

custom_modal("Modal Sample", "#content", triggeredAccept, triggeredCancelled);
