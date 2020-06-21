const express = require('express');
const models = require('../db');
require('dotenv').config();

const PORT = process.env.PORT;

const { addInflow, addOutflow } = models;

const app = express();

app.get('/', (req, res) => {
  console.log('GET /');
  res.sendStatus(200)
});

app.post('/inflows', (req, res) => {
  console.log('POST /inflows');
  const { date, amount, note } = req.body;
  return addInflow({ date, amount, note })
    .then(() => {
      res.sendStatus(201)
    })
})

app.post('/outflows', (req, res) => {
  console.log('POST /outflows');
  const { date, amount, note } = req.body;
  return addOutflow({ date, amount, note })
    .then(() => {
      res.sendStatus(201)
    })
})

app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });