var express = require('express');
var router = express.Router();

// Require the controllers
var branch_controller = require('../controllers/branch');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', branch_controller.test);
//crerate an item
router.post('/create', branch_controller.branch_create);
//get a list of all items
router.get('/', branch_controller.branch_details_all);
//get a specific item
router.get('/:id', branch_controller.branch_details);
//update a specific item
router.put('/:id/update', branch_controller.branch_update);
//delete a specific item
router.delete('/:id/delete', branch_controller.branch_delete);


module.exports = router;