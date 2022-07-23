// Challenge Time

// 1. Create a folder named it Dikshit
// 2. Create a file in it named bio.txt and data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
        // -> File encoding

// 5. Rename the file name to mybio.txt
// 6. now delete both the file and the folder.

const fs = require('fs');

// fs.mkdir("Dikshit",(err)=>{
//     console.log(err);
// });
// fs.writeFile("./Dikshit/bio.txt","this is bio area",(err)=>{
//     console.log("The file is generated");
// });

// fs.appendFile("./Dikshit/bio.txt"," and this is all personal, so don't think like it's ur father property!!",(err)=>{
//     console.log(err);
// });

// fs.readFile("./Dikshit/bio.txt","utf-8",(err,data)=>{
//     console.log((err)?"Error":data);
// })

// fs.rename("./Dikshit/bio.txt","./Dikshit/bio2.txt",(err)=>{
//     console.log(err);
// })

// fs.rm("./Dikshit/bio2.txt",(err)=>{
//     console.log("The file is successfully deleted!!");
// })

// fs.rmdir("Dikshit",(err)=>{
//     console.log("Directory has been deleted!!");
// })