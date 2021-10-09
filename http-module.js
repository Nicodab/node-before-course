const http = require('http');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     res.write('Welcome to our home page')
    //     res.end()
    // }

    // Un peu comme un else
    // else
    //     res.write('< h1 > Oops!</h1 > <p>We can\'t seem to find the page you are looking for</p><a href="/">back home</a>')

    if (req.url === '/') {
        res.write('Welcome to our home page')
        res.end()
    }

    if (req.url === '/about') {
        res.write('Here is our short history')
        res.end()
    }

    res.write('Seems that we can\'t reach the page you are asking for')
    res.end()
})

server.listen(5000)