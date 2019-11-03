var socket = io();
var vid = document.getElementById("myVideo"); 
var audio = new Audio();
var inter4;
audio.src = "/mp3/bell.mp3";

$(document).ready(function () { // 페이지가 Refresh 될 때 main에서 시간 초기화
    console.log('start refresh');
    socket.emit('reset clock', '4', 'output4');
});

vid.onended = function() {
    var roomNum = '4';
    socket.emit('send');
    vid.style.display = "none";
    document.getElementById("clock").style.display = "block";
    var sixtyMinutes = 60 * 60;
    var display = document.querySelector('#output');
    startTimer(sixtyMinutes, display, 99);
    socket.emit('start room', roomNum, sixtyMinutes);
    console.log("start timer start!!!");
};

socket.on('receive message', function(msg){
    var roomNum = msg.roomNum;
    var contents = msg.contents;
    if(roomNum == 'room4'){
        $('#chatLog').html('<h1 id="chatMessage" readonly>' + contents + '</h1>');        
        audio.play();
    }
});

socket.on('restart clock', function(data){
    console.log(data + 'restart room4');
    if(data == 'room4'){
        console.log('restart clock room4');
        var output4Min = document.getElementById('output').innerHTML.slice(0, 2);
        output4Min *= 1;
        var output4Sec = document.getElementById('output').innerHTML.slice(3, 5);
        output4Sec *= 1;
        var output4Mil = document.getElementById('output').innerHTML.slice(6);
        output4Mil *= 1;
        console.log(output4Min);
        console.log(output4Sec);
        console.log(output4Mil);
        var output4Dur = (output4Min * 60) + output4Sec;
        startTimer(output4Dur, document.querySelector('#output'), output4Mil);
    }
});

socket.on('paused clock', function(data){
    if(data == 'room4'){
        console.log('paused clock room4');
        pausedTimer();
    }
});

function startTimer(duration, display, mil) {
    var start = Date.now(),
        diff,
        minutes,
        seconds,
        miliseconds = mil;
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
            clearInterval(inter4);
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
    inter4 = setInterval(timer, 10);
}

function pausedTimer(){ // inter + number의 타이머를 일시 정지!!
    console.log('inter paused!!');
    clearInterval(inter4);
}