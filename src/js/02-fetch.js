/* eslint-disable strict */
const filmList = document.querySelector(".js-films");

fetch("http://api.tvmaze.com/search/shows?q=girls")
  .then((response) => response.json())
  .then((data) => {
    console.log("Han llegado");
    console.log(data);
    const dataSearch = data[0].show;
    //console.log(dataSearch);
    renderFilms(dataSearch);
  });

function renderFilms(data) {
  filmList.innerHTML = "";

  let filmListContent = "";
  for (let i = 0; i < data.length; i++) {
    filmListContent += `
         <li class="films-each">
            <div class="films-each__container">
              <img src="${dataSearch.image.medium[i]}" alt="" class="films-each__container--photo">
              <h3 class="films-each__container--text">${dataSearch.name[i]}</h3>
            </div>
         </li>`;
  }

  filmList.innerHTML = filmListContent; //es el que pinta el contenido
}

console.log("siguiente linea");
console.log(filmList);
