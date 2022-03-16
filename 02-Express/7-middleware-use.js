const express = require('express')
const logger = require('./logger.js')
const authorize = require('./authorize.js')
const app =  express()
// Request -> Middleware -> Response
app.use(logger, authorize)

app.get('/', (req,res) =>{
    res.send('Home')
    console.log(req.user)
})

app.get('/about', (req,res) =>{
    res.send('About')
})

app.get('/api/products', (req,res) =>{
    res.send('Products')
})

app.get('/api/items', (req,res) =>{
    res.send('Items')
})

app.get('*', (req,res) =>{
    res.status(404).send('Page Not Found')
})


app.listen(5000, () =>{
    console.log('Server is listening on port 5000')
})