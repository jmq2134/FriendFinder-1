// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Define port
var PORT = 7000;

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('app'));


require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

// Starts the server to begin listening
app.listen(process.env.PORT || 7000);
console.log('Listening on port %d', PORT);