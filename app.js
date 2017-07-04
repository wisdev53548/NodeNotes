console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Yargs:', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}

} else if (command === 'list') {
	notes.getAll();

} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}

} else if (command === 'remove') {
	var title = argv.title;
	var noteRemoved = notes.removeNote(argv.title);
	// var message = noteRemoved ? 'Note was removed' : 'Note not found';
	var message = noteRemoved ? `${title} was removed` : `No note called ${title} was found`;
	console.log(message);

} else if (command === 'authenticate') {
	notes.beginSequence(argv.username, argv.password);
	
} else {
	console.log('Command not recognized');
}