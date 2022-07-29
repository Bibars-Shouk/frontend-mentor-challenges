const chartElement = document.querySelector(".chart");

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const date = new Date();
const today = days[date.getDay()];

const getData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
};

const calculateBarHeight = (maxAmount, currentAmount) => {
  return Math.ceil((currentAmount * 100) / maxAmount);
};

const buildBar = (obj) => {
  const barContainer = document.createElement("div");
  barContainer.classList.add("bar-container");

  const bar = document.createElement("div");
  bar.classList.add("bar");
  if (obj.day === today) {
    bar.classList.add("current");
  }
  bar.style.height = `0%`;

  const barAmount = document.createElement("span");
  barAmount.innerText = `$${obj.amount}`;
  barAmount.classList.add("bar-amount");

  bar.appendChild(barAmount);

  const day = document.createElement("p");
  day.innerText = obj.day;
  day.classList.add("day");

  barContainer.appendChild(bar);
  barContainer.appendChild(day);

  return barContainer;
};

const buildChart = async () => {
  const dataArray = await getData();

  const maxAmount = Math.max.apply(
    Math,
    dataArray.map((obj) => obj.amount)
  );

  dataArray.forEach((obj, idx) => {
    let barContainer = buildBar(obj);
    let bar = barContainer.firstElementChild;

    let timeout = (idx + 1) * 150;

    setTimeout(() => {
      bar.style.height = `${calculateBarHeight(maxAmount, obj.amount)}%`;
    }, timeout);

    chartElement.appendChild(barContainer);
  });
};

buildChart();
