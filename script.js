const container = document.querySelector(".container");

const buildScreenShotContainer = (name, tools) => {
  const solutionSsContainer = document.createElement("div");
  solutionSsContainer.classList.add("solution-ss-container");

  const screenShot = document.createElement("img");
  screenShot.setAttribute("src", `./${name}/${name}.png`);
  screenShot.setAttribute("loading", "lazy");
  screenShot.setAttribute(
    "alt",
    `screenshot of${name.replaceAll("-", " ").replace("bfmc", "")} solution`
  );

  const blurBg = document.createElement("div");
  blurBg.classList.add("blur-bg");

  const solutionTools = document.createElement("div");
  solutionTools.classList.add("solution-tools");

  tools.forEach((tool) => {
    const toolElement = document.createElement("h3");
    toolElement.classList.add(`tool__${tool.toLowerCase()}`);
    toolElement.innerText = tool;

    solutionTools.appendChild(toolElement);
  });

  blurBg.appendChild(solutionTools);

  solutionSsContainer.appendChild(screenShot);
  solutionSsContainer.appendChild(blurBg);

  return solutionSsContainer;
};

const buildCardBody = (name) => {
  const cardBody = document.createElement("div");
  cardBody.classList.add("challenge-card-body");

  const bodyHeader = document.createElement("h1");
  bodyHeader.innerText = name.replaceAll("-", " ").replace("bfmc", "");

  const anchorView = document.createElement("a");
  anchorView.setAttribute("target", "__blank");
  anchorView.setAttribute("href", `./${name}/index.html`);
  anchorView.innerText = "View Live";

  const viewIcon = document.createElement("i");
  viewIcon.classList.add("far");
  viewIcon.classList.add("fa-eye");

  anchorView.appendChild(viewIcon);

  const anchorGitHub = document.createElement("a");
  anchorGitHub.setAttribute("target", "__blank");
  anchorGitHub.setAttribute(
    "href",
    `https://github.com/Bibars-Shouk/frontend-mentor-challenges/tree/main/${name}`
  );
  anchorGitHub.innerText = "Source Code";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  anchorGitHub.appendChild(githubIcon);

  cardBody.appendChild(bodyHeader);
  cardBody.appendChild(anchorView);
  cardBody.appendChild(anchorGitHub);

  return cardBody;
};

const buildCardElement = (project) => {
  const challengeCard = document.createElement("div");
  challengeCard.classList.add("challenge-card");

  challengeCard.appendChild(
    buildScreenShotContainer(project.name, project.tools)
  );
  challengeCard.appendChild(buildCardBody(project.name));

  return challengeCard;
};

projects.forEach((project) => {
  container.appendChild(buildCardElement(project));
});
