const phones = {
  Москва: "+7 (499) 350-97-60",
  "Санкт-Петербург": "+7 (500) 500-97-60",
  Белгород: "+7 (200) 200-44-60",
  "Ростов-на-Дону": "+7 (330) 540-44-60",
};

const mainMenu = document.querySelector("#drop-down-navigation-menu");
const menuArrows = document.querySelector(".nav > li:nth-child(2)");
const menuArrowActive = document.querySelector("#menu-arrow");
const loadFile = document.querySelector("#load-file");
const inputFile = document.querySelector("#input-file");
const inputFileName = document.querySelector("#input-file-name");
const citysPhonesField = document.querySelector(".citys-phones");
const citysPhonesButton = document.querySelector("#citys-phones-button");
const citysPhones = document.querySelector("#citys-phones");
const ownerCityPhone = document.querySelector("#owner-city-phone");

let htmlCitys = "<ul>";

console.log(citysPhones);
for (let item in phones) htmlCitys += `<li>${item}</li>`;

citysPhones.innerHTML = htmlCitys + "</ul";

citysPhonesButton.onclick = (e) => {
  e.stopPropagation();
  togglePhones();

  document.onclick = (e) => {
    const target = e.target;
    const itsPhones = target == citysPhones || citysPhones.contains(target);

    if (itsPhones) {
      citysPhonesButton.innerHTML = target.innerHTML;
      ownerCityPhone.innerHTML = phones[target.innerHTML];
    }
    togglePhones();
  };
};

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

function togglePhones() {
  citysPhones.classList.toggle("visible");
  citysPhonesField.classList.toggle("visible");
}
