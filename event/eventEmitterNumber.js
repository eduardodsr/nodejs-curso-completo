// initialize

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// start

eventEmitter.on('start', number => {
    console.log(`started ${number}`);
});

// run

eventEmitter.emit('start', 123);