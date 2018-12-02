const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    name : {
        type: String,
        default: "",
        required: true,
    },

    description: {
        type: String,
        default: "",
        required: true,
    },

    hours: {
        type: Number,
        default: 0,
        required: true,
    },

});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;