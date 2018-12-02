const express = require('express');
const router = express.Router();
const taskService = require('./task.service');

router.post('/', (req, res) => {
    console.log("entrou router.post");
    taskService.saveTask(req.body, (response) => {
        res.status(response.status).send(response)
    });
});

router.delete('/:taskId', (req, res) => {
    taskService.removeTask(req.params.managerId, (response) => {
        res.status(response.status).send(response);
    });
});

router.get('/', (req, res) => {
    console.log("entrou task get");
    taskService.getAllTasks((response) => {
        res.status(response.status).send(response);
    });
    
});

module.exports = router;