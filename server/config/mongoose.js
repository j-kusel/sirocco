const config = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

module.exports = function() {
    const db = mongoose.connect(config.db);
    require('../models/instrument.server.model');
    require('../models/measure.server.model');
    return db;
};
