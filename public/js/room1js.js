var minTime = 0;
var secTime = 0;
var running = 0;
var vid = document.getElementById("myVideo"); 

function startPause(number) {
    if (running == 0) {
        running = 1;
        increment();
        // document.getElementById("startPause").innerHTML = "Pause";
    } else {
        running = 0;
        // document.getElementById("startPause").innerHTML = "Resume";
    }
}

function reset() {
    running = 0;
    minTime = 0;
    secTime = 0;
    // document.getElementById("startPause").innerHTML = "Start";
    // document.getElementById("output").innerHTML = "00:00";
}

function increment() {
    if (running == 1) {
        setTimeout(function () {
            minTime++;
            secTime++;
            if (secTime == 600){
                secTime = 0;
            }
            var mins = Math.floor(minTime / 10 / 60);
            var secs = Math.floor(secTime / 10);

            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }

            if (secs == 60){
                secs = "00"
            }

            document.getElementById('output').innerHTML = mins + ":" + secs;
            increment();

        }, 100);
    }
}

vid.onended = function() {
    vid.style.display = "none";
    document.getElementById("clock").style.display = "block";
    increment();
};

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
    if(roomNum == 'room1'){
        $('#chatLog').html('<h1 id="chatMessage" readonly>' + contents + '</h1>');
        // $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
    }
});
socket.on('change name', function(name){
    $('#name').val(name);
});

socket.on('start clock', function(data){
    console.log('start clock room1');
    $("#myVideo").get(0).play();
});

socket.on('end clock', function(data){
    console.log('end clock room1');
    // $("#myVideo").get(0).;
});