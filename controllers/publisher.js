var Publisher = require('../models/publisher');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Publisher Test controller!');
};

exports.publisher_create = function (req, res) {
    var publisher = new Publisher(
        {
            name: req.body.name,
            address: req.body.address,
            books: req.body.books
        }
    );

    publisher.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('New publisher, id: '+publisher.id+' created successfully')
    })
};

exports.publisher_details_all = function (req, res) {
    Publisher.find(req.params.id, function (err, publisher) {
        if (err) return next(err);
        res.send(publisher);
    })
};

exports.publisher_details = function (req, res) {
    Publisher.findById(req.params.id, function (err, publisher) {
        if (err) return next(err);
        res.send(publisher);
    })
};

exports.publisher_update = function (req, res) {
    Publisher.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, publisher) {
        if (err) return next(err);
        res.send('Publisher udpated.');
    });
};

exports.publisher_delete = function (req, res) {
    Publisher.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Publisher deleted successfully');
    })
};