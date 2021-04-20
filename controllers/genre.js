var Genre = require('../models/genre');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Genre Test controller!');
};

exports.genre_create = function (req, res) {
    var genre = new Genre(
        {
            genreType: req.body.genreType,
            bookss: req.body.books
        }
    );

    genre.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('New genre, id: '+genre.id+' created successfully')
    })
};

exports.genre_details_all = function (req, res) {
    Genre.find(req.params.id, function (err, genre) {
        if (err) return next(err);
        res.send(genre);
    })
};

exports.genre_details = function (req, res) {
    Genre.findById(req.params.id, function (err, genre) {
        if (err) return next(err);
        res.send(genre);
    })
};

exports.genre_update = function (req, res) {
    Genre.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, genre) {
        if (err) return next(err);
        res.send('Genre udpated.');
    });
};

exports.genre_delete = function (req, res) {
    Genre.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Genre deleted successfully');
    })
};