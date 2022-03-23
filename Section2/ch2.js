// this section is about reading and writing files to node.js 

const fs = require('fs');

// the synchronous file of reading a file
// reads data to the file and returns it to use
const textIn = fs.readFileSync('../txt/input.txt', 'utf-8');



console.log(textIn);

const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('../txt/ouput.txt', textOut)
console.log("file has been written")