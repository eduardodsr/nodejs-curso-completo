
// initialize

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// start

eventEmitter.on('start', () => {
    console.log('started');
});

// run

eventEmitter.emit('start');