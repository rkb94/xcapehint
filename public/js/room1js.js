var socket = io();
var vid = document.getElementById("myVideo"); 

vid.onended = function() {
    var roomNum = '1';
    socket.emit('send');
    vid.style.display = "none";
    document.getElementById("clock").style.display = "block";
    var seventyMinutes = 60 * 70;
    var display = document.querySelector('#output');
    startTimer(seventyMinutes, display);
    socket.emit('start room', roomNum, seventyMinutes);
    console.log("start timer start!!");
};

socket.on('receive message', function(msg){
    var roomNum = msg.roomNum;
    var contents = msg.contents;
    if(roomNum == 'room1'){
        $('#chatLog').html('<h1 id="chatMessage" readonly>' + contents + '</h1>');
        // $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
    }
});

socket.on('start clock', function(data){
    console.log('start clock room1');
    $("#myVideo").get(0).play();
});

socket.on('end clock', function(data){
    console.log('end clock room1');
});

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds,
        miliseconds = 99;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        if(minutes == 0 && seconds == 0){
            console.log('act clearInterval!!!');
            document.getElementById("output").innerHTML = "00:00:00";
            clearInterval(inter);
            return;
        }

        if(miliseconds == 0){
            miliseconds = 99;
        }

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;
        
        display.textContent = minutes + ":" + seconds + ":" + miliseconds;
        --miliseconds;
        
        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    var inter = setInterval(timer, 10);
}
