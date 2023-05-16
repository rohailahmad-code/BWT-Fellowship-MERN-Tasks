const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// Initialize Object

const myEmitter = new MyEmitter();

// Add listner for the log event

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // Emit Event
    myEmitter.emit('log', 'Log Event Emitted..!');
}, 2000)

