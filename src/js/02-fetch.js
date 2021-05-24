"use strict";
const filmList = document.querySelector(".js-films");
let inputValue = document.querySelector(".js-search"); //input texto
const searchBtn = document.querySelector(".js-btn"); //boton
searchBtn.addEventListener("click", addListenerSearchClick);

function addListenerSearchClick() {
  inputValue = inputValue.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Han llegado");
      console.log(data);

      renderFilms(data);
    });
}

function renderFilms(data) {
  //pintar elementos lista
  filmList.innerHTML = "";
  let newImage = "";
  let filmListContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].show.image === null) {
      newImage = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    } else {
      newImage = data[i].show.image.medium;
    }
    filmListContent += `
         <li class="films-each js-cards">
            <div class="films-each__container">
              <img src="${newImage}" alt="" class="films-each__container--photo">
              <h3 class="films-each__container--text">${data[i].show.name}</h3>
            </div>
         </li>`;
  }

  filmList.innerHTML = filmListContent; //es el que pinta el contenido
  addListenersToCardsFilms(); //favorito
}

console.log("siguiente linea");
console.log(filmList);
