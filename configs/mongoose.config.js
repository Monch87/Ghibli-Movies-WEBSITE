const mongoose = require("mongoose");

mongoose
  .connect(`mongodb+srv://admin:admin@cluster0.dtta7.mongodb.net/${process.env.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

module.exports = mongoose;
