const mongoose = require('mongoose');

const NucleSchema = new mongoose.Schema({
  name : {         //used like the id
    type: String,
    default: "",
    required: true,
    unique: true
  },

  tasks : [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task" 
  }]

});

const Nucle = mongoose.model("Nucle", NucleSchema);
module.exports = Nucle;