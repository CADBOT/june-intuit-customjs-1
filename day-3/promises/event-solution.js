var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('my event triggered');
});

emitter.on('one', (file) => {
  console.log('running first function');
  fs.readFile(file), (err, data) => {
    if (err) {
      //handle err
      return
    }
    emitter.emit('two');
  });
})

emitter.on('two', () => {
  console.log('running second function');
  emitter.emit('three');
})

emitter.on('three', () => {
  console.log('running third function');
})

emitter.emit('one', './event-solution.js');
