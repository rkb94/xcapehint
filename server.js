var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var count=1;
io.on('connection', function(socket){
  console.log('user connected: ', socket.id);
  // var name = "user" + count++;
  // io.to(socket.id).emit('change name',name);

  socket.on('disconnect', function(){
    console.log('user disconnected: ', socket.id);
  });

  socket.on('send message', function(name,text){
    var msg = name + ' : ' + text;
    console.log(msg);
    io.emit('receive message', { roomNum : name, contents : text});
  });

  socket.on('start clock', function(data){
    console.log(data);
    io.emit('start clock', data);
  });

  socket.on('end clock', function(data){
    console.log(data);
    io.emit('end clock', data);
  });
});
var port = process.env.PORT || 3000;
http.listen(3000, function(){
  console.log('server on!');
});
