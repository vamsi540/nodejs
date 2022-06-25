const EventEmitter = require('events');
const emitter= new EventEmitter();
emitter.on('logging',(arg)=>{
    console.log('data is passed successfully',arg);
});

emitter.emit('logging',{id:1,url : 'http://'});
