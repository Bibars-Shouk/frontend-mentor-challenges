const questions = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const faqList = document.querySelector(".faq-list");

const buildFAQElement = (question, answer) => {
  const listItem = document.createElement("li");
  listItem.classList.add("faq-container");

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("faq-question");

  const questionElement = document.createElement("h2");
  questionElement.innerText = question;

  const arrowIcon = document.createElement("img");
  arrowIcon.setAttribute("src", "./images/icon-arrow-down.svg");
  arrowIcon.setAttribute("alt", "arrow down icon");

  buttonElement.appendChild(questionElement);
  buttonElement.appendChild(arrowIcon);

  buttonElement.addEventListener("click", (e) => {
    buttonElement.classList.toggle("open");
  });

  listItem.appendChild(buttonElement);

  const answerElement = document.createElement("p");
  answerElement.classList.add("faq-answer");
  answerElement.innerText = answer;

  listItem.appendChild(answerElement);

  return listItem;
};

questions.forEach((item) => {
  faqList.appendChild(buildFAQElement(item.question, item.answer));
});
