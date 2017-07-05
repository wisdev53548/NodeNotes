const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
}

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}

const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.command('security', 'Check security clearance', {
		username: {
			describe: 'User ID for system',
			demand: true,
			alias: 'u'
		},
		password: {
			describe: 'User password',
			demand: true,
			alias: 'p'
		}
	})
	.help()
	.argv;

var command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}

} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach(note => notes.logNote(note));

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
	var noteRemoved = notes.removeNote(title);
	var message = noteRemoved ? `${title} was removed` : `No note called ${title} was found`;
	console.log(message);

} else if (command === 'security') {
	notes.security(argv.username, argv.password);

} else {
	console.log('Command not recognized');
}
