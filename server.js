
var app,
express = require('express'),
path = require('path'),
host = process.env.HOST || '127.0.0.1',
port = process.env.PORT || 3000,
root = path.resolve(".");

app = express();
app.use(function(req, res, next) { console.log(req.url); next(); });
app.use(express.static(root + '/public'));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.listen(port, host, serverStarted);

function serverStarted () {
    console.log('Server started', host, port);
    console.log('Root directory', root);
    console.log('Press Ctrl+C to exit...\n');
}

io.on('connection', function(client){
  console.log(`Client ${client.id} connected.` );

  client.on('join', function(data){
    console.log('join data', data);
  });

  client.on('room.join', function(room, isClient) {
    console.log(`Client ${client.id} joined room ${room} as ${isClient ? 'client' : 'server'}.`);
    client.role = isClient ? 'client' : 'server';
    client.join(room);
  });

  client.on('room.leave', function(room) {
    console.log(`Client ${client.id} leaving room ${room}.`);
    client.leave(room);
  });

  client.on('room.get.peers', function(room) {
    if (client.role === 'server'){
      io.of('/').in(room).clients(( error, clients ) => {
        let peers = [];
        if (error){
          console.error(error);
        }
        else {
          peers = clients;
        }

        // Dont include the requester
        let sanitizedPeers = peers.filter(id => id !== client.id);
        console.log(`Client ${client.id} requesting peers in ${room}.\nPeers: ${sanitizedPeers.length > 0 ? sanitizedPeers : 'none'}`
          );
        client.emit('room.set.peers', sanitizedPeers);
      })
    }
    else {
      console.log('Noting')
    }
  });

  client.on("disconnect", function(data) {
    console.log("disconnected", data)
  });
});