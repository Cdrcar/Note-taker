// Require modules path and express router
const path = require ("path");
const router = require("express").Router();


// Route handler for endpoint '/'
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})


// Route handler for endpoint '/notes'
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
})


// Route handler for all other URLs
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})

// Export router
module.exports = router