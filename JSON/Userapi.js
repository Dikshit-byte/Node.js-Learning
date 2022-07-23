const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("Hello from the other side");
    }else if(req.url == '/about'){
        res.end("Hello from the aboutus side");
    }else if(req.url == '/userapi'){
        fs.readFile(`${__dirname}/api.json`,"utf-8",(err,data)=>{
            res.writeHead(200,{"content-type":"application/json"});
            console.log(data);

            res.end(data);
        });
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("404 error page. Page doesn't exist");
        }
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("listening to the port no. 3000")
})