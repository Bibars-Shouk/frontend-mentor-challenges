const inputElement = document.querySelector("input");
const formElement = document.querySelector("form");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

formElement.addEventListener("submit", (e) => {
  if (!validateEmail(inputElement.value)) {
    e.preventDefault();
    inputElement.parentElement.classList.add("invalid");
  }
});

inputElement.addEventListener("input", (e) => {
  inputElement.parentElement.classList.remove("invalid");
});
