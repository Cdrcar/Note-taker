// Require Express package and files
const express = require("express");
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// Listen to PORT (port not set in the enviroment so app will  listen to 3001)
const PORT = process.env.PORT || 3001;

// New instance of express app
const app = express();


// Middlewares using app.use() method

//For each file in that directory, the server creates a route with the file's name as the path
app.use(express.static('public'));
// Middleware for parsing incoming JSON and urlencoded form data
app.use(express.urlencoded ({ extended:true } ));
app.use(express.json);

//Routing for the two endpoints /api and /
app.use('/api', apiRoute);
app.use("/", htmlRoute);

// Start the server listening on port 3001
app.listen(PORT, () => {
    console.log(`🔉 App listening at http://localhost:${PORT} 🔉`)
} )