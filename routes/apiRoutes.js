// const fs = require("fs");
// const notesData = require("../Develop/db/db.json");

const router = require("express").Router();
const dbdata = require("../db/dbdata");

// module.export = function(app){
//     app.get("/api/notes", function (req,res){
//         res.json(notesData);
//     });

//     app.post("/api/notes", function(req,res){
//         notesData.push(req.body);
//     })


// creating CRUD request for api
// getting
router.get("/notes", (req, res) => {
    dbdata.getNotes().then((notes) => res.json(notes));
});

// adding
router.post("/notes", (req,res) => {
    dbdata.add(req.body).then((note) => res.json(note));
});

//deleting
router.delete("/notes/:id", (req, res) => {
    dbdata.destroy(req.params.id).then(() => res.json({ok: true}));
});

module.exports = router;