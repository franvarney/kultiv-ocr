const {Server} = require('hapi');

const Config = require('../config');

const server = new Server();

server.connection({
  port: parseInt(Config.port, 10)
});

server.start((err) => {
  if (err) throw err;
  console.info('Server starting...');
});

module.exports = server;
