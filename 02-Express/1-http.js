const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const homeLogo = readFileSync('./navbar-app/logo.svg')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html', 'encoding': 'utf-8'})
    const url = req.url
    if(url === '/'){
        res.write(homePage)
    }
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css', 'encoding': 'utf-8'})
        res.write(homeStyles)
        res.end()
    }    
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript', 'encoding': 'utf-8'})
        res.write(homeLogic)
        res.end()
        
    }    
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml', 'encoding': 'utf-8'})
        res.write(homeLogo)
        res.end()

    }    
    else if(url === '/about'){
        res.write('<h1>About</h1>')
    }    
    else{
        res.writeHead(404, 'Not Found',{'content-type': 'text/html', 'encoding': 'utf-8'})
        res.write(`<h1>Page Not Found</h1> <a href='/'>Home</a>`)
    }
    console.log(url)
    res.end()
})

server.listen(5000)