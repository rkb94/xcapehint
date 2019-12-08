var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket){
  console.log('user connected: ', socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected: ', socket.id);
  });

  socket.on('send message', function(name,text){
    var msg = name + ' : ' + text;
    console.log(msg);
    io.emit('receive message', {roomNum : name, contents : text});
  });

  socket.on('restart clock', function(data){
    console.log(data);
    io.emit('restart clock', data);
  });

  socket.on('paused clock', function(data){
    console.log(data);
    io.emit('paused clock', data);
  });

  socket.on('reset clock', function(data1, data2){
    var data = data1 + ' : ' + data2;
    console.log(data);
    io.emit('reset clock', {roomNum : data1, output : data2});
  });

  socket.on('start room', function(data1, data2){
    var data = data1 + ' : ' + data2;
    console.log(data);
    io.emit('start room', {roomNum : data1, time : data2});
  });

  socket.on('active room', function(data){
    console.log(data);
    io.emit('active room', data);
  });

  socket.on('already started', function(data){
    console.log(data);
    io.emit('already started', data);
  });

  socket.on('if started', function(){
    // console.log(data);
    io.emit('if started');
  });
  socket.on('before started', function(data){
    console.log(data);
    io.emit('before started', data);
  });
});
var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('server on!');
});
