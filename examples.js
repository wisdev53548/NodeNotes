console.log('Starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
var release = os.release();

// fs.appendFileSync('greetings.txt', ' This is the next message!');
fs.appendFileSync('greetings.txt', ` Hello again ${user.username}! You are using ${release}.`);

//Created in notes.js and exported as a method to app.js
module.exports.age = 25;

//Dummy function in notes.js
module.exports.add = (a,b) => {
	return a + b;
}

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Andrew']);
console.log(filteredArray);


// var user = os.userInfo();
// 
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

console.log('Process', process.argv);

var command = process.argv[2];
