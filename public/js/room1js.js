var socket = io();
var inter1;
var started = false;

$(document).ready(function () { // 페이지가 Refresh 될 때 main에서 시간 초기화
    console.log('start refresh');
    socket.emit('reset clock', '1', 'output1');
});

window.addEventListener( 'message', function( e ) {
    if(e.data == 'playStart'){
        activeStart();
    } else if (e.data == 'resetPage'){
        history.go(0);
    }
} );

function activeStart(){
    var roomNum = '1';
    if(started == false){
        started = true;
        var seventyMinutes = 60 * 70;
        var display = document.querySelector('#output');
        startTimer(seventyMinutes, display, 99);
        socket.emit('start room', roomNum, seventyMinutes);
        console.log("start timer start!!!");
    } else {
        console.log("room" + roomNum + "는 이미 시작을 진행했습니다.");
    }
};

socket.on('receive message', function(msg){
    var roomNum = msg.roomNum;
    var contents = msg.contents;
    if(roomNum == 'room1'){
        window.parent.postMessage('receiveHint', '*');
        $('#chatLog').html('<h1 id="chatMessage" readonly>' + contents + '</h1>');        
    }
});

socket.on('restart clock', function(data){
    console.log(data + 'restart room1');
    if(data == 'room1'){
        console.log('restart clock room1');
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
    if(data == 'room1'){
        console.log('paused clock room1');
        pausedTimer();
    }
});

socket.on('active room', function(data){
    if(data == 'room1'){
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
        socket.emit('before started', 'room1');
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
            clearInterval(inter1);
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
    inter1 = setInterval(timer, 10);
}

function pausedTimer(){ // inter + number의 타이머를 일시 정지!!
    console.log('inter paused!!');
    clearInterval(inter1);
}