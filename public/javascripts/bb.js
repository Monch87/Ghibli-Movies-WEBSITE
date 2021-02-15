let inputText = "";
const ghibiAPi = new GhibliApi();
document.querySelector(".search-bar").onkeydown = (e) => {
  e.key === "Backspace"
    ? (inputText = inputText.slice(0, -1))
    : (inputText += e.key);
  searchAPI(inputText);
  //TODO:
  // Gestionar X de borrar input en el formulario
};

function searchAPI(searchInput) {
  ghibiAPi
    .getFilms()
    .then((response) => {
      const filmsTitle = response.data.map((movie) => movie.title);
      matchFilm(filmsTitle, searchInput);
    })
    .catch((err) => console.log(err));
}

function matchFilm(films, searchInput) {
  const regexp = new RegExp(searchInput, "gi");
  const matchFilms = films.filter((film) => regexp.test(film));
  console.log(matchFilms);
}
