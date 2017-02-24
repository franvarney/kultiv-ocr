const {Server} = require('hapi');

const Config = require('../config');
const Routes = require('./routes');

const server = new Server();

server.connection({
  port: parseInt(Config.PORT, 10)
});

server.route(Routes);

server.start((err) => {
  if (err) throw err;
  console.log('Starting server at', server.info.uri);
});

module.exports = server;
