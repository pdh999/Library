var Book = require('../models/book');
var Author = require('../models/author');
const author = require('../models/author');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Books new Test controller!');
};

exports.book_create = function (req, res) {
 //   console.log('Start');
var book = new Book ({
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    numberOfPages: req.body.numberOfPages,
    genre: req.body.genre,
    publisher: req.body.publisher
});
console.log('Saving book');
book.save(function(err, book){
    if(err)
        return next(err);
    //res.send
    console.log('Book created successfully with id: ' + book.id)
});

console.log('Author2: ' + req.body.author);
const author = Author.findOne({"authorName": req.body.author});
if (!author) console.log('Author doesnt exist');
if (author) console.log('Author does exist');
};


exports.book_details_all = function (req, res, next) {
    Book.find(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_details = function (req, res, next) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_update = function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.send('Book '+book.id+' udpated.');
    });
};

exports.book_delete = function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) ;
        res.send('Book deleted successfully');
    })
};
