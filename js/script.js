const phones = {
  Москва: "+7 (499) 350-97-60",
  "Санкт-Петербург": "+7 (500) 500-97-60",
  Белгород: "+7 (200) 200-44-60",
  "Ростов-на-Дону": "+7 (330) 540-44-60",
};

const mainMenu = qS("#drop-down-navigation-menu");
const menuArrows = qS(".nav > li:nth-child(2)");
const menuArrowActive = qS("#menu-arrow");
const loadFile = qS("#load-file");
const inputFile = qS("#input-file");
const inputFileName = qS("#input-file-name");
const citysPhonesField = qS(".citys-phones");
const citysPhonesButton = qS("#citys-phones-button");
const citysPhones = qS("#citys-phones");
const ownerCityPhone = qS("#owner-city-phone");

let htmlCitys = "<ul>";

for (let item in phones) {
  htmlCitys += `<li>${item}</li>`;
}

citysPhones.innerHTML = htmlCitys + "</ul";

citysPhonesButton.onclick = () => {
  togglePhones();

  citysPhones.onclick = (e) => {
    //выбор города
    citysPhonesButton.innerHTML = e.target.innerHTML;
    ownerCityPhone.innerHTML = phones[e.target.innerHTML];
    togglePhones();
  };
};

menuArrows.onclick = (e) => {
  toggleMenu();
};

document.onclick = (e) => {
  //закрытие любого меню по клике вне области меню
  const target = e.target;

  const itsPhones =
    target == citysPhones ||
    citysPhones.contains(target) ||
    target == citysPhonesButton;

  const itsMenu =
    target == mainMenu ||
    mainMenu.contains(target) ||
    menuArrows.contains(target);

  if (!itsPhones && citysPhones.classList.contains("visible")) {
    togglePhones();
  }
  if (
    !itsMenu &&
    mainMenu.classList.contains("drop-down-navigation-menu-visible")
  ) {
    toggleMenu();
  }
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

function togglePhones() {
  citysPhones.classList.toggle("visible");
  citysPhonesField.classList.toggle("visible");
}

function qS(properties) {
  return document.querySelector(properties);
}
