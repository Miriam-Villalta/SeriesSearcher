const filmsFav = document.querySelector(".js-favorite");
let newFav = [];

function addListenersToCardsFilms() {
  const allFilms = document.querySelectorAll(".js-cards");
  for (const card of allFilms) {
    card.addEventListener("click", handlerFavorite);
  }
}

function handlerFavorite(event) {
  const userClicked = event.currentTarget;
  let idTarget = event.currentTarget.id;
  const idSearch = newFav.find((element) => element.id === parseInt(idTarget));

  if (idSearch == null) {
    userClicked.classList.add("select-fav");
    userClicked.classList.remove("films-each__container");
    const idShows = dataFilms.find(
      (element) => element.id === parseInt(idTarget)
    );

    newFav.push(idShows);
  } else {
    userClicked.classList.remove("select-fav");
    userClicked.classList.add("films-each__container");
    const idM = newFav.indexOf(idSearch);
    newFav.splice(idM, 1);
  }
  localStorage.setItem("films", JSON.stringify(newFav)); //dentro newFav

  //pintar contenido en pelis favoritas
  let newImage = "";
  let filmListContent = "";
  for (let i = 0; i < newFav.length; i++) {
    if (newFav[i].image === null) {
      newImage = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    } else {
      newImage = newFav[i].image.medium;
    }
    filmListContent += `
         <li id ="${newFav[i].id}" class="films-each js-cards">
            <div class="films-each__container">
              <img src="${newImage}" alt="" class="films-each__container--photo">
              <h3 class="films-each__container--text">${newFav[i].name}</h3>
            </div>
         </li>`;
  }

  filmsFav.innerHTML =
    '<h3 class="favorite__title">Pelis favoritas</h3>' + filmListContent; //es el que pinta el contenido
}
