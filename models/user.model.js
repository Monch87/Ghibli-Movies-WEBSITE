const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      name: String,
      path: String,
      originalName: String ///pendiente por aclarar
    },
    watchedMovies: {
      type: [mongoose.Types.ObjectId],
      ref: "Movie"
    },
    pendingMovies: {
      type: [mongoose.Types.ObjectId],
      ref: "Movie"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
