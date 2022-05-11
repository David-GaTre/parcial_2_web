const Alumno = require('../models/alumno.model')

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const alumno = new Alumno({
    Id : alumno.Id,
    Nombre : alumno.Nombre,
    Identificador : alumno.Identificador,
    Email : alumno.Email,
    Carrera : alumno.Carrera
  });


  Alumno.create(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Alumno."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
    Alumno.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving info."
        });
      else res.send(data);
    });
};

exports.findById = (req, res) => {
  Alumno.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumno with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Alumno with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Alumno.updateById(
    req.params.id,
    new Alumno(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Alumno with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Alumno with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Alumno.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumno with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Alumno with id " + req.params.id
        });
      }
    } else res.send({ message: `Alumno was deleted successfully!` });
  });
};