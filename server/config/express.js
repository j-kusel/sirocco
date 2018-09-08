const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

module.exports = function() {
    const app = express();
    app.use(cors());
    app.use(morgan('dev'));
    app.use(methodOverride());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use("/static", express.static("./public"));
    app.use("/lib", express.static("./node_modules"));

    app.set('views', './views');
    app.set('view engine', 'ejs');
    require('../routes/api.server.routes.js')(app);
    require('../routes/max.server.routes.js')(app);
    
    return app;
};
    
