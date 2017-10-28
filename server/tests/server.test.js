const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Tarea} = require('./../modelos/tarea');
const {Usuario} = require('./../modelos/usuario');

beforeEach((done) => {
  Tarea.remove({}).then(() => done());
})

describe('ENVIAR /tarea', () => {
  it('Debería crear una nueva tarea', (done) => {
    var titulo = 'Prueba';
    var descripcion = 'Esto es una prueba';

    request(app)
      .post('/tareas')
      .send({
        titulo,
        descripcion
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.titulo).toBe(titulo)
      })
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        Tarea.find().then((tareas) => {
          expect(tareas.length).toBe(1);
          expect(tareas[0].titulo).toBe(titulo);
          done();
        }).catch((e) => done(e));
      });
  });

  it('El título solo debe contener caracteres Alfanuméricos', (done) => {
    var titulo = 'Otra prueba';
    var descripcion = 'Esto es una prueba';

    request(app)
      .post('/tareas')
      .send({
        titulo,
        descripcion
      })
      .expect(400)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        Tarea.find().then((tareas) => {
          expect(tareas.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });

  it('El título no puede estar vacío', (done) => {
    var titulo = '';
    var descripcion = 'Esto es una prueba';

    request(app)
      .post('/tareas')
      .send({
        titulo,
        descripcion
      })
      .expect(400)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        Tarea.find().then((tareas) => {
          expect(tareas.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });

  it('El título no puede contener más de 255 caracteres', (done) => {
    var titulo = '12345678901234567890123456789012345678901234567890' +
    '1234567890123456789012345678901234567890123456789012345678901234567890' +
    '1234567890123456789012345678901234567890123456789012345678901234567890' +
    '1234567890123456789012345678901234567890123456789012345678901234567890';
    var descripcion = 'Esto es una prueba';

    request(app)
      .post('/tareas')
      .send({
        titulo,
        descripcion
      })
      .expect(400)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        Tarea.find().then((tareas) => {
          expect(tareas.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
