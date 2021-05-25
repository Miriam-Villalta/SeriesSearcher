if (localStorage.getItem("films") === null) {
} else {
  newFav = JSON.parse(localStorage.getItem("films"));
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
    '<h3 class="favorite__title">Pelis favoritas</h3>' + filmListContent; //es el que pinta el contenido;
}
