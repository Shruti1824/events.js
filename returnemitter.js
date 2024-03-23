var emitter=require('events').EventEmitter;
function LoopProcessor(num){
var e=new emitter();
setTimeout(function(){
    for(var i=1;i<=Number;i++){
        e.emit('BeforeProcess',i);
        console.log('Processing number:'+i);
        e.emit('AfterProcess',i);
    }
}
, 2000)
return e;
}
var ip=LoopProcessor(3);
ip.on('BeforeProcess',function(data){
    console.log('About to start the process for '+ data);
    me.emit('BeforeProcess',i);
});
ip.on('AfterProcess',function(data){
    console.log('completed processing'+ data);
    me.emit('AfterProcess',i);
});