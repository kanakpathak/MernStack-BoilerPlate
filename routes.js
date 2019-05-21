const testOperation = require('./db/controllers/testOperation');
const express = require('express');
const router = express.Router();

router.get('/api', testOperation.getTest);
router.post('/api', testOperation.storeTest);
router.put('/api/:id', testOperation.updateTest);
router.delete('/api/:id', testOperation.deleteTest);

module.exports = router;