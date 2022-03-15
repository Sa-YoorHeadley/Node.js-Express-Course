const express = require('express')
const path = require('path')
const app = express()

//Set up static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) =>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*', (req,res) =>{
    res.status(404).send('Resource not found')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000')
})