let bill = 0;
let tip = 0;
let numberOfPeople = 0;
let tipAmount = 0;
let total = 0;

const billInput = document.querySelector('input[name="bill"]');
const tipRadioInputs = document.querySelectorAll('input[type="radio"]');
const tipCustomInput = document.querySelector('input[name="tip-input"]');
const resetBtn = document.querySelector(".reset-btn");
const numberOfPeopleInput = document.querySelector(
  'input[name="number-of-people"]'
);

const amountValueTip = document.querySelector(".amount-value.tip");
const amountValueTotal = document.querySelector(".amount-value.total");

const updateAmount = () => {
  const totalTip = (tip / 100) * bill;
  const tipPerPerson = totalTip / numberOfPeople;
  const totalPerPerson = tipPerPerson + bill / numberOfPeople;

  amountValueTip.innerText =
    !isNaN(tipPerPerson) && isFinite(tipPerPerson)
      ? parseFloat(Math.round(tipPerPerson * 100) / 100)
      : (0).toFixed(2);
  amountValueTotal.innerText =
    !isNaN(totalPerPerson) && isFinite(totalPerPerson)
      ? parseFloat(Math.round(totalPerPerson * 100) / 100)
      : (0).toFixed(2);
};

billInput.addEventListener("input", (e) => {
  const billValue = parseFloat(e.target.value);
  if (billValue <= 0) {
    e.target.parentElement.classList.add("invalid");
  } else {
    e.target.parentElement.classList.remove("invalid");
    bill = billValue;
    if (resetBtn.disabled) {
      resetBtn.disabled = false;
    }
    updateAmount();
  }
});

tipRadioInputs.forEach((rInput) => {
  rInput.addEventListener("change", (e) => {
    tip = parseFloat(e.target.value);
    rInput.parentElement.parentElement.classList.remove("invalid");
    tipCustomInput.value = "";
    if (resetBtn.disabled) {
      resetBtn.disabled = false;
    }
    updateAmount();
  });
});

tipCustomInput.addEventListener("input", (e) => {
  const customTip = parseInt(e.target.value);

  if (customTip < 0) {
    e.target.parentElement.parentElement.classList.add("invalid");
  } else if (isNaN(customTip)) {
    tip = 0;
    updateAmount();
  } else {
    e.target.parentElement.parentElement.classList.remove("invalid");
    tip = customTip;
    if (resetBtn.disabled) {
      resetBtn.disabled = false;
    }
    updateAmount();
  }
});

tipCustomInput.addEventListener("focus", (e) => {
  tipRadioInputs.forEach((rInput) => {
    rInput.checked = false;
  });
});

numberOfPeopleInput.addEventListener("input", (e) => {
  const nop = parseInt(e.target.value);
  if (nop < 1) {
    e.target.parentElement.classList.add("invalid");
  } else {
    e.target.parentElement.classList.remove("invalid");
    numberOfPeople = nop;
    if (resetBtn.disabled) {
      resetBtn.disabled = false;
    }
    updateAmount();
  }
});
