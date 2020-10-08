const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const UserSchema = new mongoose.Schema({
  email : {         //used like the id
    type: String,
    default: "",
    required: true,
    unique: true
  },

  password : {
    type: String,
    default: "",
    required: true
  },

  name : {
    type: String,
    default: "",
    required: true
  },

  isAdmin : {
    type: Boolean,
    required: false
  },

  department : {
    type: String,
    required: true
  },

  active: {
    type: Boolean
  }

});

const User = mongoose.model("User", UserSchema);
module.exports = User;