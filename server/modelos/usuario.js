const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

var ModeloDeUsuario = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 50,
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
    required: true,
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
    required: true
  },

  apellido: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true
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
    acceso: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }]
});

ModeloDeUsuario.methods.toJSON = function() {
  var usuario = this;
  var objetoUsuario = usuario.toObject();
  var camposPermitidos = ['_id', 'email', 'username', 'nombre', 'apellido', 'fechaDeNacimiento'];

  return _.pick(objetoUsuario, camposPermitidos);
};

ModeloDeUsuario.methods.generarTokenDeAutenticacion = function() {
  // El .methods permite crear métodos que pueden ser utilizados
  // en los objetos de la clase Usuario
  var usuario = this;
  var acceso = 'auth';
  var token = jwt.sign({_id: usuario._id.toHexString(), acceso}, 'abc123').toString();

  usuario.tokens.push({acceso, token});

  return usuario.save().then(() => {
    return token;
  });
};


var Usuario = mongoose.model('Usuario', ModeloDeUsuario);

module.exports = {Usuario};
