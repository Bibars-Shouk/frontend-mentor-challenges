const formElement = document.querySelector("form");
const emailInput = document.querySelector("input[type='email']");
const errorMsg = document.querySelector(".error-msg");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

formElement.addEventListener("submit", (e) => {
  let submittedEmail = emailInput.value;
  if (!validateEmail(submittedEmail)) {
    emailInput.classList.add("invalid");
    errorMsg.style.display = "block";
    e.preventDefault();
  }
});

emailInput.addEventListener("input", (e) => {
  emailInput.classList.remove("invalid");
  errorMsg.style.display = "none";
});
