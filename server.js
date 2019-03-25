
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

  client.on('room.join', function(room) {
    console.log(`Client ${client.id} joined room ${room}.`);
    client.join(room);
  });

  client.on("disconnect", function(data) {
    console.log("disconnected", data)
  });
});