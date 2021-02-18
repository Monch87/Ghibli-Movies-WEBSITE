const axios = require("axios");

class GhibliApi {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ghibliapi.herokuapp.com"
    });
  }
  
  functiongetAllFilms = () => {return this.api.get("/films")}
  getFilmById = (id ) => {return this.api.get(`/films/${id}`)}
}

module.exports = GhibliApi;
