const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true },
    date: { 
        type: String, 
        required: true },
    time: { 
        type: String, 
        required: true },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    }
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;