"use strict";
const filmList = document.querySelector(".js-films");
let inputValue = document.querySelector(".js-search"); //input texto
const searchBtn = document.querySelector(".js-btn"); //boton
searchBtn.addEventListener("click", addListenerSearchClick);
let dataFilms = [];

function addListenerSearchClick() {
  inputValue = inputValue.value;
  dataFilms = [];
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Han llegado");
      console.log(data);
      data.forEach((element) => {
        dataFilms.push(element.show);
      });
      renderFilms(dataFilms);
    });
}

function renderFilms(dataFilms) {
  //pintar elementos lista
  filmList.innerHTML = "";
  let newImage = "";
  let filmListContent = "";
  for (let i = 0; i < dataFilms.length; i++) {
    if (dataFilms[i].image === null) {
      newImage = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    } else {
      newImage = dataFilms[i].image.medium;
    }
    filmListContent += `
         <li id ="${dataFilms[i].id}" class="films-each js-cards">
            <div class="films-each__container">
              <img src="${newImage}" alt="" class="films-each__container--photo">
              <h3 class="films-each__container--text">${dataFilms[i].name}</h3>
            </div>
         </li>`;
  }

  filmList.innerHTML = filmListContent; //es el que pinta el contenido
  addListenersToCardsFilms(); //favorito
}

console.log("siguiente linea");
console.log(filmList);
