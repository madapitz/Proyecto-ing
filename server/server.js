const express = require('express');
const validator = require('validator');
const bodyParser = require('body-parser');

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

app.listen(3000, () => {
  console.log('El servidor está en el puerto 3000');
});
