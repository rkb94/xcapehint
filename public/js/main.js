function startPause(number) {
    console.log('start clock button!!!');
    if (eval("running"+number) == 0) {
        eval("running"+ number + "= 1");
        increment(number);
        $('#startPause'+number).val('일시정지');
    } else {
        eval("running"+ number + "= 0");
        $('#startPause'+number).val('시작');
    }

}

$(document).ready(function () {
    getHintContent();
});

function getHintContent() {
    var i = 0;
    while (hint[i] != null) {
        $('.' + hint[i].theme).append(`
            <button onclick="clickHint('` + hint[i].theme + `', '` + hint[i].hintContent + `')" class="btn btn-primary btn-sm btn-block" id="roomHint1-` + hint[i].hintNumber + `">` + hint[i].hintContent + `</button>
        `)
        i++;
    }
}

function clickHint(theme, content) {
    var messageNum = theme.slice(4);
    console.log(messageNum);
    $('#message' + messageNum).val(content);
}

var socket = io();

$('#clock1Start').on('submit', function(e){
    socket.emit('start clock');
    console.log('client clock 1start');
    startPause(1);
    e.preventDefault();
});

$('#chat1').on('submit', function(e){
    socket.emit('send message', $('#name1').val(), $('#message1').val());
    $('#message1').val("");
    $("#message1").focus();
    e.preventDefault();
});

$('#chat2').on('submit', function(e){
    socket.emit('send message', $('#name2').val(), $('#message2').val());
    $('#message2').val("");
    $("#message2").focus();
    e.preventDefault();
});

$('#chat3').on('submit', function(e){
    socket.emit('send message', $('#name3').val(), $('#message3').val());
    $('#message3').val("");
    $("#message3").focus();
    e.preventDefault();
});

$('#chat4').on('submit', function(e){
    socket.emit('send message', $('#name4').val(), $('#message4').val());
    $('#message4').val("");
    $("#message4").focus();
    e.preventDefault();
});

$('#chat5').on('submit', function(e){
    socket.emit('send message', $('#name5').val(), $('#message5').val());
    $('#message5').val("");
    $("#message5").focus();
    e.preventDefault();
});

// room1 501동
$('#clock1Start').on('submit', function(e){
    socket.emit('start clock');
    console.log('client clock 1start');
    startPause(1);
    e.preventDefault();
});

$('#clock1End').on('submit', function(e){
    socket.emit('end clock', 'success');
    console.log('client clock 1end');
    reset(1);
    e.preventDefault();
});

socket.on('start room', function(data){ // 방 번호 룸에서 시작을 누르면 해당 번호의 타이머 시작
    var roomNum = data.roomNum;
    var time = data.time;
    console.log('room' + roomNum + ' start!!!');
    var display = document.querySelector('#output'+roomNum);
    startTimer(time, display)
});

// room2 기묘한 날개짓
$('#clock2Start').on('submit', function(e){
    socket.emit('start clock', 'success');
    console.log('client clock2 start');
    startPause(2);
    e.preventDefault();
});

$('#clock2End').on('submit', function(e){
    socket.emit('end clock', 'success');
    console.log('client clock2 end');
    reset(2);
    e.preventDefault();
});

// room3 숨바꼭질
$('#clock3Start').on('submit', function(e){
    socket.emit('start clock', 'success');
    console.log('client clock start');
    startPause(3);
    e.preventDefault();
});

$('#clock3End').on('submit', function(e){
    socket.emit('end clock', 'success');
    console.log('client clock end');
    reset(3);
    e.preventDefault();
});

// room4 제물의 밤

$('#clock4Start').on('submit', function(e){
    socket.emit('start clock', 'success');
    console.log('client clock start');
    startPause(4);
    e.preventDefault();
});

$('#clock4End').on('submit', function(e){
    socket.emit('end clock', 'success');
    console.log('client clock end');
    reset(4);
    e.preventDefault();
});

// room5 그 남자 그 여자
$('#clock5Start').on('submit', function(e){
    socket.emit('start clock', 'success');
    console.log('client clock start');
    startPause(5);
    e.preventDefault();
});

$('#clock5End').on('submit', function(e){
    socket.emit('end clock', 'success');
    console.log('client clock end');
    reset(5);
    e.preventDefault();
});

socket.on('receive message', function(msg){
    var roomNum = msg.roomNum;
    var contents = msg.contents;
    var roomName;
    switch(roomNum) {
        case 'room1':
            roomName = '501동';
            break;
        case 'room2':
            roomName = '기묘한';
            break;
        case 'room3':
            roomName = '숨바꼭';
            break;
        case 'room4':
            roomName = '제물밤';
            break;
        case 'room5':
            roomName = '그남녀';
            break;
        default:
            roomName = '잘못된 입력';
            break;
    }
    $('#chatLog').append(roomName + ' : ' + contents+'\n');
    $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
});

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
        // miliseconds = 99
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

        // if(miliseconds == 0){
        //     miliseconds = 99;
        // }

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;
        
        // display.textContent = minutes + ":" + seconds + ":" + miliseconds;
        display.textContent = minutes + ":" + seconds;
        // --miliseconds;
        
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