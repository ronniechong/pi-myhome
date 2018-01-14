const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const axios = require('axios');

const log = console.log;
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/current/:id', (req, res) => {
  axios
    .get('http://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        id: req.params.id,
        appid: process.env.OPENWEATHERAPI,
        units: 'metric',
      },
    })
    .then((response) => {
      res
        .send(response.data);
    })
    .catch((error) => {
      log(chalk.red(error));
      res.status(404).send(error);
    });
});

module.exports = router;
