const express = require('express');
const router = express.Router();
const taskService = require('./task.service');

const AuthMiddleware = require('../auth/auth.middleware');
router.use(AuthMiddleware);

router.post('/addUser', (req, res) => {
  taskService.addUser(req.body, (response) => {
    res.status(response.status).send(response)
  });
});

router.delete('/removeUser', (req, res) => {
  taskService.removeUser(req.body, (response) => {
    res.status(response.status).send(response);
  }); 
});

router.post('/', (req, res) => {
  taskService.saveTask(req.body, (response) => {
    res.status(response.status).send(response)
  });
});

router.get('/', (req, res) => {
  taskService.getAllTasks((response) => {
    res.status(response.status).send(response);
  });    
});

router.get('/:taskId', (req, res) => {
  taskService.getTaskById(req.params.taskId, (response) => {
    res.status(response.status).send(response);
  });    
});

router.put('/:taskId', (req, res) => {
  taskService.updateTask(req.params.taskId, req.body, (response) => {
    res.status(response.status).send(response);
  });
});

router.delete('/:taskId', (req, res) => {
  taskService.removeTask(req.params.taskId, (response) => {
    res.status(response.status).send(response);
  }); 
});

module.exports = router;