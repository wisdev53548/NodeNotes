// Don't need return keyword
var square = x => x * x;
console.log(square(9));

var user = {
	name: 'Tom',
	sayHi: () => {
		console.log(`Hi. I'm ${this.name}`);
	},
	// Using this syntax fixes the this.binding problem
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

user.sayHi(1, 2, 3);