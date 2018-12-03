const mongoose = require('mongoose');
const response = require('../../util/responses');
const Task = require('./task.model');


const taskService = (function ()  {
    const _saveTask = async function (task, callback) {
        try {
            //TODO: Módulo de validação de dados vindos do front
            const newTask = await Task.create(task);
            
            return callback(response.ok("Atividade criada com sucesso."));
        } catch (err) {
            return callback(response.badRequest(err.message))
        }
    };

    const _removeTask = async function (taskId, callback) {
        try {
            
            const task = await Task.findByIdAndRemove(
                mongoose.Types.ObjectId(taskId)
                );
                
            if (!task) {
                return callback(
                    response.notFound('Não foi possível encontrar atividade informada.')
                );
            }
            return callback(
                response.ok('Atividade removida com sucesso.')
            );
        } catch (err) {
            return callback(
                response.notFound("Remoção da atividade mal sucedida.")
            );
        }
    }

    const _getAllTasks = async function (callback) {

        Task.find({}, function (err, tasks) {

            if (err) {
                callback(
                    response.notFound('Não foi possivel recuperar atividades')
                );
            } else {
                callback(response.ok("", tasks));
            }
        });
    };

    return {
        saveTask: _saveTask,
        removeTask: _removeTask,
        getAllTasks: _getAllTasks,
    }
    
})();

module.exports = taskService;