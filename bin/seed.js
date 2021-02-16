const mongoose = require("mongoose");
const dbName = "coffee-and-books";

const Place = require("../models/place.model");

mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const bookstores = [
  {
    name: "booksbooks",
    type: "bookstore"
  }
];
Place.create(bookstores)
  .then(() => mongoose.connection.close())
  .catch((err) => console.log(`Following error occured: \n ${err}`));
