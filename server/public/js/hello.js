console.log('oh hi there');

if (window.max) window.max.outlet('foo');

const socket = io('localhost:8000', {});

socket
    .on('connect', function() {
        window.max.outlet('connected');
    })
    .on('message', function(payload) {
        window.max.outlet(payload);
    });

window.max.bindInlet('subscribe', function(inst) {
    window.max.outlet(inst);
    socket.emit('subscribe', inst);
});

function handleInst(value) {
    socket.emit('subscribe', value);
    window.max.outlet('subscribed to ' + value);
}
