var socket = io();
var vid = document.getElementById("myVideo"); 
var audio = new Audio();
var bgm = new Audio();
var inter2;
var started = false;
audio.src = "/mp3/bell.mp3";
bgm.src = "/mp3/bgm.mp3";

$(document).ready(function () { // 페이지가 Refresh 될 때 main에서 시간 초기화
    console.log('start refresh');
    socket.emit('reset clock', '2', 'output2');
});

function activeStart(){
    var roomNum = '2';
    started = true;
    socket.emit('send');
    vid.style.display = "none";
    vid.style.display = "none";
    vid.style.display = "none";
    document.getElementById("clock").style.display = "block";
    var sixtyMinutes = 60 * 60;
    var display = document.querySelector('#output');
    startTimer(sixtyMinutes, display, 99);
    socket.emit('start room', roomNum, sixtyMinutes);
    // alert("start timer!!");
    console.log("start timer start!!!");
    bgm.play();
    bgm.loop = true;
    vid.style.display = "none";
};

vid.onended = function() {
    activeStart();
}

socket.on('receive message', function(msg){
    var roomNum = msg.roomNum;
    var contents = msg.contents;
    if(roomNum == 'room2'){
        $('#chatLog').html('<h1 id="chatMessage" readonly>' + contents + '</h1>');        
        audio.play();
    }
});

socket.on('restart clock', function(data){
    console.log(data + 'restart room2');
    if(data == 'room2'){
        console.log('restart clock room2');
        var output2Min = document.getElementById('output').innerHTML.slice(0, 2);
        output2Min *= 1;
        var output2Sec = document.getElementById('output').innerHTML.slice(3, 5);
        output2Sec *= 1;
        var output2Mil = document.getElementById('output').innerHTML.slice(6);
        output2Mil *= 1;
        console.log(output2Min);
        console.log(output2Sec);
        console.log(output2Mil);
        var output2Dur = (output2Min * 60) + output2Sec;
        startTimer(output2Dur, document.querySelector('#output'), output2Mil);
    }
});

socket.on('paused clock', function(data){
    if(data == 'room2'){
        console.log('paused clock room2');
        pausedTimer();
    }
});

socket.on('active room', function(data){
    if(data == 'room2'){
        console.log('active room1 clock!!!');
        if(document.getElementById('clock').style.display == "none"){
            activeStart();
        } else {
            socket.emit('already started', 'room1');
            console.log("already started room1");
        }
    }
});

socket.on('if started', function(){
    if(started == true){
        socket.emit('before started', 'room2');
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
            clearInterval(inter2);
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
    inter2 = setInterval(timer, 10);
}

function pausedTimer(){ // inter + number의 타이머를 일시 정지!!
    console.log('inter paused!!');
    clearInterval(inter2);
}