const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to Our Homepage')
    }

    else if(req.url === '/about'){
        res.end('About')
    }

    else {
        res.end(
            `<h1> Oops ! </h1>
            <p> Your Request URL Not Found </p>
            <a href='/'>back home</a>
            `
        )
    }
})

server.listen(5000)