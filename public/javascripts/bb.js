let inputText = "";
const ghibiAPi = new GhibliApi();
let filmsTitle;

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
      displayResults();
    })
    .catch((err) => console.log(err));
}

function matchFilm(films, searchInput) {
  const regexp = new RegExp(searchInput, "gi");
  const matchFilms = films.filter((film) => regexp.test(film));
  console.log(matchFilms);
}

function displayResults() {
  document.querySelector(".movies-match").style.display = "block";
}

// new autoComplete({
//   data: {
//     src: async () => {
//       const query = document.querySelector("#autoComplete").value;
//       const source = await fetch(`/api?title=${query}`);
//       const data = await source.json();
//       return data;
//     },
//     key: ["title"],
//     cache: false
//   },
//   onSelection: (feedback) => console.log(feedback)
// });
