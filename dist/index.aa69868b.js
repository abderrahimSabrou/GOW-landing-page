const barsMenu = document.querySelector(".bars");
const mobaMenu = document.querySelector(".moba-navbar");
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
// FAQs Section
const faq = document.getElementsByClassName("faq-page");
// Function to handle button click
function handleButtonClick(content, button) {
    // Arrays to store all buttons and content sections
    const buttons = [
        fansBtn,
        fatherBtn,
        combatBtn,
        expBtn,
        uniBtn,
        creatBtn,
        scoreBtn
    ];
    const contents = [
        fanContent,
        fatherContent,
        combatContent,
        expContent,
        uniContent,
        createContent,
        scoreContent
    ];
    // Loop through all buttons and contents
    for(let i = 0; i < buttons.length; i++){
        if (buttons[i] === button) {
            // Highlight the clicked button
            button.style.color = "#fff";
            button.style.backgroundColor = "#0059ec";
        } else {
            // Reset other buttons
            buttons[i].style.color = "";
            buttons[i].style.backgroundColor = "";
        }
        // Hide other content sections
        contents[i].classList.add("opacity");
    }
    // Show the selected content section
    content.classList.remove("opacity");
}
// Event listener for the menu button
barsMenu.addEventListener("click", ()=>{
    // Toggle the mobile menu visibility
    mobaMenu.classList.toggle("hide");
// Hide the mobile menu
});
// Add click event listeners to menu links to hide the menu
const menuLinks = document.querySelectorAll(".nav-menu-moba a");
menuLinks.forEach((link)=>{
    link.addEventListener("click", function() {
        mobaMenu.classList.add("hide");
    });
});
// Event listeners for content buttons
fansBtn.addEventListener("click", ()=>{
    // Handle click for the "Fans" button
    handleButtonClick(fanContent, fansBtn);
});
fatherBtn.addEventListener("click", ()=>{
    // Handle click for the "Father" button
    handleButtonClick(fatherContent, fatherBtn);
});
combatBtn.addEventListener("click", ()=>{
    // Handle click for the "Combat" button
    handleButtonClick(combatContent, combatBtn);
});
expBtn.addEventListener("click", ()=>{
    // Handle click for the "Exploration" button
    handleButtonClick(expContent, expBtn);
});
uniBtn.addEventListener("click", ()=>{
    // Handle click for the "Universe" button
    handleButtonClick(uniContent, uniBtn);
});
creatBtn.addEventListener("click", ()=>{
    // Handle click for the "Creatures" button
    handleButtonClick(createContent, creatBtn);
});
scoreBtn.addEventListener("click", ()=>{
    // Handle click for the "Score" button
    handleButtonClick(scoreContent, scoreBtn);
});
// Event listeners for FAQs
const faqButtons = document.querySelectorAll(".faq-page");
faqButtons.forEach((button)=>{
    button.addEventListener("click", function() {
        // Toggle the "active" class and display the associated content
        this.classList.toggle("active");
        const body = this.nextElementSibling;
        body.style.display = body.style.display === "block" ? "none" : "block";
    });
});

//# sourceMappingURL=index.aa69868b.js.map
