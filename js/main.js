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
  fatherContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  expContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

fatherBtn.addEventListener("click", () => {
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
  fatherContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  expContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

expBtn.addEventListener("click", () => {
  expContent.classList.remove("opacity");
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

uniBtn.addEventListener("click", () => {
  uniContent.classList.remove("opacity");
  fanContent.classList.add("opacity");
  expContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
  createContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

creatBtn.addEventListener("click", () => {
  createContent.classList.remove("opacity");
  uniContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  expContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
  scoreContent.classList.add("opacity");
});

scoreBtn.addEventListener("click", () => {
  scoreContent.classList.remove("opacity");
  createContent.classList.add("opacity");
  uniContent.classList.add("opacity");
  fanContent.classList.add("opacity");
  expContent.classList.add("opacity");
  combatContent.classList.add("opacity");
  fatherContent.classList.add("opacity");
});
