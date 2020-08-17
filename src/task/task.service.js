const response = require('../../util/responses');
const Nucle = require('../nucle/nucle.model');
const Task = require('./task.model');

const taskService = (function ()  {

  const _saveTask = async function (taskInfo, callback) {
    try {
      const nucle = await Nucle.findOne({name: taskInfo.nucle});

      if(nucle != undefined){
        const newTask = await Task.create(taskInfo);
        await Nucle.updateOne(nucle, { $push: { tasks: newTask._id } });

        return callback(response.ok(`Atividade '${newTask.name}' criada com sucesso.`, newTask));
      }

      return callback(response.badRequest('Núcleo inexistente.'))
    } catch (err) {
      return callback(response.badRequest(err.message))
    }
  };

  const _getTaskById = async function (taskId, callback) {
    try {
      const task = await Task.findById(taskId);

      if (task)
        return callback(response.ok('', task));

      else 
        return callback(response.notFound('Não foi possivel encontrar a atividades.'));

    } catch (err) {
      return callback(response.badRequest('Erro ao recuperar atividade.'));
    }
  };

  const _getAllTasks = async function (callback) {
    try {
      Task.find({}, function (err, tasks) {
        if (err) 
          return callback(response.notFound('Não foi possível recuperar as atividades.'));
        else 
          return callback(response.ok("", tasks));
      });

    } catch (err) {
      return callback(response.badRequest('Erro ao retornar atividades.'));
    }
  };

  const _updateTask = async function (taskId, updatedInfo, callback) {
    try {
      const task = await Task.findByIdAndUpdate(taskId, updatedInfo, {new: true}, err => {
        if (err) 
          return callback(response.badRequest('Não foi possível atualizar a atividade.'));
      });

      return callback(response.ok('', task));

    } catch (err) {
      return callback(response.badRequest('Erro na atualização.'));
    }
  }

  const _removeTask = async function (taskId, callback) {
    try {
      const task = await Task.findByIdAndDelete(taskId);

      await Nucle.findOneAndUpdate({name: task.nucle}, { $pull: { tasks: task._id } });

      if (!task)
        return callback(response.notFound('Não foi possível encontrar atividade informada.'));

      return callback(response.ok('Atividade removida com sucesso.'));

    } catch (err) {
      return callback (response.notFound('Remoção da atividade mal sucedida.'));
    }
  }

  const _addUser = async function (taskInfo, callback) {
    try {
      const task = await Task.findOneAndUpdate( { _id : taskInfo.taskId, nucle : taskInfo.nucle }, 
      { $addToSet: { users: taskInfo.userEmail } }, err => {
        if (err) 
          return callback(response.badRequest('Não foi possível adicionar o usuário na atividade.'));
      });

      return callback(response.ok('', task));

    } catch (err) {
      return callback(response.badRequest('Erro na atualização.'));
    }
  }
  
  const _removeUser = async function (taskInfo, callback) {
    try {   
      const task = await Task.findOneAndUpdate( { _id : taskInfo.taskId, nucle : taskInfo.nucle }, 
        { $pull: { users: taskInfo.userEmail } }, err => {
          if (err) 
            return callback(response.badRequest('Não foi possível remover o usuário da atividade.'));
        });

      return callback(response.ok('', task));

    } catch (err) {
      return callback(response.badRequest('Erro ao remover usuário da atividade.'));
    }
  }


  return {
    saveTask: _saveTask,
    getTaskById: _getTaskById,
    getAllTasks: _getAllTasks,
    updateTask: _updateTask,
    removeTask: _removeTask,
    addUser: _addUser,
    removeUser: _removeUser
  }
  
})();

module.exports = taskService;