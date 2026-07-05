const { Pool } = require('pg');

module.exports = new Pool({
    host: 'localhost',
    user: 'groovygnome',
    database: 'message_board',
    password: '--------',
    port: 5432,
});
