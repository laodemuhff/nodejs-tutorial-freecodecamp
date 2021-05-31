// File System Asynchronous Approach
console.log('Start the task');
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }

        const second = result

        writeFile(
            './content/result-async.txt', 
            `Here is the result ${first} ${second}`,
            (err,result) => {
                if(err){
                    console.log(err);
                    return 
                }

                console.log('Task Done');
            }
        )
    })
})

console.log('Continue with Next Task');