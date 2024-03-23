const EventEmitter=require('events');
var eventEmitter=new EventEmitter();
var fun1=(msg)=>{
    console.log("Message for fun1:"+msg);
};
var fun2=(msg)=>{
    console.log("Message for fun2:" +msg);
};
eventEmitter.addListener('myEvent',fun1);
eventEmitter.prependListener('myEvent',fun2);
console.log(eventEmitter.listeners('myEvent'));
console.log(eventEmitter.listeners('myEvent'));
console.log(eventEmitter.listenerCount('myEvent'));
eventEmitter.emit('myEvent','Event Occured');
