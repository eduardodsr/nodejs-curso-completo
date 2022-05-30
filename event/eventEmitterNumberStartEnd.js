// initialize

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// start

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
});

// run

eventEmitter.emit('start', 1, 100);