// Requiring the dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Tells node that we are creating an "express" server
const app = express();

// Setting the port for localhost
// this syntax allows heroku to always create a port depending on environment
const PORT = process.env.PORT || 7500;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routes
//points server to series of route files providing our server with a map of how to respond to client activity
app.use("/api", apiRoutes);
app.use("/",htmlRoutes);


//Listener
// initiates server 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});