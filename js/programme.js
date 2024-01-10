const finData = document.querySelector(".financing__data__content p");
const finData2 = document.querySelector(".financing__data__content div");

const toggle = (value) => {
  let booleanValue = value;
  if (booleanValue) {
    finData2.classList.remove("hidden");
    finData.classList.add("hidden");
  } else {
    finData2.classList.add("hidden");
    finData.classList.remove("hidden");
  }
};

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modalId.style.display === "none") {
    modalId.style.display = "flex";
  } else {
    modalId.style.display = "none";
  }
}
