console.log('Starting notes.js');

var addNote = (title, body) => {
	console.log('Adding note', title, body);
}

var getAll = () => {
	console.log('Getting all notes');
}

var getNote = title => {
	console.log(`Reading ${title}`);
}

var removeNote = title => {
	console.log(`Removing ${title}`);
}

var beginSequence = (username, password) => {
	if (password === 'stonewall') {
		console.log(`Welcome back, ${username}. The authentication is xas3ad7f.`);
	} else {
		console.log(`I'm sorry ${username}. That password is incorrect.`);
	}
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	beginSequence
};