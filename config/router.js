const taskController = require('../src/task/task.controller');
const userController = require('../src/user/user.controller');
const nucleController = require('../src/nucle/nucle.controller');

module.exports = (app) => {
    app.use('/task', taskController);
    app.use('/user', userController);
    app.use('/nucle', nucleController);
};