var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the schema layout and fields
var BranchSchema = new Schema({
    //_id: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100},
    books: [{book: String}],
});

// Export the model
module.exports = mongoose.model('branch', BranchSchema);