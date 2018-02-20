const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 4001 });


server.route(require('./routes/route'));

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw (err);
    }
    console.log('Server started at port 4001');
  });
}
module.exports = server;
