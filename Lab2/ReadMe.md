#Settimeout: 
We call it when it when we wanna call a function after delay has finished whenever the function called it doesn't execute immediately but queued and waiting
for the other process in the queue and in the stack, because of executeImmediate callback is after I/O callback there won't be need to back to the top of the 
queue to callback the timers callback

#setImmediate and process.nextTick: 
setImmediate use queue of function, It checks queue of I/O eventhandlers, process.nextTick has a very height priority it's outside the event loop queue.  

#10 global modules: 
Array                                Boolean
Function                             Infinity
Number                               Object
String                               SyntaxError
decodeURIComponent                   encodeURI
isNaN                                parseFloat



