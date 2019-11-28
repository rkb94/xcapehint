var socket = io();
var audio = new Audio();
var bgm = new Audio();
var inter4;
var started = false;
audio.src = "/mp3/bell.mp3";
bgm.src = "/mp3/bgm.mp3";
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

$(document).ready(function () { // 페이지가 Refresh 될 때 main에서 시간 초기화
    console.log('start refresh');
    socket.emit('reset clock', '4', 'output4');
    onYouTubeIframeAPIReady();
});

window.addEventListener( 'message', function( e ) {
    if(e.data == 'playYouTube'){
        playYT();
    } else if (e.data == 'resetPage'){
        history.go(0);
    }
} );

function playYT(){
    console.log('start YT');
    var fn = function(){player.playVideo();}
    setTimeout(fn, 1);
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube_video', {
      height: '100%',
      width: '100%',
      videoId: '_JE6zvJeIj0',
      autoplay: 0,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

function onPlayerReady (event) {
    console.log('onPlayerReady 실행');
    // event.target.playVideo();
    // setTimeout(event.target.pauseVideo(), 5000);
}

var playerState;
function onPlayerStateChange (event) {
  playerState = event.data == YT.PlayerState.ENDED ? activeStart() :
    event.data == YT.PlayerState.PLAYING ? '재생 중' :
    event.data == YT.PlayerState.PAUSED ? '일시중지 됨' :
    event.data == YT.PlayerState.BUFFERING ? '버퍼링 중' :
    event.data == YT.PlayerState.CUED ? '재생준비 완료됨' :
    event.data == -1 ? '시작되지 않음' : '예외';

  console.log('onPlayerStateChange 실행: ' + playerState);
}

function activeStart(){
    var roomNum = '4';
    started = true;
    socket.emit('send');
    document.getElementById('youtube_video').style.display = "none";
    document.getElementById("clock").style.display = "block";
    var sixtyMinutes = 60 * 60;
    var display = document.querySelector('#output');
    startTimer(sixtyMinutes, display, 99);
    socket.emit('start room', roomNum, sixtyMinutes);
    // alert("start timer!!");
    console.log("start timer start!!!");
    bgm.play();
    bgm.loop = true;
};

vid.onended = function() {
    activeStart();
}

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

socket.on('active room', function(data){
    if(data == 'room4'){
        console.log('active room1 clock!!!');
        if(document.getElementById('clock').style.display == "none"){
            activeStart();
        } else {
            socket.emit('already started', 'room4');
            console.log("already started room4");
        }
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