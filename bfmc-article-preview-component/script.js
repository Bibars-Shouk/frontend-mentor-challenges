const shareBtn = document.querySelector(".btn");
const shareOptions = document.querySelector(".share-options");

shareBtn.addEventListener("click", (e) => {
  shareOptions.classList.toggle("active");
  shareBtn.classList.toggle("active");
});
