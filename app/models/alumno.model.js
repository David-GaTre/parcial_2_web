const sql = require('./db')

const Alumno = function(alumno) {
    this.Id = alumno.Id;
    this.Nombre = alumno.Nombre;
    this.Identificador = alumno.Identificador;
    this.Email = alumno.Email;
    this.Carrera = alumno.Carrera;
}

Alumno.getAll = (result) => {
    let query = "SELECT * FROM Alumnos;";
    sql.query(query, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }
        console.log("Alumnos: ", res);
        result(null, res);
    });
    };

Alumno.findById = (id, result) => {
    sql.query(`SELECT * FROM Alumnos where id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Alumno: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

Alumno.create = (newAlumno, result) => {
    sql.query("INSERT INTO Alumnos SET ?", newAlumno, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Created Alumno: ", { id: res.insertId, ...newAlumno });
        result(null, { id: res.insertId, ...newAlumno });
    });
};

Alumno.remove = (id, result) => {
    sql.query("DELETE FROM Alumnos WHERE Id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Deleted Alumno with id: ", id);
      result(null, res);
    });
};

Alumno.updateById = (id, alumno, result) => {
    sql.query(
      "UPDATE Alumnos SET Nombre = ?, Identificador = ?, Email = ?, Carrera = ? WHERE Id = ?",
      [alumno.Nombre, alumno.Identificador, alumno.Email, alumno.Carrera, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("Updated Alumno: ", { id: id, ...alumno });
        result(null, { id: id, ...alumno });
      }
    );
};

module.exports = Alumno