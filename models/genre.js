var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the schema layout and fields
var GenreSchema = new Schema({
    //_id: {type: String, required: true, max: 100},
    genreType: {type: String, required: true, max: 100},
    books: [{book: String}],
});

// Export the model
module.exports = mongoose.model('genre', GenreSchema);