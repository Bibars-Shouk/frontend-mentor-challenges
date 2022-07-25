const formElement = document.querySelector("form");

const inputFirstName = document.querySelector('input[for="first-name"]');
const inputLastName = document.querySelector('input[for="last-name"]');
const inputEmail = document.querySelector('input[for="email"]');
const inputPassword = document.querySelector('input[for="password"]');

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

formElement.addEventListener("submit", (e) => {
  if (inputFirstName.value === "") {
    inputFirstName.parentElement.classList.add("invalid");
    e.preventDefault();
  }
  if (inputLastName.value === "") {
    inputLastName.parentElement.classList.add("invalid");
    e.preventDefault();
  }

  if (!validateEmail(inputEmail.value)) {
    inputEmail.parentElement.classList.add("invalid");
    inputEmail.style.color = "#ff7a7a";
    inputEmail.value = "email@example/com";
    e.preventDefault();
  }

  if (inputPassword.value === "") {
    inputPassword.parentElement.classList.add("invalid");
    e.preventDefault();
  }
});

inputFirstName.addEventListener("input", (e) => {
  inputFirstName.parentElement.classList.remove("invalid");
});

inputLastName.addEventListener("input", (e) => {
  inputLastName.parentElement.classList.remove("invalid");
});

inputEmail.addEventListener("focus", (e) => {
  inputEmail.parentElement.classList.remove("invalid");
  if (inputEmail.value === "email@example/com") {
    inputEmail.value = "";
    inputEmail.style.color = "#6055a5";
  }
});

inputPassword.addEventListener("input", (e) => {
  inputPassword.parentElement.classList.remove("invalid");
});
