const mainMenu = document.querySelector("#drop-down-navigation-menu");
const menuArrows = document.querySelector(".nav > li:nth-child(2)");
const menuArrowActive = document.querySelector("#menu-arrow");
const loadFile = document.querySelector("#load-file");
const inputFile = document.querySelector("#input-file");
const inputFileName = document.querySelector("#input-file-name");

menuArrows.onclick = () => {
  mainMenu.classList.toggle("drop-down-navigation-menu-hidden");
  mainMenu.classList.toggle("drop-down-navigation-menu-visible");
  menuArrowActive.classList.toggle("menu-arrow");
};

inputFile.onchange = function (e) {
  const fileName =
    this.files[0].name.length > 40
      ? this.files[0].name.slice(0, 35) + "..." + this.files[0].name.slice(-5)
      : this.files[0].name;

  inputFileName.innerHTML = "Будет загружен файл: <br>" + fileName;
};
