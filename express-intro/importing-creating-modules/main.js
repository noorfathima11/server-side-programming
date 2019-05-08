const squareMethods = require('./exporting-methods')
// using destructing of objects here
const {area, perimeter} = require('./exporting-methods')

console.log('The area of the square with a width of 4 is' + ' ' +  squareMethods.area(4))
console.log('The perimeter of the square with width 4 is ' + perimeter(4))