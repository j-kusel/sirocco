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

