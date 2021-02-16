const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    api_id: {
      type: String,
      required: true,
      unique: true
    },
    image: String,
    ratings: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Rating" //TBD
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
