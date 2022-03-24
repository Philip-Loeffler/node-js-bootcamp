const fs = require('fs');

// this is the async way of handing read/write
// so we are calling the readfile function 
// then because it is async the syntax 
// has the error, and data params
fs.readFile('../txt/input.txt', 'utf-8', (err, data) => {
    // data is what is coming from input file
    // so the callback function is providing you with the 
    // info from the text file, in a variable named data
console.log(data);
});
console.log('yo');