const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    name : {
        type: String,
        default: ""
    },

    author: {
        type: mongoose.Schema.ObjectId,
        default: {},
        required: true,
    },

    description: {
        type: String,
        default: "",
    },

    hours: {
        type: Number
    },

    members:[
        {
            type: mongoose.Schema.ObjectId,
            default: {}
        }
    ],

});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;