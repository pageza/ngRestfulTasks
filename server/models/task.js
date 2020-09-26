const mongoose = require('mongoose');

// Creating the Schema
 const TaskSchema = new mongoose.Schema({
     title: {type: String, required: true},
     description: {type: String, default: '' },
     completed: {type: Boolean, default: false}
 },{timestamps:{createdAt:'createAt',updatedAt:'updatedAt'}})

 // Registering the Schema as a Model
mongoose.model('Task', TaskSchema)