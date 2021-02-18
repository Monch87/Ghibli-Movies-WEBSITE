const axios = require("axios");

class GhibliApi {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ghibliapi.herokuapp.com"
    });
  }
  getAllFilms = () => this.api.get("/films");
  getFilmById = (id) => this.api.get(`/films/${id}`);
}

module.exports = GhibliApi;
