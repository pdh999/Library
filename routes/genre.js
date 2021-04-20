var express = require('express');
var router = express.Router();

// Require the controllers
var genre_controller = require('../controllers/genre');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', genre_controller.test);
//crerate an item
router.post('/create', genre_controller.genre_create);
//get a list of all items
router.get('/', genre_controller.genre_details_all);
//get a specific item
router.get('/:id', genre_controller.genre_details);
//update a specific item
router.put('/:id/update', genre_controller.genre_update);
//delete a specific item
router.delete('/:id/delete', genre_controller.genre_delete);


module.exports = router;