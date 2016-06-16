var EE = require('events').EventEmitter;

var emitter = new EE();

emitter.on('test', (x) => {
  console.log('ran');
  console.log(x)
})

emitter.emit('test', 'hello');
