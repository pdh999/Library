var ToDo = require('../models/toDo');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Books Test controller!');
};

exports.toDo_create = function (req, res) {
    var toDo = new ToDo(
        {
            title: req.body.title,
            dueByDate: req.body.dueByDate,
            createdOn: req.body.createdOn,
            status: req.body.status,
            active: req.body.active,
            userName: req.body.userName,
            email: req.body.email,
            userID: req.body.userID
        }
    );

    toDo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('New To Do item, id: '+toDo.id+' created successfully')
    })
};

exports.toDo_details_all = function (req, res) {
    ToDo.find(req.params.id, function (err, toDo) {
        if (err) return next(err);
        res.send(toDo);
    })
};

exports.toDo_details = function (req, res) {
    ToDo.findById(req.params.id, function (err, toDo) {
        if (err) return next(err);
        res.send(toDo);
    })
};

exports.toDo_update = function (req, res) {
    ToDo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, toDo) {
        if (err) return next(err);
        res.send('To Do item udpated.');
    });
};

exports.toDo_delete = function (req, res) {
    ToDo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('To Do item deleted successfully');
    })
};

exports.toDo_completed = function (req, res) {
    ToDo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, toDo) {
        if (err) return next(err);
        res.send('Item marked as completed.');
    });
};