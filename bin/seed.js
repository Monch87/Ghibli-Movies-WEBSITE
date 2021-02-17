const mongoose = require("mongoose");
const dbName = "ghibliproject";

const Movie = require("../models/movie.model");

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.dtta7.mongodb.net/${dbName}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const movies = [
  {
    api_id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    image:
      "https://res.cloudinary.com/dcprb2mtk/image/upload/v1613472577/ghibli/castle-sky_r26ayx.jpg",
    ratings: []
  },
  {
    api_id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    image:
      "https://res.cloudinary.com/dcprb2mtk/image/upload/v1613485230/ghibli/moving-castle_m7emqo.jpg",
    ratings: []
  }
];

Movie.create(movies)
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`));
