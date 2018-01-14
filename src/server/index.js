const dotenv = require('dotenv');
const chalk = require('chalk');

const log = console.log;
const app = require('./app');

dotenv.config();

const port = process.env.SERVERPORT || 8080;
const server = app.listen(port, () => {
  log(chalk.blue('Express server listening on port', port));
});
