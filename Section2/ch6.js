const fs = require('fs');
// creating a web server
const http = require('http');
const url = require('url');

// this is top level code
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
 const dataObject = JSON.parse(data);


// this is what is executed each time there is a request
const server = http.createServer((req, res) => {
// everytime a request hits our server, this callback function will be called.
console.log(req.url)
const pathName = req.url;
if(pathName === '/' || pathName === '/overview') {
    res.end("this is the overview ");
} else if (pathName === '/product') {
    res.end("this is the product ");
// how you do this without the top level code
// } else if(pathName === '/api') {
//     fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
//         const productData = JSON.parse(data);
//         res.writeHead(200, {'Content-type': 'application/json'})
//         res.end(data);
//     });

// same thing as above but with top level code
} else if(pathName === '/api') {
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(data)
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

