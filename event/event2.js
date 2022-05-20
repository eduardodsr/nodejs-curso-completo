const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();

myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});

myEmitter.emit('event', 'a', 'b');
