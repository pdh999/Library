var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the schema layout and fields
var ToDoSchema = new Schema({
    title: {type: String, required: true, max: 100},
 //   dueByDate: {type: Date, default: Date.now  + 7*24*60*60*1000, required: true},
 //   createdOn: {type: Date, default: Date.now, required: true},
    //dueByDate: {type: Date, required: true},
    //Set defsault due date to 14 days from creation date
    dueByDate: {type: Date, default: +new Date() + 7*24*60*60*1000, required: true},
    //createdOn: {type: Date, required: true},
    //Set creatiomn date to current date
    createdOn: {type: Date, default: Date.now, required: true},
    status: {type: String, required: true, max: 100},
    active: {type: String, required: true, max: 100},
    userName: {type: String, required: true, max: 100},
    email: {type: String, required: false, max: 100},
    userID: {type: String, required: true, max: 100},
});

// Export the model
module.exports = mongoose.model('toDo', ToDoSchema);