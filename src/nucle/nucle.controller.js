const express = require('express');
const router = express.Router();
const nucleService = require('./nucle.service');

const AuthMiddleware = require('../auth/auth.middleware');
router.use(AuthMiddleware);

router.post('/', (req, res) => {
  nucleService.saveNucle(req.body, (response) => {
    res.status(response.status).send(response)
  });
});

router.get('/', (req, res) => {
  nucleService.getAllNucles((response) => {
    res.status(response.status).send(response);
  });
});

router.get('/:nucleId', (req, res) => {
  nucleService.getNucleById(req.params.nucleId, (response) => {
    res.status(response.status).send(response);
  });
});

router.put('/:nucleId', (req, res) => {
  nucleService.updateNucle(req.params.nucleId, req.body, (response) => {
    res.status(response.status).send(response);
  });
});

router.delete('/:nucleId', (req, res) => {
  nucleService.removeNucle(req.params.nucleId, (response) => {
    res.status(response.status).send(response);
  }); 
});

module.exports = router;