const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    /**
     * Name of activity
     */
    name : {
        type: String,
        default: "",
        required: true,
    },
    /**
     * Type of activity
     */
    type: {
        type: String,
        default: "",
        required: true,
    },
    /**
     * Optional description
     */
    description: {
        type: String,
        default: "",
        required: false,
    },
    /**
     * Date of completion
     */
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    /**
     * Workload of the activity
     */
    
    workload: {
        type: Number,
        default: 0,
        required: true,
    },

    /**
     * Time of the day it was performed
     */
    time: {
        type: Date,
        default: Date.now,
        requird : true,
    }

});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;