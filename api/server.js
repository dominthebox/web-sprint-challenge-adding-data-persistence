// build your server here and require it from index.js
const express = require('express');

const resourceRouter = require('./resource/router');
const server = express();

server.use(express.json());
server.use('/api/resources', resourceRouter);

module.exports = server;
