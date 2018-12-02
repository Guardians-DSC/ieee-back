const taskController = require('../src/activity/task.controller');

module.exports = (app) => {
    app.use('/task', taskController);
};