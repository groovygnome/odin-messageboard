const express = require('express');
const router = express.Router();


const controller = require('../controllers/MessageController');

router.get('/', (req, res) => {
    res.render('form');
});
router.post('/', controller.newMessage);

module.exports = router;
