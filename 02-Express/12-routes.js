const express = require('express')
const app =  express()
const people = require('./routes/people.js')
const auth = require('./routes/auth.js')
// Request -> Middleware -> Response


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', auth)
app.use('/api/people', people)





app.listen(5000, () =>{
    console.log('Server is listening on port 5000')
})