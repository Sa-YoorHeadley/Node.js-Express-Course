const express = require('express')
const logger = require('./logger.js')
const morgan = require('morgan')
const authorize = require('./authorize.js')
const app =  express()
// Request -> Middleware -> Response
app.use(morgan('tiny'))


app.get('/', (req,res) =>{
    res.send('Home')
})

app.get('/about', (req,res) =>{
    console.log(req.user)
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