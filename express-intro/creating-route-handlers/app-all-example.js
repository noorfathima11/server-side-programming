const express = require('express')
const app = express()

app.all('./', function(req, res, next){
    console.log('Accessing root')
    next()
})