const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    movie: {
      type: mongoose.Types.ObjectId,
      ref: "Movie"
    },
    rating: Number,
    comment: String,
    editDate: Date
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Rating", RatingSchema);
