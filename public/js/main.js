var minTime1 = 0;
var secTime1 = 0;
var running1 = 0;

var minTime2 = 0;
var secTime2 = 0;
var running2 = 0;

var minTime3 = 0;
var secTime3 = 0;
var running3 = 0;

var minTime4 = 0;
var secTime4 = 0;
var running4 = 0;

var minTime5 = 0;
var secTime5 = 0;
var running5 = 0;

var minTime6 = 0;
var secTime6 = 0;
var running6 = 0;

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

function reset(number) {
    eval("running"+number+"=0");
    eval("minTime"+number+"=0");
    eval("secTime"+number+"=0");
    $('#startPause'+number).val('시작');
    document.getElementById("output"+number).innerHTML = "00:00";
}

function increment(number) {
    // console.log("increment"+number);
    // console.log(running1);
    if (eval("running"+number) == 1) {
        setTimeout(function () {
            eval("minTime"+number+"++");
            eval("secTime"+number+"++");

            if (eval("secTime"+number) == 600){
                eval("secTime"+number+"= 0");
            }
            var mins = Math.floor(eval("minTime"+number) / 10 / 60);
            var secs = Math.floor(eval("secTime"+number) / 10);

            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            if (secs == 60){
                console.log("secs changed");
                secs = "00"
            }

            document.getElementById('output'+number).innerHTML = mins + ":" + secs;
            increment(number);

        }, 100);
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
    socket.emit('start clock', 'success');
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
    $('#chatLog').append(roomNum + ' : ' + contents+'\n');
    $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
});
socket.on('change name', function(name){
    $('#name').val(name);
});