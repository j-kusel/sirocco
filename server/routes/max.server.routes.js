const max = require('../controllers/max.server.controller.js');

module.exports = (function (app) {
    app.route('/max')
        .get(max.max);
});
