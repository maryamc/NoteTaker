const fs = require("fs");
const util = require("util");

//using uuid npm package to create unique ids
const { v4: uuidv4} = require("uuid");
uuidv4();

//util.promisify converts a callback function into a promise based function
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class dbdata {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      let noteParser;

      //this will turn the notes into an empty array if it already isnt one
      try {
        noteParser = [].concat(JSON.parse(notes));
      } catch (err) {
        noteParser = [];
      }

      return noteParser;
    });
  }

  add(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Woops! 'title' and 'text' are empty");
    }

    // using uuidv4 to add an id to the notes to populate db
    const newNote = { title, text, id: uuidv4() };

    // returns all note data
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  remove(id) {
    // removes all notes on instance of id
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
  
}

//creates db data on requests in db.json
module.exports = new dbdata();