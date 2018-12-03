const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name : {
        type: String,
        default: "",
        required: true,
    },

    isMainDirector : {
        type: Boolean,
        required: false,
    },

    role : {
        type: String,
        required: true,
    },

    /*
        TODO: Relacionar as entidades
    */

});

const User = mongoose.model("User", UserSchema);
module.exports = User;