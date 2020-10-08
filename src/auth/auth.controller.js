const express = require('express');
const authService = require('./auth.services');

const router = express.Router();

router.post('/register', async (req, res) => {
  authService.register(req, (response) => {
    res.status(response.status).send(response)
  });
});

router.post('/login', async (req, res) => {
  authService.login(req, (response) => {
    res.status(response.status).send(response)
  });
});

router.get('/checkToken', async (req, res) => {
  authService.checkToken(req, (response) => {
    res.status(response.status).send(response)
  });
});

module.exports = router;