const express = require('express')
const app =  express()
// Request -> Middleware -> Response

const logger = (req, res, next) =>{
    const {method, url, ip} = req
    const time = new Date().getFullYear()
    console.log(ip, method, url, time)
    next()
}

app.get('/', logger, (req,res) =>{
    
    res.send('Home')
})

app.get('/about', logger, (req,res) =>{
    res.send('About')
})

app.listen(5000, () =>{
    console.log('Server is listening on port 5000')
})