'use strict';

// Require dependencies
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const app = express();

app.use(cors());

require('dotenv').config();

const PORT = process.env.PORT;

app.get('/location', (request, response) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${
    request.query.data
  }&key=${process.env.GOOGLE_API_KEY}`;
  return superagent.get(url).then(result => {
    console.log(result.body);
    const locationResult = {
      search_query: request.query.data,
      formatted_query: result.body.results[0].formatted_address,
      latitude: result.body.results[0].geometry.location.lat,
      longitude: result.body.results[0].geometry.location.lng
    };
    response.send(locationResult);
  });
});

//resubmit for credit
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
