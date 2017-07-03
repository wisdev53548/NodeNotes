console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Tom', 'Tom', 1, 'Tom', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log('Result:', notes.add(38, 29));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);