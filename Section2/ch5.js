const fs = require('fs');
// creating a web server
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
// everytime a request hits our server, this callback function will be called.
console.log(req.url)
const pathName = req.url;
if(pathName === '/' || pathName === '/overview') {
    res.end("this is the overview ");
} else if (pathName === '/product') {
    res.end("this is the product ");
} else {
    // specifying an object to send
    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello world'
    });
    res.end('<h1>page not found</h1>')
}
});

// listening to requests from the client
server.listen(8000, '127.0.01',() => {
    console.log("listening to request on port 8000")
});

