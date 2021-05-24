const filmsFav = document.querySelector(".js-favorite");
let newFav = [];

function addListenersToCardsFilms() {
  const allFilms = document.querySelectorAll(".js-cards");
  console.log(allFilms);
  for (const card of allFilms) {
    card.addEventListener("click", handlerFavorite);
  }
}

function handlerFavorite(event) {
  const userClicked = event.currentTarget;
  let idTarget = event.currentTarget.id;
  const idSearch = newFav.find((element) => element.id === parseInt(idTarget));

  if (idSearch == null) {
    userClicked.classList.add("select-fav"); //o toggle
    userClicked.classList.remove("films-each__container");
    const idShows = dataFilms.find(
      (element) => element.id === parseInt(idTarget)
    );

    newFav.push(idShows);
  } else {
    userClicked.classList.remove("select-fav");
    userClicked.classList.add("films-each__container");
    const idM = dataFilms.indexOf(idSearch);
    newFav.splice(idM, 1);
  }

  console.log(newFav);

  //pintar contenido en pelis favoritas
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

  filmsFav.innerHTML = filmsFav + filmListContent; //es el que pinta el contenido
}

//1- meter solo una peli, no todo el listado
//2- titulo pelis favoritas
//3- localStorage
//4- revisar busquedas

/*if () {
  function paintFav() {
    renderFilms(data);
  }
}*/
//console.log(paintFav);

//cuando haga click en li serie, cambia de color y se añade al div de favoritos (array)

//tienen que verse aunque se realice otra buqueda
