const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function getMessage(searchId) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = ($1)', [searchId]);
    return rows;
}

async function deleteMessages() {
    await pool.query('DELETE FROM messages');
}

async function insertMessage(message, username) {
    await pool.query('INSERT INTO messages (message, username) VALUES ($1, $2)', [message, username]);
}

module.exports = {
    getAllMessages,
    deleteMessages,
    getMessage,
    insertMessage
};
