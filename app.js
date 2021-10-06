const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

mongoose
  .connect(
    'mongodb+srv://sunbelt:sohkaniz65@cluster0.c0d1i.mongodb.net/messages?retryWrites=true&w=majority'
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
