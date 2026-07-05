const express = require('express');
const router = express.Router();

const controller = require('../controllers/DetailController');

router.get('/:id', controller.getOneMessage);

module.exports = router;
