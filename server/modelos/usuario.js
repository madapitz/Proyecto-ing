const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var Usuario = mongoose.model('Usuario', {
  email: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 30,
    required: true,
    unique: true,
    validate: {
      isAsync: false,
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },

  username: {
    type: String,
    minlength: 1,
    maxlength: 20,
    required: false,
    unique: true
  },

  password: {
    type: String,
    minlength: 8,
    maxlength: 50,
    required: true,
    validate: {
      isAsync: false,
      validator: validator.isAlphanumeric,
    }
  },

  nombre: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: false
  },

  apellido: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: false
  },

  fechaDeNacimiento: {
    type: Date,
    required: false
  },

  activo: {
    type: Boolean,
    required: true,
    default: true
  },

  fechaDeRegistro: {
    type: Date,
    required: true,
    default: Date.now
  },

  formaDeRegistro: {
    type: String,
    required: false
  },

  tokens: [{
    access: {
      type: String,
      require: false
    },
    token: {
      type: String,
      require: false
    }
  }]
});

// var Usuario = mongoose.model('User', ModeloDelUsuario);

module.exports = {Usuario};
