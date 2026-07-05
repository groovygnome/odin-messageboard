const db = require('../models/messages');
const { body, validationResult } = require('express-validator');

[
    body('messageText').notEmpty().withMessage('Message is required'),
    body('userName').notEmpty().withMessage('Username is required')
];

async function newMessage(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        await db.insertMessage(req.body.messageText, req.body.userName);
        res.redirect('/');
    } else {
        return res.status(400).render('index', { errors: errors.array(), messages: db.getAllMessages() });
    }
}

module.exports = {
    newMessage
}
