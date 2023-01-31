const dbConfig = require('../config/db');
const mongoose = require('mongoose');

module.exports = {
    mongoose,
    url: dbConfig.url,
    pelanggan: require('./pelanggan.models')(mongoose)
}