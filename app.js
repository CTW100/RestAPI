const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded : this is the default data that data has if submitted through a form post request
app.use(bodyParser.json()); // application/json &&&& able to parse json data from incoming request because we expect to communicate with our user in json data form

app.use('/feed', feedRoutes);

app.listen(8080);
