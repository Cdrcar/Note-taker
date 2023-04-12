// Require express router, uuid and custom modules notes, deleteFromDb and addToDb
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require("../db/db.json");
const {deleteFromDb, addToDb} = require('../helpers/functions');

// Show notes from db.json as a json response to client side
router.get('/notes', (req, res) => {
    res.json({notes})
})

// Create new note that is pushed to the array of notes (db.json), create random id, 
router.post('/notes', (req, res) => {
    // Generate unique id using uuidv4() and assign it to the id of the body of the request received
    req.body.id = uuidv4();
    // Create new note using the addToDb function that takes the body of the request and adds it to the db.json files
    const newNote = addToDb(req.body, notes);
    //Sends to the client the new note as a json response
    res.json(newNote);
})

//
router.delete('/notes/:id', (req, res) => {
    // Get the id of the note to be deleted and assign it to the id constant
    const id = req.params.id;
    // Delete note using the deleteFromDb function that takes as parameters the id and the notes 
    deleteFromDb(id, notes); 
    //Sends to the client an updated array of notes as a json response
    res.json({notes})

})

module.exports = router;