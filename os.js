const os = require('os');

const s = os.arch();
console.log(s);

const memory = os.freemem();
console.log(`${memory/1024/1024/1024}`);

const total_mem = os.totalmem();
console.log(`${total_mem/1024/1024/1024}`);

console.log(os.hostname());

console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());