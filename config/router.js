const taskController = require('../src/task/task.controller');
const userController = require('../src/user/user.controller');


module.exports = (app) => {
    app.use('/task', taskController);
    app.use('/user', userController);
};