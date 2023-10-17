const barsMenu = document.querySelector(".bars");
const mobaMenu = document.querySelector(".moba-navbar");

barsMenu.addEventListener("click", () => {
  mobaMenu.classList.toggle("hide");
});

// Content Section
// Select Buttons for contents
const fansBtn = document.querySelector(".fanstatic-btn");
const fatherBtn = document.querySelector(".father-btn");
const combatBtn = document.querySelector(".combat-btn");
const expBtn = document.querySelector(".exploration-btn");
const uniBtn = document.querySelector(".universe-btn");
const creatBtn = document.querySelector(".creatures-btn");
const scoreBtn = document.querySelector(".score-btn");

// select the content container
const fanContent = document.querySelector(".fanstatic-content");
const fatherContent = document.querySelector(".father-content");
const combatContent = document.querySelector(".combat-content");
const expContent = document.querySelector(".exploration-content");
const uniContent = document.querySelector(".universe-content");
const createContent = document.querySelector(".creatures-content");
const scoreContent = document.querySelector(".score-content");

// Add click functionality on the User click on the buttons
fansBtn.addEventListener("click", () => {
  fanContent.classList.remove("opacity");
  fansBtn.style.color = "#fff";
  fansBtn.style.backgroundColor = "#0059ec";
  fatherBtn.style.color = "";
  fatherBtn.style.backgroundColor = "";
  combatBtn.style.color = "";
  combatBtn.style.backgroundColor = "";
  expBtn.style.color = "";
  expBtn.style.backgroundColor = "";
  uniBtn.style.color = "";
  uniBtn.style.backgroundColor = "";
  creatBtn.style.color = "";
  creatBtn.style.backgroundColor = "";
  scoreBtn.style.color = "";
  scoreBtn.style.backgroundColor = "";
  fatherContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  expContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

fatherBtn.addEventListener("click", () => {
  fatherContent.classList.remove("opacity");
  fansBtn.style.color = "";
  fansBtn.style.backgroundColor = "";
  fatherBtn.style.color = "#fff";
  fatherBtn.style.backgroundColor = "#0059ec";
  combatBtn.style.color = "";
  combatBtn.style.backgroundColor = "";
  expBtn.style.color = "";
  expBtn.style.backgroundColor = "";
  uniBtn.style.color = "";
  uniBtn.style.backgroundColor = "";
  creatBtn.style.color = "";
  creatBtn.style.backgroundColor = "";
  scoreBtn.style.color = "";
  scoreBtn.style.backgroundColor = "";
  fansBtn.style.color = "";
  fansBtn.style.backgroundColor = "";
  fatherContent.classList.remove("opacity");
  fanContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  expContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

combatBtn.addEventListener("click", () => {
  combatContent.classList.remove("opacity");
  fansBtn.style.color = "";
  fansBtn.style.backgroundColor = "";
  fatherBtn.style.color = "";
  fatherBtn.style.backgroundColor = "";
  combatBtn.style.color = "#fff";
  combatBtn.style.backgroundColor = "#0059ec";
  expBtn.style.color = "";
  expBtn.style.backgroundColor = "";
  uniBtn.style.color = "";
  uniBtn.style.backgroundColor = "";
  creatBtn.style.color = "";
  creatBtn.style.backgroundColor = "";
  scoreBtn.style.color = "";
  scoreBtn.style.backgroundColor = "";
  fatherContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  expContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

expBtn.addEventListener("click", () => {
  expContent.classList.remove("opacity");
  fansBtn.style.color = "";
  fansBtn.style.backgroundColor = "";
  fatherBtn.style.color = "";
  fatherBtn.style.backgroundColor = "";
  combatBtn.style.color = "";
  combatBtn.style.backgroundColor = "";
  expBtn.style.color = "#fff";
  expBtn.style.backgroundColor = "#0059ec";
  uniBtn.style.color = "";
  uniBtn.style.backgroundColor = "";
  creatBtn.style.color = "";
  creatBtn.style.backgroundColor = "";
  scoreBtn.style.color = "";
  scoreBtn.style.backgroundColor = "";
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

uniBtn.addEventListener("click", () => {
  uniContent.classList.remove("opacity");
  fansBtn.style.color = "";
  fansBtn.style.backgroundColor = "";
  fatherBtn.style.color = "";
  fatherBtn.style.backgroundColor = "";
  combatBtn.style.color = "";
  combatBtn.style.backgroundColor = "";
  expBtn.style.color = "";
  expBtn.style.backgroundColor = "";
  uniBtn.style.color = "#fff";
  uniBtn.style.backgroundColor = "#0059ec";
  creatBtn.style.color = "";
  creatBtn.style.backgroundColor = "";
  scoreBtn.style.color = "";
  scoreBtn.style.backgroundColor = "";
  fanContent.classList.add("opacity");
  expContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

creatBtn.addEventListener("click", () => {
  createContent.classList.remove("opacity");
  fansBtn.style.color = "";
  fansBtn.style.backgroundColor = "";
  fatherBtn.style.color = "";
  fatherBtn.style.backgroundColor = "";
  combatBtn.style.color = "";
  combatBtn.style.backgroundColor = "";
  expBtn.style.color = "";
  expBtn.style.backgroundColor = "";
  uniBtn.style.color = "";
  uniBtn.style.backgroundColor = "";
  creatBtn.style.color = "#fff";
  creatBtn.style.backgroundColor = "#0059ec";
  scoreBtn.style.color = "";
  scoreBtn.style.backgroundColor = "";
  uniContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  expContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

scoreBtn.addEventListener("click", () => {
  scoreContent.classList.remove("opacity");
  fansBtn.style.color = "";
  fansBtn.style.backgroundColor = "";
  fatherBtn.style.color = "";
  fatherBtn.style.backgroundColor = "";
  combatBtn.style.color = "";
  combatBtn.style.backgroundColor = "";
  expBtn.style.color = "";
  expBtn.style.backgroundColor = "";
  uniBtn.style.color = "";
  uniBtn.style.backgroundColor = "";
  creatBtn.style.color = "";
  creatBtn.style.backgroundColor = "";
  scoreBtn.style.color = "#fff";
  scoreBtn.style.backgroundColor = "#0059ec";
  createContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  expContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
});

// FAQs Section
const faq = document.getElementsByClassName("faq-page");

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}
