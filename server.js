// Requiring the dependencies
var express = require("express");

// Setting the port for localhost
// this syntax allows heroku to always create a port depending on environment
var PORT = process.env.PORT || 7500;

//Tells node that we are creating an "express" server
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
//points server to series of route files providing our server with a map of how to respond to client activity
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
// initiates server 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});