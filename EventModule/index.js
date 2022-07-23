// Events Module
// Node.js has a built-in module, called "Events" where you can create-, fire-, and listen for- your own events.

// Example 1. -> Registering for the event to be fired only one time using once.
// Example 2. -> Create an event emitter instance and  register a couple of callbacks.
// Example 3. -> Registering for the event with callback parameters.

const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("saymyName",()=>{
//     console.log("My name is Dikshit");
// })
// event.on("saymyName",()=>{
//     console.log("My name is Singh");
// })
// event.emit("saymyName");

// The concept is quite simple: emitter object emit named events that cause previously registered listeners to be called. So, an emitter object basically has two main features:
// Emitting new events 
// Registering and unregistering listener functions.

event.on("checkPage",(st,msg)=>{
    console.log(`The status code is ${st} and it is ${msg}`)
})
event.emit("checkPage",200,"ok");