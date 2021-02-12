const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  nickname:{
    type: String, 
    required:true,
    unique:true,
    trim:true
  },
  password:{
    type: String,
    required: true,
  },
  avatar:{   ///pendiente por aclarar
  },
  watchmovies:{
   type:[String]
  },
  pendingmovies:{
    type: [String]
  }
}, {
    timestamps: true
  })


module.exports = mongoose.model('User', userSchema)