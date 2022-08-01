const radioButtons = document.querySelectorAll('input[type="radio"]');

const getData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
};

const renderData = async (tf) => {
  const data = await getData();
  data.forEach((obj) => {
    const title = obj.title.toLowerCase().replace(" ", "-");
    const timeFrames = obj.timeframes;

    document.querySelector(
      `.item-content.${title} > .time-spent`
    ).innerText = `${timeFrames[tf].current}hrs`;

    document.querySelector(
      `.item-content.${title} > .previous-time-spent`
    ).innerText = `Last Week - ${timeFrames[tf].previous}hrs`;
  });
};

radioButtons.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    renderData(e.target.value);
  });
});

renderData("daily");
