const messages = require('../models/messages');

module.exports = {
    get: (req, res) => {
        res.render('form');
    },
    post: (req, res) => {
        messages.push({ text: req.body.messageText, user: req.body.userName, added: new Date() });
        res.redirect('/');
    },
};
