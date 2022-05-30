// initialize
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// subscriber - assinante (on)

eventEmitter.on('start', (x, y) => {
    console.log(`Event Emitter: ${x} and ${y}`)
})

// publisher - emissor (emit)

eventEmitter.emit('start', 'Start', 'End');

// ------------- outro exemplo ------------- // 



// subscriber - assinante (on)

eventEmitter.on('finish', (data) => {
    console.log(`Event Emitter: ${data}`);
})

// publisher - emissor (emit)

eventEmitter.emit('finish', 'Terminating Execution!');