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
    avatar:{
      type:String,
      default:'https://res.cloudinary.com/dxslsbznp/image/upload/v1613491569/fantasma_byzrqv.svg'
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
