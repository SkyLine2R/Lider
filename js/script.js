const mainMenu = document.querySelector("#drop-down-navigation-menu");
const menuArrows = document.querySelector(".nav > li:nth-child(2)");
const menuArrowActive = document.querySelector("#menu-arrow");
const loadFile = document.querySelector("#load-file");
const inputFile = document.querySelector("#input-file");
const inputFileName = document.querySelector("#input-file-name");

menuArrows.onclick = (e) => {
  e.stopPropagation();
  toggleMenu();

  document.onclick = (e) => {
    //закрытие меню по щелчку вне меню
    const target = e.target;
    const itsMenu = target == mainMenu || mainMenu.contains(target);
    if (
      !itsMenu &&
      mainMenu.classList.contains("drop-down-navigation-menu-visible")
    ) {
      e.stopPropagation();
      toggleMenu();
    }
  };
};

inputFile.onchange = function (e) {
  //Загрузка файлов в форме

  const fileName =
    this.files[0].name.length > 40
      ? this.files[0].name.slice(0, 35) + "..." + this.files[0].name.slice(-5)
      : this.files[0].name;

  inputFileName.innerHTML = "Будет загружен файл: <br>" + fileName;
};

function toggleMenu() {
  mainMenu.classList.toggle("drop-down-navigation-menu-visible");
  menuArrowActive.classList.toggle("menu-arrow-active");
}
