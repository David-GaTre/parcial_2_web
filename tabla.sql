CREATE DATABASE parcial2_A01570231;

use parcial2_A01570231;

CREATE TABLE Alumnos (
     Id INT NOT NULL AUTO_INCREMENT,
     Nombre CHAR(150) NOT NULL,
     Identificador CHAR(15) NOT NULL,
     Email CHAR(80),
     Carrera CHAR(50),
     PRIMARY KEY (id)
);

insert into alumnos (Nombre, Identificador, Email, Carrera) values ('David', 'A01570231', 'a@h.com', 'ITC');

select * from alumnos a;
