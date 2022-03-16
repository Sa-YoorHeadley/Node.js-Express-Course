const express = require('express')
const app =  express()
// Request -> Middleware -> Response

const logger = (req, res, next) =>{
    const {method, url, ip} = req
    const time = new Date().getFullYear()
    console.log(ip, method, url, time)
    next()
}

module.exports = logger