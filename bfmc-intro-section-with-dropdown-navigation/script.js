const navElement = document.querySelector(".nav");

const btnOpenNav = document.querySelector(".nav-btn-open");
const btnCloseNav = document.querySelector(".nav-btn-close");

const btnFeaturesMenu = document.querySelector(".ddm-btn.features");
const btnCompanyMenu = document.querySelector(".ddm-btn.company");

btnOpenNav.addEventListener("click", (e) => {
  navElement.classList.toggle("open");
  document.body.style.overflowY = "hidden";
});

btnCloseNav.addEventListener("click", (e) => {
  navElement.classList.toggle("open");
  document.body.style.overflowY = "visible";
});

btnFeaturesMenu.addEventListener("click", (e) => {
  btnFeaturesMenu.nextElementSibling.classList.toggle("open");
  const featuresArrow = btnFeaturesMenu.children[1];
  featuresArrow.classList.toggle("fa-angle-up");
  featuresArrow.classList.toggle("fa-angle-down");
});

btnCompanyMenu.addEventListener("click", (e) => {
  btnCompanyMenu.nextElementSibling.classList.toggle("open");
  const companyArrow = btnCompanyMenu.children[1];
  companyArrow.classList.toggle("fa-angle-up");
  companyArrow.classList.toggle("fa-angle-down");
});
