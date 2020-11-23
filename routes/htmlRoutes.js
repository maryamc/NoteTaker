// Requiring dependencies
// using path package for file path in html
var path = require("path");

// Routes
module.exports= function(app){
    // routing for index.html
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));

    });

    // routing for notes.html
    app.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

};