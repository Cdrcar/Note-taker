// Require  fs and path to read and write data to db.json and path to construct file paths
const fs = require("fs");
const path = require("path");

// Create function to delete notes from database file db.js
function deleteFromDb(id, arrayOfNotes) {
  deleteNote = id;
  // Loop through the array of notes
  for (let i = 0; i < arrayOfNotes.length; i++) {
    // If the id id the array of notes matches the delete note, use splice() method to remove the matching note
    if (deleteNote === arrayOfNotes[i].id) {
      arrayOfNotes.splice(i, 1);
      // Update array of notes passing 3 parameters: the path to the file to update, data to write to db.js and err call back function to handle erros
      fs.writeFileSync(
        path.join(__direname, "db/db.json"),
        JSON.stringify({ notes: arrayOfNotes }, 2),
        (err) => {
          if (err) {
            throw err;
          }
        }
      )
    }
  }
};

// Create function to add new notes to the database file db.js
function addToDb (body, arrayOfNotes) {
    const newNote = body;
    // Add new note to the array of notes
    arrayOfNotes.push(newNote);
    // Write the updated array of notes passing 2 parameters: the path to the file to update and data to write to db.js
    fs.writeFileSync(
        path.join(__direname, "db/db.json"),
        JSON.stringify({notes: arrayOfNotes}, 2)
    );
    // Return the new note
    return newNote;
};



// Export functions
module.exports = {deleteFromDb, addToDb }
