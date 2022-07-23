// Challenge Time

// 1. Create a folder named it Dikshit
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
        // -> File encoding

// 5. Rename the file name to mybio.txt
// 6. now delete both the file and the folder.

const fs = require("fs");
const name = "Dikshit singh";

// fs.mkdirSync("Dikshit");
// fs.writeFileSync("Dikshit/bio.txt",`Hey there, My name is ${name}`);

// fs.appendFileSync("Dikshit/bio.txt","Kya baat hai bhai ");
// const buff_data = fs.readFileSync("Dikshit/bio.txt","utf-8");
// console.log(buff_data);

// fs.renameSync("Dikshit/bio.txt","bio1.txt");
// 
// fs.unlinkSync("Dikshit/bio.txt");

fs.rmdirSync("Dikshit");