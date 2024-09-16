const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    priority: String,
    type: String,
    color: String,
    userId: mongoose.Schema.Types.ObjectId // Link to User's _id
    });

module.exports = mongoose.model('Task', taskSchema);
