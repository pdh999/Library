var express = require('express');
var router = express.Router();

// Require the controllers
var toDo_controller = require('../controllers/toDo');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', toDo_controller.test);
//crerate an item
router.post('/create', toDo_controller.toDo_create);
//get a list of all items
router.get('/', toDo_controller.toDo_details_all);
//get a specific item
router.get('/:id', toDo_controller.toDo_details);
//update a specific item
router.put('/:id/update', toDo_controller.toDo_update);
//delete a specific item
router.delete('/:id/delete', toDo_controller.toDo_delete);
//mark an item as complete
router.put('/:id/complete', toDo_controller.toDo_completed);


module.exports = router;