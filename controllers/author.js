var Author = require('../models/author');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Authors Test controller!');
};

exports.author_create = function (req, res) {
    var author = new Author(
        {
            authorName: req.body.authorName,
            qualification: req.body.qualification,
            description: req.body.description,
            books: req.body.books
        }
    );

    author.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('New author, id: '+author.id+' created successfully')
    })
};

exports.author_details_all = function (req, res) {
    Author.find(req.params.id, function (err, author) {
        if (err) return next(err);
        res.send(author);
    })
};

exports.author_details = function (req, res) {
    Author.findById(req.params.id, function (err, author) {
        if (err) return next(err);
        res.send(author);
    })
};

exports.author_update = function (req, res) {
    Author.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, author) {
        if (err) return next(err);
        res.send('Author udpated.');
    });
};

exports.author_delete = function (req, res) {
    Author.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Author deleted successfully');
    })
};