const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const messageValidator = [
    body('messageText').notEmpty().withMessage('Message is required'),
    body('userName').notEmpty().withMessage('Username is required'),
];

const controller = require('../controllers/MessageController');

router.get('/new', (req, res) => {
    res.render('form');
});
router.post('/new', messageValidator, controller.newMessage);
router.post('/delete', controller.deleteMessages);
router.get('/message/:id', controller.getOneMessage);

module.exports = router;
