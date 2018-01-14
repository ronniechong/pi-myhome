const express = require('express');
const path = require('path');
const cors = require('cors');

const Weather = require('./weather');
const Site = require('./site');

const app = express();

app.use(cors());
app.use('/static', express.static(path.join(__dirname, '/../../dist/static')));
app.use('/', Site);
app.use('/api/v1/weather', Weather);

module.exports = app;
