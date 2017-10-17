const express = require('express');
const validator = require('validator');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Tarea} = require('./modelos/tarea');
var {Usuario} = require('./modelos/usuario');

var app = express();

app.use(bodyParser.json());

app.post('/tareas', (req, res) => {
  var tarea = new Tarea({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  });

  tarea.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
});


// POST guarda el usuario en la base de datos
app.post('/usuarios', (req, res) => {
  var camposPermitidos = ['email', 'password', 'username', 'nombre', 'apellido', 'fechaDeNacimiento'];
  // camposPermitidos es utilizada para incrementar la seguridad de la aplicación
  // de esta manera los datos como token o _id no son visibles en la parte de cliente.
  var body = _.pick(req.body, camposPermitidos);
  var usuario = new Usuario(body);

  usuario.save().then((usuario) => {
    res.send(usuario)
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('El servidor está en el puerto 3000');
});

module.exports = {app};
