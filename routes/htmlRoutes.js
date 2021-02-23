// Requiring dependencies
// using path package for file path in html
const path = require("path");
const router = require ("express").Router();


// Routes

//Routing for index.html
router.get("*", (req,res ) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Routing for notes.html
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;