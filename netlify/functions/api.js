const path = require('path');
const app = require(path.join(__dirname, '/../../src/app'));
const serverless = require('serverless-http');

module.exports.handler = serverless(app);