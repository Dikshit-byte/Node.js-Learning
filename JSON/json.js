// JSON stands for javascript object notation. JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.
const fs = require('fs');
const bioData = {
    name : "Dikshit",
    age : 20,
    channel : "Dikshit singh",
};
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// const objData = JSON.parse(jsonData);
// console.log(objData);

// some tasks here : 

// 1. Convert to JSON
// 2. dusre file me add karna hai 
// 3. readfile
// 4. again convert back to js obj ori
// 5. console.log

// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("Successfully created");
// })
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log((err)?"Error generated":data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})

