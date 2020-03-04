var socket = io();
var inter2;
var started = false;
var checkMain = false;
var checkFunction = null;
const roomNum = '2';
const group = "suwon";
const sixtyMinutes = 60 * 60;

$(document).ready(function () { // 페이지가 Refresh 될 때 main에서 시간 초기화
    console.log('start refresh');
    socket.emit('join send', group);
    socket.emit('reset clock', roomNum, 'output2', group);
});

window.addEventListener( 'message', function( e ) {
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
        startTimer(sixtyMinutes, display, 99);
        socket.emit('start room', roomNum, sixtyMinutes, group);
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
    } else {
        console.log("Send start");
        socket.emit('join send', group);
        socket.emit('start room', roomNum, sixtyMinutes, group);
        setTimeout(confirmMain, 1000);
    }
}

socket.on('confirm client', function(msg){
    if(msg.roomNum == roomNum) {
        checkMain = true;
    }
});

socket.on('receive message', function(msg){
    var roomNum = msg.roomNum;
    var contents = msg.contents;
    if(roomNum == 'room2'){
        window.parent.postMessage('receiveHint', '*');
        $('#chatLog').html('<h1 id="chatMessage" readonly>' + contents + '</h1>');        
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
            socket.emit('already started', 'room1', group);
            console.log("already started room1");
        }
    }
});

socket.on('if started', function(group){
    if(started == true){
        var min = document.getElementById('output').innerHTML.slice(0, 2);
        var sec = document.getElementById('output').innerHTML.slice(3, 5);
        socket.emit('before started', 'room2', min, sec, group);
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