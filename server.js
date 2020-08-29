var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://leixollrwwwwsi:fd0202741572ae0683f4f40d9033c008834fdfcfee688b913edfd3b48c8b66ab@ec2-54-86-57-171.compute-1.amazonaws.com:5432/dchc4hv12gluia",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * From xcapehint;', (err, res) => {
  if (err) throw err;
  let hint = res.rows;
  for (let row of res.rows) {
    console.log(JSON.stringify(row.them));
  }
  client.end();
});

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket){
  console.log('user connected: ', socket.id);

  socket.on('join send', function(group){
    socket.join(group);
    console.log(socket.adapter.rooms);
    // io.emit('join receive', data);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected: ', socket.id);
  });

  socket.on('send message', function(name,text,group){
    var msg = name + ' : ' + text;
    console.log(msg);
    io.sockets.in(group).emit('receive message', {roomNum : name, contents : text, group : group});
  });

  socket.on('restart clock', function(data, group){
    console.log(data);
    io.sockets.in(group).emit('restart clock', data, group);
  });

  socket.on('paused clock', function(data,group){
    console.log(data);
    io.sockets.in(group).emit('paused clock', data,group);
  });

  socket.on('reset clock', function(data, group){
    io.sockets.in(group).emit('reset clock', {roomNum : data, group : group});
  });

  socket.on('start room', function(data1, data2, group){
    var data = data1 + ' : ' + data2;
    console.log(data);
    io.sockets.in(group).emit('start room', {roomNum : data1, time : data2, group : group});
  });

  socket.on('confirm server', function(data1, group){
    console.log(data1);
    io.sockets.in(group).emit('confirm client', {roomNum : data1, group : group});
  });

  socket.on('active room', function(data, group){
    console.log(data);
    io.sockets.in(group).emit('active room', data,group);
  });

  socket.on('already started', function(data, group){
    console.log(data);
    io.sockets.in(group).emit('already started', data,group);
  });

  socket.on('if started', function(group){
    console.log("if started!!!");
    io.sockets.in(group).emit('if started',group);
  });

  socket.on('before started', function(data1, data2, data3, group){
    console.log(data1);
    io.sockets.in(group).emit('before started', {roomNum : data1, min : data2, sec : data3, group : group});
  });

  socket.on('send modal', function(data,group){
    console.log(data);
    io.sockets.in(group).emit('receive modal', data,group);
  });

  socket.on('check alert', function(group){
    // console.log(data);
    io.sockets.in(group).emit('check alert', group);
  });
});
var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('server on!');
});
