const express = require('express');
const app = express();
const path = require('node:path');
const messageRoute = require('./routes/message');

app.use(express.urlencoded({ extended: true }));

const db = require('./models/messages');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const messages = await db.getAllMessages();
    res.render('index', { messages: messages })
});
app.use('/', messageRoute);
app.use('/new', messageRoute);


const PORT = 3000;
app.listen(PORT, (error) => {

    if (error) {
        throw error;
    }
    console.log(`Mini Message Board app, listening on port ${PORT}`);
});


