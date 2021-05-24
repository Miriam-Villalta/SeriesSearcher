/*if (localStorage.getItem("films") === null) {
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Han llegado");
      console.log(data);
      localStorage.setItem("films", JSON.stringify(data));

      renderFilms(data);
    });
} else {
  const data = JSON.parse(localStorage.getItem("films"));
  renderFilms(data);
}*/
