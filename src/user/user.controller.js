const express = require('express');
const router = express.Router();
const userService = require('./user.service');

const AuthMiddleware = require('../auth/auth.middleware');
router.use(AuthMiddleware);

router.post('/', (req, res)=> {
  userService.saveUser(req.body, (response) => {
    res.status(response.status).send(response)
  });
});

router.get('/', (req, res) => {
  userService.getAllUsers((response) => {
    res.status(response.status).send(response);
  });
});

router.get('/:userId', (req, res) => {
  userService.getUserByEmail(req.params.userId, (response) => {
    res.status(response.status).send(response);
  });
});

router.put('/:userId', (req, res) => {
  userService.updateUser(req.params.userId, req.body, (response) => {
    res.status(response.status).send(response);
  });
});

router.delete('/:userId', (req, res) => {
  userService.removeUser(req.params.userId, (response) => {
    res.status(response.status).send(response);
  });
});

module.exports = router;