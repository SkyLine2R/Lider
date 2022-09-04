const mainMenu = document.querySelector("#drop-down-navigation-menu");
const menuArrows = document.querySelector(".nav > li:nth-child(2)");
const menuArrowActive = document.querySelector("#menu-arrow");
/* menuArrows.addEventListener("click", (event) => {
  mainMenu.style.visibility == "visible"
    ? (mainMenu.style.visibility = "hidden")
    : (mainMenu.style.visibility = "visible");
  event.preventDefault();
}); */

menuArrows.onclick = () => {
  mainMenu.classList.toggle("drop-down-navigation-menu-hidden");
  mainMenu.classList.toggle("drop-down-navigation-menu-visible");
  menuArrowActive.classList.toggle("menu-arrow");

  /*   mainMenu.className == "drop-down-navigation-menu"
    ? (mainMenu.className = "drop-down-navigation-menu-hidden")
    : (mainMenu.className = "drop-down-navigation-menu"); */
};
//alert mainMenu;
