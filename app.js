const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded : this is the default data that data has if submitted through a form post request
app.use(bodyParser.json()); // application/json &&&& able to parse json data from incoming request because we expect to communicate with our user in json data form

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

app.use('/feed', feedRoutes);

app.listen(8080);
