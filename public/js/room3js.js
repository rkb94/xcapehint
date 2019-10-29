var socket = io();
$('#chat').on('submit', function(e){
    socket.emit('send message', $('#name').val(), $('#message').val());
    $('#message').val("");
    $("#message").focus();
    e.preventDefault();
});
socket.on('receive message', function(msg){
    var roomNum = msg.roomNum;
    var contents = msg.contents;
    if(roomNum == 'room3'){
        $('#chatLog').append(contents +'\n');
        $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
    }
});
socket.on('change name', function(name){
    $('#name').val(name);
});