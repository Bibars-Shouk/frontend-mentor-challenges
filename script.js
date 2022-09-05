let isThemeLight = true;

const toggle = document.querySelector("#toggle");
const container = document.querySelector(".container");

toggle.addEventListener("click", (e) => {
  isThemeLight = !isThemeLight;
  if (!isThemeLight) {
    document.documentElement.setAttribute("data-theme", "dark");

    document
      .querySelector("#logo")
      .setAttribute("src", "./images/logo-dark.svg");

    document.querySelector("#indicator").classList.add("dark");

    toggle.classList.add("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    document
      .querySelector("#logo")
      .setAttribute("src", "./images/logo-light.svg");
    document.querySelector("#indicator").classList.remove("dark");
    toggle.classList.remove("dark");
  }
});

const buildScreenShotContainer = (name) => {
  const cardSsContainer = document.createElement("div");
  cardSsContainer.classList.add("card__ss-container");

  const screenShot = document.createElement("img");
  screenShot.classList.add("card__img");
  screenShot.setAttribute("src", `./${name}/${name}.png`);
  screenShot.setAttribute("loading", "lazy");
  screenShot.setAttribute(
    "alt",
    `screenshot of${name.replaceAll("-", " ").replace("bfmc", "")} solution`
  );

  cardSsContainer.appendChild(screenShot);

  return cardSsContainer;
};

const buildCardBody = (name, tools) => {
  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  const toolsList = document.createElement("ul");
  toolsList.classList.add("card__tools-list");

  tools.forEach((t) => {
    const tool = document.createElement("li");
    tool.classList.add(`card__tool`);
    tool.classList.add(`card__tool--${t.toLowerCase()}`);

    const container = document.createElement("div");
    container.classList.add("card__tool-img-container");

    const toolImg = document.createElement("img");
    toolImg.classList.add("card__tool-img");
    toolImg.setAttribute("src", `./images/${t.toLowerCase()}.svg`);

    const toolText = document.createElement("p");
    toolText.classList.add("card__tool-text");
    toolText.innerText = t;

    container.appendChild(toolImg);
    tool.appendChild(container);
    tool.appendChild(toolText);

    toolsList.appendChild(tool);
  });

  cardBody.appendChild(toolsList);

  const projectName = document.createElement("p");
  projectName.classList.add("card__project-name");
  projectName.innerText = name.replaceAll("-", " ").replace("bfmc", "");

  cardBody.appendChild(projectName);

  return cardBody;
};

const buildCardElement = (project) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.appendChild(buildScreenShotContainer(project.name));
  card.appendChild(buildCardBody(project.name, project.tools));

  const cardActions = document.createElement("div");
  cardActions.classList.add("card__actions");

  const anchorView = document.createElement("a");
  anchorView.classList.add("card__btn");
  anchorView.classList.add("card__btn--secondary");
  anchorView.setAttribute("target", "__blank");
  anchorView.setAttribute("href", `./${project.name}/index.html`);

  const anchorViewText = document.createElement("span");
  anchorViewText.classList.add("card__action-text");
  anchorViewText.innerText = "Preview Site";

  const viewIcon = document.createElement("i");
  viewIcon.classList.add("far");
  viewIcon.classList.add("fa-eye");

  anchorView.appendChild(anchorViewText);
  anchorView.appendChild(viewIcon);

  const anchorGitHub = document.createElement("a");
  anchorGitHub.classList.add("card__btn");
  anchorGitHub.classList.add("card__btn--primary");
  anchorGitHub.setAttribute("target", "__blank");
  anchorGitHub.setAttribute(
    "href",
    `https://github.com/Bibars-Shouk/frontend-mentor-challenges/tree/main/${project.name}`
  );

  const anchorGitHubText = document.createElement("span");
  anchorGitHubText.classList.add("card__action-text");
  anchorGitHubText.innerText = "View Code";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  anchorGitHub.appendChild(anchorGitHubText);
  anchorGitHub.appendChild(githubIcon);

  cardActions.appendChild(anchorGitHub);
  cardActions.appendChild(anchorView);

  card.appendChild(cardActions);

  return card;
};

projects.forEach((project) => {
  container.appendChild(buildCardElement(project));
});
