const express = require('express');
const router = express.Router();
const controller = require('../controllers/xlsxExport');

router.post('/', controller.xlsxExport);

module.exports = router;