const taskController = require('../src/task/task.controller');

module.exports = (app) => {
    app.use("/task", taskController);
};