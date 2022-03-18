const express = require('express')
let {people} = require('./data.js')
const app =  express()
// Request -> Middleware -> Response

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/api/people',(req,res) =>{
    res.status(200).json({success: true, data: people})
})

app.post('/api/people',(req,res) =>{
    const {name} = req.body
    if(name.trim().length <= 0){
        return res.status(400).json({success:false, msg: 'Please provide name value'})
    }
    res.status(201).json({success:true, person:name, msg:''})
})

app.post('/login', (req, res) =>{
    const {name} = req.body
    if(name.trim().length > 1){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(400).send(`Please Provide Credentials`)
})

app.listen(5000, () =>{
    console.log('Server is listening on port 5000')
})