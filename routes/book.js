var express = require('express');
var router = express.Router();

// Require the controllers
var book_controller = require('../controllers/book');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', book_controller.test);
//crerate an item
router.post('/create', book_controller.book_create);
//get a list of all items
router.get('/', book_controller.book_details_all);
//get a specific item
router.get('/:id', book_controller.book_details);
//update a specific item
router.put('/:id/update', book_controller.book_update);
//delete a specific item
router.delete('/:id/delete', book_controller.book_delete);


module.exports = router;