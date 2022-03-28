const fs = require('fs');

// this is the async way of handing read/write
// so we are calling the readfile function 
// then because it is async the syntax 
// has the error, and data params
fs.readFile('../txt/input.txt', 'utf-8', (err, data1) => {
    // data is what is coming from input file
    // so the callback function is providing you with the 
    // info from the text file, in a variable named data
    if(err) return console.log("error")
    fs.readFile(`../txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
        fs.readFile('../txt/input.txt', 'utf-8', (err, data2) => {
    console.log(data3);
    fs.writeFile('..txt/final.txt', `${data2}\n${data3}`,'utf-8', err => {
        console.log("your file has been written");
    })
});
});
});
console.log('yo');