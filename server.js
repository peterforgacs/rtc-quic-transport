
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

class Room {
  static join(room, isClient) {
    console.log(`Client ${this.id} joined room ${room} as ${isClient ? 'client' : 'server'}.`);
    this.role = isClient ? 'client' : 'server';
    this.join(room);
    io.in(room).emit('room.join.event', { id: this.id, role: this.role });
  }

  static leave(room) {
    console.log(`Client ${this.id} leaving room ${room}.`);
    this.leave(room);
    io.in(room).emit('room.leave.event', { id: this.id, role: this.role });
  }

  static getAllMembers(room) {
    return new Promise((resolve) => {
      io.of('/').in(room).clients(( error, memberIds ) => {
        if (error){
          console.error(error);
          return resolve([]);
        }
        else {
          const members = memberIds.map(Room.getMemberObject);
          return resolve(members);
        }
      });
    });
  };

  static getMemberObject(memberId) {
    return io.sockets.connected[memberId]
  }

  static async members(room) {
    const membersAll = await Room.getAllMembers(room);
    const membersWithoutSelf = membersAll.filter(member => member.id !== this.id );
    let publicMembers = [];

    if (this.role === 'server'){
      publicMembers = membersWithoutSelf;
    }
    else if (this.role === 'client') {
      publicMembers = membersWithoutSelf.filter(member => member.role === 'server');
    }
    else {
      publicMembers = [];
    }

    publicMembers = publicMembers.map(member => ({ id: member.id, role: member.role }));
    console.log(`Client ${this.id} requesting members of room ${room}.\nPeers: ${publicMembers.length > 0 ? publicMembers : 'none'}`);
    this.emit('room.set.members', publicMembers);
  }
}

io.on('connection', function(client){
  console.log(`Client ${client.id} connected.` );

  client.on('join', function(data){
    console.log('join data', data);
  });

  client.on('private', ({ target, message}) => {
    console.log('sending private message', target, message)
    client.broadcast.to(target).emit('private', message);
  });

  client.on('room.join', Room.join.bind(client) );
  client.on('room.leave', Room.leave.bind(client) );
  client.on('room.get.members', Room.members.bind(client));
  client.on("disconnect", () => console.log(`Disconnect of ${client.id}`));
});