const navBtn = document.querySelector(".navbar__btn");
const nav = document.querySelector(".navbar__nav");

navBtn.addEventListener("click", (e) => {
  nav.classList.toggle("open");
});
