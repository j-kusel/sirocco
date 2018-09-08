const mongoose = require('mongoose');

exports.post_measures = function(req, res, next) {
    var Measure = mongoose.model('Measure');
    console.log(req.body);
    var newMeasure = new Measure({
        START: req.body.start,
        END: req.body.end,
        BEATS: req.body.beats,
        TIME: req.body.time
    });
    newMeasure.save((err) => {
        if (err) console.log('error saving: ' + err)
        else res.send('saved!');
    });
}

exports.get_measures = function(req, res, next) {
    var Measure = mongoose.model('Measure');
    Measure.find({})
        .then(measures => res.json(measures))
        .catch(err => console.log('error saving: ' + err));
}
