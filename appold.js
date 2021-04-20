// app.js

var express = require('express');
var bodyParser = require('body-parser');
//This is the link to the routes folder
var book = require('./routes/book'); // Imports routes for the books
var author = require('./routes/author'); // Imports routes for the authors
var branch = require('./routes/branch'); // Imports routes for the branches
var genre = require('./routes/genre'); // Imports routes for the genres
var publisher = require('./routes/publisher'); // Imports routes for the publishers
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose')
var dev_db_url = 'mongodb+srv://test:test@cluster0.wur8d.mongodb.net/eduonix?authMechanism=SCRAM-SHA-1';
mongoose.connect(dev_db_url), { useNewUrlParser: true, useUnifiedTopology: true,};
mongoose.Promise = global.Promise
var db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//This links to the controller
app.use('/books', book);
app.use('/authors', author);
app.use('/branch', branch);
app.use('/genre', genre);
app.use('/publisher', publisher);

var port = 1235;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

