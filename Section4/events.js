const EventEmitter = require('events');
const http = require('http');

//sales class will inherit everything from EventEmitter
class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();
//when you see this syntax, with the extra paras and arrow function
// it is indicating a call back
// which means the console.log function will be called, as soon as the event is submitted
myEmitter.on('newSale', () => {
console.log("there was a new sale")
})

myEmitter.on('newSale', () => {
    console.log("there was a new sale")
})

// stock is a param which is accepting the 9 argument
myEmitter.on('newSale', stock => {
    console.log(`there are now ${stock} items left in stock`)
})
// this fires/ emits
//the myemmiter.on are observables, so they dont do anything till they see the emit fire
// this 9 is passing an argument to the other emitters
myEmitter.emit("newSale", 9);

////////////////////////////////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("request received");
    res.end("request received")
});

server.on('close', ()=> {
    console.log("server closed")
})

server.listen(8000, '127.0.0.1', () => {
    console.log("waitig for request")
});