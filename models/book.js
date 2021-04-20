var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the schema layout and fields
var BookSchema = new Schema({
    title: {type: String, required: true, max: 100},
    author: {type: String, required: true, max: 100},
    numberOfPages: {type: Number, required: true, min: 1},
    price: {type: Number, required: true, min: 1},
    genre: {type: String, required: true, max: 100},
    publisher: {type: String, required: true, max: 100},
});

// Export the model
module.exports = mongoose.model('book', BookSchema);