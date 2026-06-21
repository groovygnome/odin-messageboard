const messages = require('../models/messages');
const { body, validationResult } = require('express-validator');

module.exports = {
    get: (req, res) => {
        res.render('form');
    },
    post: [
        body('messageText').notEmpty().withMessage('Message is required'),
        (req, res) => {
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                messages.push({ text: req.body.messageText, user: req.body.userName, added: new Date() });
                res.redirect('/');
            } else {
                return res.status(400).render('index', { errors: errors.array(), messages: messages });
            }
        },
    ],
};
