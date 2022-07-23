const fs = require('fs');

// fs.writeFile("readme.txt","My name is dikshit singh",(err)=>{
//     console.log("file created");
//     console.log(err);
// })

// we pass them a function as an argument - a callback - that gets called when that task completes.
//The callback has an argument that tells you whether the operation completed successfully.
// Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errors.

// fs.appendFile("readme.txt"," and i wanna be a software developer",(err)=>{
//     console.log("Task completed");
// })

fs.readFile("readme.txt","utf-8",(err,data)=>{
   console.log((err)?"the error found ": data);
});
console.warn("kya ve bhikmange!!");