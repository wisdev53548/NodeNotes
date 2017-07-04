console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
	try {
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	var duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	} 
};

var getAll = () => {
	console.log('Getting all notes');
};

var getNote = title => {
	console.log(`Reading ${title}`);
};

var removeNote = title => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter(note => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};

var beginSequence = (username, password) => {
	if (password === 'stonewall') {
		console.log(`Hello ${username}. The authentication is xas3ad7f.`);
	} else {
		console.log(`I'm sorry ${username}. That password is incorrect.`);
	}
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	beginSequence
};