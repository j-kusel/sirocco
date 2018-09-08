const config = require('./config/config');

var configMongoose = require('./config/mongoose');
var configExpress = require('./config/express');

var socket = require('socket.io');

var db = configMongoose();
var app = configExpress();



var server = app.listen(config.port);
console.log(`Server running at http://localhost:${config.port}/`);

var io = socket(server);
io.set('origins', '*:*');

io.sockets
    .on('connection', (socket) => {
        console.log('max connected!');
        setInterval(() => {
            console.log('we get here');
            socket.emit('message', 'bang');
        }, 500);
    });
