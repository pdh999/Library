var express = require('express');
var router = express.Router();

// Require the controllers
var publisher_controller = require('../controllers/publisher');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', publisher_controller.test);
//crerate an item
router.post('/create', publisher_controller.publisher_create);
//get a list of all items
router.get('/', publisher_controller.publisher_details_all);
//get a specific item
router.get('/:id', publisher_controller.publisher_details);
//update a specific item
router.put('/:id/update', publisher_controller.publisher_update);
//delete a specific item
router.delete('/:id/delete', publisher_controller.publisher_delete);


module.exports = router;