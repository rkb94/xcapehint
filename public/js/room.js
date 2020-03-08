var socket = io();
var intervalTimer;
var started = false;
var checkMain = false;
var checkFunction = null;
var startAttemp = 0;
const seventyMinutes = 60 * 70;
const sixtyMinutes = 60 * 60;
const limitTime = roomNum == 1 ? seventyMinutes : sixtyMinutes;

document.addEventListener("DOMContentLoaded", function () { // 페이지가 Refresh 될 때 main에서 시간 초기화
    console.log('start refresh');
    socket.emit('join send', group);
    socket.emit('reset clock', roomNum, group);
    if(document.cookie.match("restartAttemp") != null) {
        activeStart();
        var date = new Date();
        date.setDate(date.getDate() - 1);
        document.cookie = "restartAttemp = FALSE; Expires=" + date.toUTCString();
    }
});

window.addEventListener('message', function(e) {
    if(e.data == 'playStart'){
        activeStart();
    } else if (e.data == 'resetPage'){
        history.go(0);
    }
} );

function activeStart(){
    if(started == false){
        started = true;
        var display = document.querySelector('#output');
        startTimer(limitTime, display, 99);
        socket.emit('start room', roomNum, limitTime, group);
        console.log("start timer start!!!");
        checkFunction = setTimeout(confirmMain, 1000);
    } else {
        console.log("room" + roomNum + "는 이미 시작을 진행했습니다.");
    }
};

function confirmMain() {
    if(checkMain){
        console.log("Success Start!!");
        clearTimeout(checkFunction);
    } else if(startAttemp > 5) {
        document.cookie = "restartAttemp = TRUE;";
        location.reload();
    } else {
        console.log("Send start");
        socket.emit('join send', group);
        socket.emit('start room', roomNum, limitTime, group);
        startAttemp++;
        setTimeout(confirmMain, 1000);
    }
}

socket.on('confirm client', function(msg){
    if(msg.roomNum == roomNum) {
        checkMain = true;
    }
});

socket.on('receive message', function(msg){
    var roomName = msg.roomNum;
    var contents = msg.contents;
    if(roomName == 'room'+roomNum){
        window.parent.postMessage('receiveHint', '*');
        document.querySelector("#chatLog").innerHTML = '<h1 id="chatMessage" readonly>' + contents + '</h1>';
    }
});

socket.on('restart clock', function(data){
    if(data == 'room' + roomNum){
        console.log('restart clock room' + roomNum);
        var output1Min = document.getElementById('output').innerHTML.slice(0, 2);
        output1Min *= 1;
        var output1Sec = document.getElementById('output').innerHTML.slice(3, 5);
        output1Sec *= 1;
        var output1Mil = document.getElementById('output').innerHTML.slice(6);
        output1Mil *= 1;
        console.log(output1Min);
        console.log(output1Sec);
        console.log(output1Mil);
        var output1Dur = (output1Min * 60) + output1Sec;
        startTimer(output1Dur, document.querySelector('#output'), output1Mil);
    }
});

socket.on('paused clock', function(data){
    if(data == 'room' + roomNum){
        console.log('paused clock room' + roomNum);
        pausedTimer();
    }
});

socket.on('active room', function(data){
    if(data == 'room' + roomNum){
        console.log('active room' + roomNum + ' clock!!!');
        if(document.getElementById('clock').style.display == "none"){
            activeStart();
        } else {
            socket.emit('already started', 'room' + roomNum, group);
            console.log("already started room" + roomNum );
        }
    }
});

socket.on('if started', function(group){
    if(started == true){
        var min = document.getElementById('output').innerHTML.slice(0, 2);
        var sec = document.getElementById('output').innerHTML.slice(3, 5);
        socket.emit('before started', roomNum, min, sec, group);
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
            clearInterval(intervalTimer);
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
    intervalTimer = setInterval(timer, 10);
}

function pausedTimer(){ // inter + number의 타이머를 일시 정지!!
    console.log(roomNum + ' inter paused!!');
    clearInterval(intervalTimer);
}