const nav = document.querySelector(".Nav");
const innerContainer = document.querySelector(".NavContainer");
const navButton = document.querySelector(".Nav__Button");
const icons = document.querySelector(".NavIconsContainer");


navButton.addEventListener("click", () => {
    nav.classList.toggle("active");
    navButton.classList.toggle("activeButton");
    innerContainer.classList.toggle("hidden");
    icons.classList.toggle("hidden");
})