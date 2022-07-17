const ratingFrom = document.querySelector("form");
const ratingRadioBtns = document.querySelectorAll(".selection");
const submitBtn = document.querySelector('input[type="submit"]');
const flipCardElement = document.querySelector(".flip-card");
const ratingValueMsg = document.querySelector(".selection-value");

let rating = null;

ratingRadioBtns.forEach((radioBtn, idx) => {
  radioBtn.addEventListener("change", (e) => {
    radioBtn.classList.add("selected");
    rating = e.target.value;
    submitBtn.disabled = false;
    ratingRadioBtns.forEach((rb, i) => {
      if (i !== idx) {
        rb.classList.remove("selected");
      }
    });
  });
});

ratingFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  flipCardElement.classList.add("submitted");
  ratingValueMsg.innerText = `You selected ${rating} out of 5`;
});
