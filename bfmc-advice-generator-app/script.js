const adviceHeader = document.querySelector(".advice-card > h1");
const adviceText = document.querySelector(".advice-card > p");
const adviceBtn = document.querySelector(".btn");

const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  return data;
};

const setAdvice = async () => {
  const adviceObj = await getAdvice();
  const { id, advice } = adviceObj.slip;

  adviceHeader.innerText = `Advice #${id}`;
  adviceText.innerText = `"${advice}"`;
};

adviceBtn.addEventListener("click", setAdvice);
setAdvice();
