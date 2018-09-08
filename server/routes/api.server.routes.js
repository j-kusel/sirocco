const measures = require('../controllers/measures.server.controller.js');

module.exports = (function (app) {
    app.route('/api/measures')
        .get(measures.get_measures)
        .post(measures.post_measures);
});

