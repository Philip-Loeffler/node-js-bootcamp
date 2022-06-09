const fs = require('fs')
const crypto = require('crypto')
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1

// currently this code is not running in an io event loop
setTimeout(() => console.log("timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));


fs.readFileSync('txt-file.txt', () => {
    console.log("i/o finishes");
    console.log("---------");

// putting these in a callback function will trigger this event loop
    setTimeout(() => console.log("timer 2 finished"), 0);
    setTimeout(() => console.log("timer 3 finished"), 3000);
// executed right away in the polling phase this is set after a tick
    setImmediate(() => console.log("Immediate 3 finished"));
// this is set immediate. which is confusing since its called tick and not immediate
 process.nextTick(() => console.log("process.nextTick "))

 crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
     console.log(Date.now() - start, 'password encrpyted')
 })
})

console.log("Hello from the top level code")