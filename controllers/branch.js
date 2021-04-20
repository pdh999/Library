var Branch = require('../models/branch');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Branch Test controller!');
};

exports.branch_create = function (req, res) {
    var branch = new Branch(
        {
            name: req.body.name,
            description: req.body.description,
            books: req.body.books
        }
    );

    branch.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('New branch, id: '+branch.id+' created successfully')
    })
};

exports.branch_details_all = function (req, res) {
    Branch.find(req.params.id, function (err, branch) {
        if (err) return next(err);
        res.send(branch);
    })
};

exports.branch_details = function (req, res) {
    Branch.findById(req.params.id, function (err, branch) {
        if (err) return next(err);
        res.send(branch);
    })
};

exports.branch_update = function (req, res) {
    Branch.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, branch) {
        if (err) return next(err);
        res.send('Branch udpated.');
    });
};

exports.branch_delete = function (req, res) {
    ABranch.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Branch deleted successfully');
    })
};