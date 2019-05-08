const express = require('express')
const app = express()

exports.area = function(width){
    return width * width
}

exports.perimeter = function(width){
    return 4 * width
}