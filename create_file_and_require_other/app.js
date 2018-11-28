console.log('This is my first program for create file and required other inside this');
const fs = require('fs');
const custom = require('./my_custom');
var value = custom.customFunction();

var sum = custom.addTwoNumber(10, -20);
console.log(sum)
// fs.appendFile('hello-text.txt', `my name is ${custom.myName}`);
