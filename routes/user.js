const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.post('/login', controller.login);

router.post('/logout', controller.logout);

router.post('/register', controller.register);

router.get('/:id/info', controller.info);

router.post('/:id/update', controller.update);

router.post('/:id/unregister', controller.unregister);

module.exports = router;
