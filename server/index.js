require('newrelic');
const fetch = require('node-fetch');
const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(express.json());

app.all('/items', (req, res) => {
  fetch('http://localhost:3001/items', {
    method: req.method,
    headers: req.headers,
    body: JSON.stringify(req.body)
  })
    .then(results => results.json())
    .then(results => res.send(results))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
