const express = require('express')
const wikiRouter = express.Router()

// Home-page route
wikiRouter.get('./', function(req, res){
    res.send('Wiki main page')
})

// About-page route
wikiRouter.get('./about', function(req,res){
    res.send('Wiki about page')
})

module.exports = wikiRouter