class PlacesAPIHandler {
  constructor() {
    this.app = axios.create({
      baseURL: "https://maps.googleapis.com/maps/api/place/findplacefromtext"
    });
  }

  getPlaces = () => {
    return this.app.get(
      "/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDkLUfGKA0xaOhsz1bMdcheje5t-59yRAY"
    );
  };
}

const placesAPI = new PlacesAPIHandler();
console.log(placesAPI);

placesAPI
  .getPlaces()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
