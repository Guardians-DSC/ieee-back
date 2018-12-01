const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    author: {
        type: Object,
        default: {},
        required: true,
    },

    description: {
        type: String,
        default: "",
        required: true,
    },

    hours: Number,

    members: {
        type: Object,
        default: {}
    },

});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;