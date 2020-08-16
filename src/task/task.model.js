const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name : {
    type: String,
    default: "",
    required: true,
  },

  type: {
    type: String,
    default: "",
    required: true,
  },

  description: {
    type: String,
    default: "",
    required: false,
  },

  initialDate: {
    type: Date,
  },

  finalDate: {
    type: Date,
  },

  startTime: {
    type: Date,
  },

  closingTime: {
    type: Date,
  },

  workload: {
    type: Number,
    default: 0,
    required: true,
  },

  //Nucle name
  nucle: { 
    type: mongoose.Schema.Types.String,
    ref: "Nucle"
  },

  //Users email
  users: [{ 
    type: mongoose.Schema.Types.String,
    ref: "User" 
  }]

});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;