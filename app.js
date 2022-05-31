const express = require('express');
const cors = require('cors');
// const routes = require('./api/routes');

const app = express();

app.use(express.json());
app.use(cors());

// app.use('/api', routes);

app.use((_req, res) => {
  res.status(404).send('Endpoint não encontrado');
});

module.exports = { app };
