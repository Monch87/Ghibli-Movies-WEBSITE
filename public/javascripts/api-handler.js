class GhibliApi {
  constructor() {
    this.app = axios.create({
      baseURL: `https://ghibliapi.herokuapp.com/films`
    });
  }

  getFilms = () => this.app.get(`/`);
}
