module.exports = app => {
    const pelanggan = require('../controllers/pelanggan.controller')
    const r = require('express').Router();

    r.get('/', pelanggan.findAll);
    r.get('/:id', pelanggan.show);
    r.post('/', pelanggan.create);
    r.put('/:id', pelanggan.update);
    r.delete('/:id', pelanggan.delete);

    app.use('/pelanggan', r);
}