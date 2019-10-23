const mongoose = require('mongoose');

/**
 * Defines a core (Núcleo) entity with name, owner and description.
 *
 */
const CoreSchema = new mongoose.Schema({
    
    /**
     * Name of the core
     */
    name: {
        Type: String,
        default: "",
        required: true
    },

    /**
     * Administrator of the core
     * To review
     * TODO
     */
    admin: {
        Type: String,
        default: "root",
        required: true
    },

    /**
     * Brief description of the core
     */
    description: {
        Type: String,
        default: "",
        required: false
    }

})

const Core = mongoose.model("Core", CoreSchema);
module.exports = Core;