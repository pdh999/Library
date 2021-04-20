var express = require('express')
var app = express()
require('./database/initDB')()

var bodyParser = require('body-parser');
//var routes = require('./router/library');
var book = require('./routes/book'); // Imports routes for the books
var author = require('./routes/author'); // Imports routes for the authors
var branch = require('./routes/branch'); // Imports routes for the branches
var genre = require('./routes/genre'); // Imports routes for the genres
var publisher = require('./routes/publisher'); // Imports routes for the publishers

app.get('/', (req, res) => {
    res.send("Library API is running");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//app.use('/library', routes)
//This links to the controller
app.use('/books', book);
app.use('/authors', author);
app.use('/branch', branch);
app.use('/genre', genre);
app.use('/publisher', publisher);

var port = 1235
app.listen(port, () => {
    console.log('Server is running at port: ' + port)
})
 