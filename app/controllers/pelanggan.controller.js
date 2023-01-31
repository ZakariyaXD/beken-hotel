const { pelanggan } = require('../models');
const db = require('../models');
const Pelanggan = db.pelanggan

exports.create = (req, res) => {
    Pelanggan.create(req.body)
        .then(() => res.send({message: "Data Tersimpan"}))
        .catch(err => res.status(500).send({message: err.message}));
}
exports.findAll = (req, res) => {
    Pelanggan.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.show = (req, res) => {
    const id = req.params.id

    Pelanggan.findByID(id)
        .then(() => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.update = (req, res) => {
    const id = req.params.id

    Pelanggan.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data){
                res.status(404).send({message: 'Data Tidak Terupdate'})
            }
            res.send({message: 'Data Diupdate'})
        })
        .catch(err => res.status(500).send({message: err.message}));
}

exports.delete = (req, res) => {
    const id = req.params.id
    Pelanggan.findByIdAndRemove
    .then(data => {
        if (!data){
            res.status(404).send({message: 'Data Tidak Terhapus'})
        }
        res.send({message: 'Data Terhapus'})
    })
    .catch(err => res.status(500).send({message: err.message}));
}