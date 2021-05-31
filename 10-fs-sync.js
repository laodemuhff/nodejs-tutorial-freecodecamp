// File System Synchronous Approach
console.log('Start the task');
const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')

const first_without_decoding = readFileSync('./content/first.txt')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first_without_decoding);
console.log(first);
console.log(second);

writeFileSync(
    `./content/result-sync.txt`, 
    `Here is the result : ${first} ${second}`,
    // { flag : 'a'} by default it will override the existing one
)

console.log('Task Done');
console.log('Continue with Next Task');

