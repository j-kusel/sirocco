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
        socket
            .on('subscribe', (payload) => {
                console.log('subscription: ' + payload);
                Object.keys(socket.rooms).forEach(key => socket.leave(key));
                socket.join('inst'+payload);
            });
    });

setInterval(() => {
    io.to('inst0').emit('message', 'bang');
}, 500);
setInterval(() => {
    io.to('inst1').emit('message', 'bang');
}, 250);

