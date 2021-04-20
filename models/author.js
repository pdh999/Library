var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the schema layout and fields
var AuthorSchema = new Schema({
    authorName: {type: String, required: true, max: 100},
    qualification: {type: String, max: 100},
    description: {type: String, max: 100},
 //   books: [{book: String}],
    books: [String],
});

// Export the model
module.exports = mongoose.model('author', AuthorSchema);
