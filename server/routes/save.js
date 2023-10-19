const express = require('express');
const router = express.Router();
const controller = require('../controllers/save.js');

router.post('/', controller.save);
router.get('/get', controller.get);

module.exports = router;