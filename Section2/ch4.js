
const fs = require('fs');
// creating a web server
const http = require('http');

const server = http.createServer((req, res) => {
// everytime a request hits our server, this callback function will be called.
console.log(req);
res.end("hello from the server");
});

// listening to requests from the client
server.listen(8000, '127.0.01',() => {
    console.log("listening to request on port 8000")
});