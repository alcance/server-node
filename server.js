'use stric';

const express = require('express');

const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Syntax Error!');
});

app.listen(PORT, HOST);
console.log(`Running server: http://${HOST}:${PORT}` )


