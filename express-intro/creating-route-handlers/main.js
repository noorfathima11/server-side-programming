const wiki = require('wiki-route-module')
const express = require('express')
const app = express()

app.use('/wiki', wiki)