'use strict';

// Require dependencies
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const app = express();

// ??
app.use(cors());

require('dotenv').config();

const PORT = 3000;

app.get('/location', (request, response) => {
  console.log(request.query);
})