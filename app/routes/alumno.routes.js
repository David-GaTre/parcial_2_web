module.exports = app => {
    const alumno = require('../controllers/alumno.controller')
    var router = require("express").Router();

    router.get('/', alumno.findAll);
    router.get('/:id', alumno.findById);
    router.post('/', alumno.create);
    router.delete('/:id', alumno.delete);
    router.put('/:id', alumno.update)
    app.use('/alumno', router)
};
