var express = require('express');
var router = express.Router();

// Require the controllers
var author_controller = require('../controllers/author');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', author_controller.test);
//crerate an item
router.post('/create', author_controller.author_create);
//get a list of all items
router.get('/', author_controller.author_details_all);
//get a specific item
router.get('/:id', author_controller.author_details);
//update a specific item
router.put('/:id/update', author_controller.author_update);
//delete a specific item
router.delete('/:id/delete', author_controller.author_delete);


module.exports = router;