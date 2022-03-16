const { application } = require('express')
const express = require('express')
const app =  express()
const {products, people} = require('./data.js')

app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1> <a href="/api/products/">Products</a><br><a href="/api/people/">People</a>')
})

app.get('/api/products/', (req, res) =>{
    const newProducts = products.map(product => {
        const {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProducts)
})

app.get('/api/products/:productID', (req,res) =>{
    const productID = req.params.productID
    const product = products.find(product => product.id == productID)

    if(!product){
        return res.status(404).send('<a href="/">Home</a>')
    }
    res.json(product)
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res) =>{
    console.log(req.params)
    res.send(req.url)
})

app.get('/api/v1/query', (req,res) =>{
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter(product => product.name.startsWith(search))
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        // return res.status(200).send('No products matched your search')
        return res.status(200).json({success:true, data:{}})
    }
    res.status(200).json(sortedProducts)
})

app.get('/api/people/', (req, res) =>{
    res.json(people)
})

app.get('*', (req, res) =>{
    res.send('<a href="/">Home</a>')
})

app.listen(5000, () =>{
    console.log('Server is listening on port 5000')
})