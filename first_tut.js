// REPL

// 1 : JS Expression
// 2 : use variables
// 3 : Multiline code
// 4 : use (_) to get the last result 
// 5 : we can use editor mode

// USING CORS MODULES
// 1 : FS

const fs = require("fs");

// creating a new file
fs.writeFileSync("Readme.md","This is personal repo");

fs.writeFileSync("Readme.md","Change kr diya override krke");

// to add extra lines 
fs.appendFileSync("Readme.md","Ha ha smj gya hoga ab toh tu")

// to read
const buff_data = fs.readFileSync("Readme.md");
console.log(buff_data);

//Node.js includes an additional data type called Buffer
//(not available in browser's Javascript)
// Buffer is mainly used to store binary data.
// while reading from a file or receiving packets over the network.

org_data = buff_data.toString();
console.log(org_data);

// to rename
fs.renameSync("Readme.md","read.txt");

