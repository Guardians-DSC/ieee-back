const authController = require('../src/auth/auth.controller');
const userController = require('../src/user/user.controller');
const taskController = require('../src/task/task.controller');
const nucleController = require('../src/nucle/nucle.controller');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/user', userController);
    app.use('/task', taskController);
    app.use('/nucle', nucleController);
};