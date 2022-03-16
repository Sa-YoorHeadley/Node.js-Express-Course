const express = require('express')
const app =  express()
const {products, people} = require('./data.js')

app.get('/', (req, res) =>{
    res.json(products)
})

app.get('*', (req, res) =>{
    res.send('<a href="/">Home</a>')
})

app.listen(5000, () =>{
    console.log('Server is listening on port 5000')
})