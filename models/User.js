const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Gif = require('./Giphy');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  gifs: [{
    type: Schema.Types.ObjectId,
    ref: 'Gif'
  }]
});

module.exports = mongoose.model('User', UserSchema);