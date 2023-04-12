// Require packages and files
const express = require("express");
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// Listen to PORT (port not sert in the enviroment so app will  listen to 3001)
const PORT = process.env.PORT || 3001;

// New instance of express app
const app = express();


// Middlewares using app.use() method

// Serve static file from the public directory
app.use(express.static('public'));
// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded ({ extended:true } ));

//Routing for the two endpoints /api and /
app.use('/api', apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, () => {
    console.log(`🚀 App listening at http://localhost:${PORT} 🚀`)
} )