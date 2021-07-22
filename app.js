const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!', 'You are doing well!'));
app.get('/', (req, res) => res.send('You are doing well!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
