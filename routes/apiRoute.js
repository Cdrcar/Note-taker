// Require express router, uuid and custom modules notes, deleteFromDb and addToDb
const router = require('express').Router();
const { v4: uuid4 } = require('uuid');
const {notes} = require('db/db.json');
const {deleteFromDb, addToDb} = require('helpers/functions.js');

// Sends notes from db.json as a json response to client side
router.get('/notes', (req, res) => {
    res.json({notes})
})

