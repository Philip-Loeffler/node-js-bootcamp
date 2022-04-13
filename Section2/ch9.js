const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate')


const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if(!product.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    }
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);




const server = http.createServer((req, res) => {
console.log(req.url)
//parse returns a url object
console.log(url.parse(req.url, true))

// this is the syntax without destructing
// const url = url.parse(req.url, true);
// const pathname2 = url.pathname;
// const query2 = url.query;

//using desruct allows for this syntax, instead of using 
const {query, pathname } = url.parse(req.url, true)

//overview page
if(pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {'Content-type': 'text/html'})

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

//product page
} else if (pathname === '/product') {
    //an array, retriving the element from the query id.
    res.writeHead(200, {'Content-type': 'text/html'})
    console.log(query)
    const product = dataObj[query.id];
    console.log('yo')
    console.log(product)
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

//api
} else if(pathname === '/api') {
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(data)

//not found
} else {
    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello world'
    });
    res.end('<h1>page not found</h1>')
}
});

server.listen(8000, '127.0.01',() => {
    console.log("listening to request on port 8000")
});

