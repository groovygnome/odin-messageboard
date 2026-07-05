const db = require('../models/messages');

async function getOneMessage(req, res) {
    const message = await db.getMessage(req.params.id);
    console.log(message);
    res.render('detail', { message: message });
}

module.exports = {
    getOneMessage
};
