const express = require('express');
const router = express.Router();
const controller = require('../controllers/anbar.js');

router.post('/cpuAdd', controller.cpuAdd);
router.get('/cpuGet', controller.cpuGet);
router.post('/mbAdd', controller.mbAdd);
router.get('/mbGet', controller.mbGet);
router.post('/ramAdd', controller.ramAdd);
router.get('/ramGet', controller.ramGet);
router.post('/gpuAdd', controller.gpuAdd);
router.get('/gpuGet', controller.gpuGet);
router.post('/storageAdd', controller.storageAdd);
router.get('/storageGet', controller.storageGet);
router.post('/psuAdd', controller.psuAdd);
router.get('/psuGet', controller.psuGet);
router.post('/caseAdd', controller.caseAdd);
router.get('/caseGet', controller.caseGet);
router.post('/coolerAdd', controller.coolerAdd);
router.get('/coolerGet', controller.coolerGet);
router.post('/caseFanAdd', controller.caseFanAdd);
router.get('/caseFanGet', controller.caseFanGet);
router.post('/monitorAdd', controller.monitorAdd);
router.get('/monitorGet', controller.monitorGet);

module.exports = router;