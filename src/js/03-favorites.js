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
  if (event) {
    userClicked.classList.add("select-fav"); //o toggle
    userClicked.classList.remove("films-each__container");
  }

  const newItem = newFav.push(renderFilms(data));

  console.log(newItem);
}

filmsFav.innerHTML = newItem;

/*if () {
  function paintFav() {
    renderFilms(data);
  }
}*/
//console.log(paintFav);

//cuando haga click en li serie, cambia de color y se añade al div de favoritos (array)

//tienen que verse aunque se realice otra buqueda
