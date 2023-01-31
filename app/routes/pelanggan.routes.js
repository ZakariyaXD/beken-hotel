module.exports = app => {
    const pelanggan = require('../controllers/pelanggan.controller')
    const router = require('express').Router();

    router.get('/', pelanggan.findAll);
    router.get('/:id', pelanggan.show);
    router.post('/', pelanggan.create);
    router.put('/:id', pelanggan.update);
    router.delete('/:id', pelanggan.delete);

    app.use('/pelanggan', router);
}