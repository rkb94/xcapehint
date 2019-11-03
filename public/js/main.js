var inter1;
var inter2;
var inter3;
var inter4;
var inter5;

function doNotReload(){
    if( (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode == 116) ) {
        alert("2");
        event.keyCode = 0;
        event.cancelBubble = true;
        event.returnValue = false;
    } 
}
document.onkeydown = doNotReload;

$(document).ready(function () { // 페이지 시작하면 힌트들을 가져오자
    console.log('hint contents ')
    getHintContent();
});

function getHintContent() {
    var i = 0;
    while (hint[i] != null) { // js파일에 있는 힌트들을 이름별로 바인딩
        $('.' + hint[i].theme).append(`
            <button onclick="clickHint('` + hint[i].theme + `', '` + hint[i].hintContent + `')" class="btn btn-primary btn-sm btn-block" id="roomHint1-` + hint[i].hintNumber + `">` + hint[i].hintContent + `</button>
        `)
        i++;
    }
}

function clickHint(theme, content) { // 힌트 버튼에 들어가 있는 버튼
    var messageNum = theme.slice(4);
    console.log(messageNum);
    $('#message' + messageNum).val(content);
}

var socket = io();

$('#timestate1').on('submit', function(e){ // 1번 일시정지
    console.log('timestate1 changed!!');
    var startStateButton = document.getElementById('startStateButton1');
    if(startStateButton.value == '다시시작'){
        var output1Min = document.getElementById('output1').innerHTML.slice(0, 2);
        output1Min *= 1;
        var output1Sec = document.getElementById('output1').innerHTML.slice(3);
        output1Sec *= 1;
        var output1Dur = (output1Min * 60) + output1Sec;
        socket.emit('restart clock', 'room1');
        startTimer(output1Dur, document.querySelector('#output1'));
        startStateButton.className = 'btn btn-default btn-danger';
        startStateButton.value = '일시정지';
    } else {
        pausedTimer(inter1);
        socket.emit('paused clock', 'room1');
        startStateButton.className = 'btn btn-default btn-success';
        startStateButton.value = '다시시작';
    }
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

socket.on('start room', function(data){ // 방 번호 룸에서 시작을 누르면 해당 번호의 타이머 시작 & 버튼 시작 전에서 일시정지로 바꾸자
    var roomNum = data.roomNum;
    var time = data.time;
    console.log('room' + roomNum + ' start!!!');
    var display = document.querySelector('#output'+roomNum);
    var startStateButton = document.getElementById('startStateButton'+roomNum);
    startStateButton.type = 'submit';
    startStateButton.className = 'btn btn-default btn-danger';
    startStateButton.value = '일시정지';
    startTimer(time, display)
});

// room2 기묘한 날개짓

// room3 숨바꼭질

// room4 제물의 밤

// room5 그 남자 그 여자

Date.prototype.hhmmss = function() { // 날짜 형식 Format
    var hh = this.getHours().toString();
    var mm = this.getMinutes().toString();
    var ss = this.getSeconds().toString();
    return (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]) + ":" + (ss[1] ? ss : "0" + ss[0]);
}

socket.on('receive message', function(msg){ // 메시지 방 어디껀지 콤바인하고, chatLog에 입력
    var roomNum = msg.roomNum;
    var roomInt = roomNum.slice(4);
    var contents = msg.contents;
    var roomName;
    var d = new Date();
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
    $('#chatLog'+roomInt).append('[' + d.hhmmss() + ']' +' : ' + contents+'\n');
    $('#chatLog'+roomInt).scrollTop($('#chatLog'+roomInt)[0].scrollHeight);
});

function startTimer(duration, display) { // 타이머...인데 일시정지 재시작을 어떻게 짤까?
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
    // var inter = setInterval(timer, 10);
    console.log(display.id);
    switch(display.id) {
        case 'output1':
            inter1 = setInterval(timer, 10);
            break;
        case 'output2':
            inter2 = setInterval(timer, 10);
            break;
        case 'output3':
            inter3 = setInterval(timer, 10);
            break;
        case 'output4':
            inter4 = setInterval(timer, 10);
            break;
        case 'output5':
            inter5 = setInterval(timer, 10);
            break;
        default:
            console.log("error about timer select");
            break;
    }
}

function pausedTimer(display){ // inter + number의 타이머를 일시 정지!!
    console.log(display + ' paused!!');
    clearInterval(display);
}

socket.on('reset clock', function(data){ // 방 번호 룸에서 시작을 누르면 해당 번호의 타이머 시작 & 버튼 시작 전에서 일시정지로 바꾸자
    console.log("room" + data.roomNum + " reset timer!! in " + data.inter);
    switch(data.output) {
        case 'output1':
            clearInterval(inter1);
            document.getElementById(data.output).innerHTML = '70:00';
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output2':
            clearInterval(inter2);
            document.getElementById(data.output).innerHTML = '60:00';
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output3':
            clearInterval(inter3);
            document.getElementById(data.output).innerHTML = '60:00';
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output4':
            clearInterval(inter4);
            document.getElementById(data.output).innerHTML = '60:00';
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output5':
            clearInterval(inter5);
            document.getElementById(data.output).innerHTML = '60:00';
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        default:
            console.log("error about reset timer");
            break;
    }
});