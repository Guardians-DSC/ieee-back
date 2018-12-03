const express = require('express');
const router = express.Router();
const taskService = require('./task.service');

router.post('/', (req, res) => {
    taskService.saveTask(req.body, (response) => {
        res.status(response.status).send(response)
    });
});

router.delete('/:taskId', (req, res) => {
    taskService.removeTask(req.params.taskId, (response) => {
        res.status(response.status).send(response);
    });
});

router.get('/', (req, res) => {
    taskService.getAllTasks((response) => {
        res.status(response.status).send(response);
    });
    
});

module.exports = router;