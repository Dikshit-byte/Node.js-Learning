// Node.js Streams

//Streams are object that let you read data from a source or write data to a destination in continuous fashion. In node.js there are four types of streams-
// Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computer and watching it later.

// Readable - Stream which is used for read operation.
// Writable - Stream which is used for write operation.
// Duplex - Stream which can be used for both read and write operation.
// Transform - A type of duplex stream where the output is computed based on input.

// Each type of Stream is an EventEmitter instance and throws several events at different instance of times.For example,some of the commonly used events are-
// data - This event is fired when there is data is available to read.
// end - This event is fired when there is no more data to read.
// error - This event is fired when there is any error receiving or writing data.
// finish - This event is fired when all the data has been flushed to underlying system.

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on("request",(req,res)=>{
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) console.error(err);
    //     res.end(data.toStringfy());
    // })

// 2nd way 
// Reading from a stream
// Create a readable stream
// Handle stream events -> data,end, and error.

// const rstream = fs.createReadStream('input.txt');

// rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata);
// })
// rstream.on('end',()=>{
//     res.end();
// })
// rstream.on('error',(err)=>{
//     console.error(err);
// })

    // 3rd way

const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);

});
server.listen(3000,"127.0.0.1",()=>{
    console.log("Listening to the port no 3000");
})