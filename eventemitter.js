const EventEmitter = require('events');
const emitter= new EventEmitter();
emitter.on('message',function(){
    console.log('listner is called');
});

emitter.emit('message');


