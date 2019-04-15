const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    /**
     * Nome da atividade
     */
    name : {
        type: String,
        default: "",
        required: true,
    },
    /**
     * Tipo da atividade
     */
    type: {
        type: String,
        default: "",
        required: true,
    },
    /**
     * Descrição opcional
     * Edit: Mudado para FALSE, visto que é opcional
     */
    description: {
        type: String,
        default: "",
        required: false,
    },
    /**
     * Data de realização
     */
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    /**
     * Carga horária
     */
    //Renomeei Hours para workload (carga horária), pra não haver ambiguidades.
    workload: {
        type: Number,
        default: 0,
        required: true,
    },

    /**
     * Horario em que foi realizado.
     */
    time: {
        type: String,
        default: "00:00:00",
        requird : true,
    }
    /*
    TODO: Relacionar as entidades
    */

});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;