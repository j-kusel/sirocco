const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InstrumentSchema = new Schema({
    NAME: String
}, {
    autoIndex: false
});

mongoose.model('Instrument', InstrumentSchema).on('index', err => console.log('indexing error: ' + err));

