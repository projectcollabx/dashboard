const express = require('express');

const app = express();

const path = require('path');

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Listening to the port number: http://127.0.0.1:${port}`);
})
