const http =  require('http')
const server =  http.createServer((request, response) =>{
    if(request.url === '/'){
        response.end('Hello World')
    } else if(request.url === '/about'){
        response.end('About Me')
    } else{
        response.end(`
        <h1>Oops</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href='/'>Back to Home</a>
        `)
    }
})
server.listen(5000)