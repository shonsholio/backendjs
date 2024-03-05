const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.list);
router.post('/add', mainController.save);
router.get('/info', mainController.info);

module.exports = router;
