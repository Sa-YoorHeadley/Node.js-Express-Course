const express = require('express')
const router = express.Router()

router.post('/login', (req, res) =>{
    const {name} = req.body
    if(name && name.trim().length > 1){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(400).send(`Please Provide Credentials`)
})

module.exports = router