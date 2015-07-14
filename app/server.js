var Hapi = require('hapi');
var handlebars = require('handlebars');
var server = new Hapi.Server();
var path = require('path');
var route = require('./routes');
var storeMessage = require('./redis.js');

var redis = require('redis');
var client = redis.createClient();

server.connection({
  port: 9000
});

var io = require('socket.io')(server.listener);

server.views({
  engines: {
    html: handlebars
  },
  relativeTo: __dirname,
  path: './views'
});

server.route(route);

io.on('connection', function (socket) {
  socket.on("message", function(data) {
    storeMessage(client, data, function (newData){
      io.emit("emit message", newData);
    });
  });
});

server.start();
