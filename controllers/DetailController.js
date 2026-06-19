const messages = require('../models/messages');

module.exports = {
    get: (req, res) => {
        res.render('detail', { message: messages[req.params.index], index: req.params.index })
    }
}
