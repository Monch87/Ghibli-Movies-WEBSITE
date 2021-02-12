const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usermoviesSchema = new Schema({
  name: String,
  status: {
    type: String,
    enum: ['Watched', 'Pending']
  },
  rating: Number,
  comment: String,
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
}, {
  timestamps: true
})


module.exports = mongoose.model('Usermovies', usermoviesSchema)