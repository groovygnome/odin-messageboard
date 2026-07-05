const db = require('../models/messages');
const { validationResult } = require('express-validator');

async function newMessage(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        await db.insertMessage(req.body.messageText, req.body.userName);
        res.redirect('/');
    } else {
        return res.status(400).render('index', { errors: errors.array(), messages: await db.getAllMessages() });
    }
}

async function deleteMessages(req, res) {
    await db.deleteMessages();
    res.redirect('/');
}

async function getOneMessage(req, res) {
    const message = await db.getMessage(req.params.id);
    console.log(message);
    res.render('detail', { message: message });
}

module.exports = {
    newMessage,
    deleteMessages,
    getOneMessage
}
