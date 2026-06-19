const express = require('express');
const router = express.Router();

const controller = require('../controllers/DetailController');

router.get('/:index', controller.get);

module.exports = router;
