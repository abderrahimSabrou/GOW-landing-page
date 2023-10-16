const barsMenu = document.querySelector(".bars");
const mobaMenu = document.querySelector(".moba-navbar");

barsMenu.addEventListener("click", () => {
  mobaMenu.classList.toggle("hide");
});
