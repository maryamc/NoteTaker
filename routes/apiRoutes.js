// const fs = require("fs");
const notesData = require("../Develop/db/db.json");

module.export = function(app){
    app.get("/api/notes", function (req,res){
        res.json(notesData);
    });

    app.post("/api/notes", function(req,res){
        notesData.push(req.body);
    })
}