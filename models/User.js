const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    trim: true
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'Your Last Name'
  },
  userEmail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  birthday: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    default: ''
  },
  favoriteQuote: {
    type: String,
    default: 'When you have a dream, you have to grab it and never let go!'
  },
  country: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'Your Country'
  }
});

module.exports = mongoose.model('User', UserSchema);
