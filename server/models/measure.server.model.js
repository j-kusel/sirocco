var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeasureSchema = new Schema({
    START: Number,
    END: Number,
    BEATS: Number,
    TIME: Number,
    INSTRUMENT: {
        type: Schema.Types.ObjectId,
        ref: 'Instrument',
        required: true
    }
}, {
    autoIndex: false
});

mongoose.model('Measure', MeasureSchema).on('index', err => console.log('indexing error: ' + err.message));
