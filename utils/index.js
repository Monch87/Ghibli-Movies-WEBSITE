module.exports = {
  matchFilm: (films, searchInput) => {
    const regexp = new RegExp(searchInput, "gi")
    const matchFilms = films.filter(film => regexp.test(film.title))
    return matchFilms
  },
  isUser: user => user.role.includes("USER"),
}
