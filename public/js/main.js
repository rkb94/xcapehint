var inter1;
var inter2;
var inter3;
var inter4;
var inter5;
var roomStarted = [false, false, false, false, false, false];
nowTime();
setInterval(nowTime, 1000);

$(document).ready(function () { // 페이지 시작하면 힌트들을 가져오자
    console.log('Get hint contents')
    getHintContent();
    socket.emit('if started');
});

window.onbeforeunload = function() { // 새로고침 방지
    return "Dude, are you sure you want to leave? Think of the kittens!";
}

function getHintContent() {
    var i = 0;
    while (hint[i] != null) { // js파일에 있는 힌트들을 이름별로 바인딩
        if(hint[i].hintNumber != '-'){
            $('.' + hint[i].theme).append(`
                <div class="form-group has-success has-feedback">
                    <div class="input-group">
                        <span class="input-group-addon">` + hint[i].hintNumber + `</span>
                        <button onclick="clickHint('` + hint[i].theme + `', '` + hint[i].hintContent + `')" class="btn btn-primary btn-m btn-block" id="roomHint-` + hint[i].hintNumber + `" style="border-bottom-left-radius : 0; border-top-left-radius : 0;">` + hint[i].hintContent + `</button>
                    </div>
                </div>
            `)
        } else {
            $('.' + hint[i].theme).append(`
                <div class="form-group has-error has-feedback">
                    <div class="input-group">
                        <span class="input-group-addon">` + hint[i].hintContent + `</span>
                    </div>
                </div>
            `)
        }
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

$('#activeStart1').on('submit', function(e){ // 1번 강제 시작
    console.log('activeStart1 start!!');
    socket.emit('active room', 'room1');
    e.preventDefault();
});

$('#timestate2').on('submit', function(e){ // 2번 일시정지
    console.log('timestate2 changed!!');
    var startStateButton = document.getElementById('startStateButton2');
    if(startStateButton.value == '다시시작'){
        var output2Min = document.getElementById('output2').innerHTML.slice(0, 2);
        output2Min *= 1;
        var output2Sec = document.getElementById('output2').innerHTML.slice(3);
        output2Sec *= 1;
        var output2Dur = (output2Min * 60) + output2Sec;
        socket.emit('restart clock', 'room2');
        startTimer(output2Dur, document.querySelector('#output2'));
        startStateButton.className = 'btn btn-default btn-danger';
        startStateButton.value = '일시정지';
    } else {
        pausedTimer(inter2);
        socket.emit('paused clock', 'room2');
        startStateButton.className = 'btn btn-default btn-success';
        startStateButton.value = '다시시작';
    }
    e.preventDefault();
});

$('#activeStart2').on('submit', function(e){ // 2번 강제 시작
    console.log('activeStart2 start!!');
    socket.emit('active room', 'room2');
    e.preventDefault();
});

$('#timestate3').on('submit', function(e){ // 3번 일시정지
    console.log('timestate3 changed!!');
    var startStateButton = document.getElementById('startStateButton3');
    if(startStateButton.value == '다시시작'){
        var output3Min = document.getElementById('output3').innerHTML.slice(0, 2);
        output3Min *= 1;
        var output3Sec = document.getElementById('output3').innerHTML.slice(3);
        output3Sec *= 1;
        var output3Dur = (output3Min * 60) + output3Sec;
        socket.emit('restart clock', 'room3');
        startTimer(output3Dur, document.querySelector('#output3'));
        startStateButton.className = 'btn btn-default btn-danger';
        startStateButton.value = '일시정지';
    } else {
        pausedTimer(inter3);
        socket.emit('paused clock', 'room3');
        startStateButton.className = 'btn btn-default btn-success';
        startStateButton.value = '다시시작';
    }
    e.preventDefault();
});

$('#activeStart3').on('submit', function(e){ // 3번 강제 시작
    console.log('activeStart3 start!!');
    socket.emit('active room', 'room3');
    e.preventDefault();
});

$('#timestate4').on('submit', function(e){ // 4번 일시정지
    console.log('timestate4 changed!!');
    var startStateButton = document.getElementById('startStateButton4');
    if(startStateButton.value == '다시시작'){
        var output4Min = document.getElementById('output4').innerHTML.slice(0, 2);
        output4Min *= 1;
        var output4Sec = document.getElementById('output4').innerHTML.slice(3);
        output4Sec *= 1;
        var output4Dur = (output4Min * 60) + output4Sec;
        socket.emit('restart clock', 'room4');
        startTimer(output4Dur, document.querySelector('#output4'));
        startStateButton.className = 'btn btn-default btn-danger';
        startStateButton.value = '일시정지';
    } else {
        pausedTimer(inter4);
        socket.emit('paused clock', 'room4');
        startStateButton.className = 'btn btn-default btn-success';
        startStateButton.value = '다시시작';
    }
    e.preventDefault();
});

$('#activeStart4').on('submit', function(e){ // 4번 강제 시작
    console.log('activeStart4 start!!');
    socket.emit('active room', 'room4');
    e.preventDefault();
});

$('#timestate5').on('submit', function(e){ // 5번 일시정지
    console.log('timestate5 changed!!');
    var startStateButton = document.getElementById('startStateButton5');
    if(startStateButton.value == '다시시작'){
        var output5Min = document.getElementById('output5').innerHTML.slice(0, 2);
        output5Min *= 1;
        var output5Sec = document.getElementById('output5').innerHTML.slice(3);
        output5Sec *= 1;
        var output5Dur = (output5Min * 60) + output5Sec;
        socket.emit('restart clock', 'room5');
        startTimer(output5Dur, document.querySelector('#output5'));
        startStateButton.className = 'btn btn-default btn-danger';
        startStateButton.value = '일시정지';
    } else {
        pausedTimer(inter5);
        socket.emit('paused clock', 'room5');
        startStateButton.className = 'btn btn-default btn-success';
        startStateButton.value = '다시시작';
    }
    e.preventDefault();
});

$('#activeStart5').on('submit', function(e){ // 5번 강제 시작
    console.log('activeStart5 start!!');
    socket.emit('active room', 'room5');
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

socket.on('start room', function(data){ // 방 번호 룸에서 시작을 누르면 해당 번호의 타이머 시작 & 버튼 시작 전에서 일시정지로 바꾸자
    var roomNum = data.roomNum;
    if(roomStarted[roomNum] == false){
        roomStarted[roomNum] = true;
        var time = data.time;
        console.log('room' + roomNum + ' start!!!');
        var display = document.querySelector('#output'+roomNum);
        var startStateButton = document.getElementById('startStateButton'+roomNum);
        startStateButton.type = 'submit';
        startStateButton.className = 'btn btn-default btn-danger';
        startStateButton.value = '일시정지';
        startTimer(time, display)
        var curRoomName = changeRoomName('room'+roomNum);
        var startDate = new Date();
        document.getElementById('modalContent').innerHTML += '\n [' + startDate.hhmmss() + '] ' + curRoomName + ' 테마가 정상적으로 시작되었습니다.\n';
        document.getElementById('modal').style.display = 'block';
        setTimeout(displayNoneModal, 5000);
    } else {
        console.log(changeRoomName('room'+roomNum) + ' 테마는 다른 곳에서 이미 진행중입니다.');
    }
});

function displayNoneModal(){
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalContent').innerHTML = '';
}

socket.on('already started', function(data){ // 이미 진행중일 경우 모달창 알림
    var roomNum = data;
    var startDate = new Date();
    document.getElementById('modalContent').innerHTML += '\n [' + startDate.hhmmss() + '] ' + changeRoomName(roomNum) + ' 테마는 이미 진행중입니다.\n';
    document.getElementById('modal').style.display = 'block';
    setTimeout(displayNoneModal, 5000);
});

socket.on('before started', function(data){
    var roomNum = data;
    console.log(changeRoomName(roomNum) + ' 테마는 이미 진행중');
})

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
    var d = new Date();
    console.log("receive message!!");
    document.getElementById('chatLog' + roomInt).value += '[' + d.hhmmss() + ']' +' : ' + contents+'\n\n';
    // $('#chatLog'+roomInt).append('[' + d.hhmmss() + ']' +' : ' + contents+'\n\n');
    $('#chatLog'+roomInt).scrollTop($('#chatLog'+roomInt)[0].scrollHeight);
});

function changeRoomName(roomNum){
    var roomName = '';
    switch(roomNum) {
        case 'room1':
            roomName = '501동 사람들';
            return roomName;
        case 'room2':
            roomName = '기묘한 날개짓';
            return roomName;
        case 'room3':
            roomName = '숨바꼭질';
            return roomName;
        case 'room4':
            roomName = '제물의 밤';
            return roomName;
        case 'room5':
            roomName = '그남자 그여자';
            return roomName;
        default:
            console.log("error about roomNum");
            break;
    }
}

function nowTime(){
    var d = new Date();
    var currentDate = d.getFullYear() + "년 " + ( d.getMonth() + 1 ) + "월 " + d.getDate() + "일 ";
    var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 " + d.getSeconds() + "초";
    var result = document.getElementById("currentTimer");
    result.innerHTML = currentDate + " " + currentTime;
}

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
        // if(minutes == 0 && seconds == 0){
        //     console.log('act clearInterval!!!');
        //     document.getElementById("output").innerHTML = "00:00:00";
        //     clearInterval(inter);
        //     return;
        // }

        // if(miliseconds == 0){
        //     miliseconds = 99;
        // }

        if(seconds < 0){
            minutes *= -1;
            seconds *= -1;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = "-" + minutes + ":" + seconds;
        } else {
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
        }
        // miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;
        
        // display.textContent = minutes + ":" + seconds + ":" + miliseconds;
        // --miliseconds;
        
        // if (diff <= 0) {
        //     // add one second so that the count down starts at the full duration
        //     // example 05:00 not 04:59
        //     start = Date.now() + 1000;
        // }
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
    console.log("room" + data.roomNum + " reset timer!! in " + data.output);
    roomStarted[data.roomNum] = false;
    switch(data.output) {
        case 'output1':
            clearInterval(inter1);
            document.getElementById(data.output).innerHTML = '70:00';
            $('#chatLog1').val(''); // 힌트 내용 refresh
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output2':
            clearInterval(inter2);
            document.getElementById(data.output).innerHTML = '60:00';
            $('#chatLog2').val(''); // 힌트 내용 refresh
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output3':
            clearInterval(inter3);
            document.getElementById(data.output).innerHTML = '60:00';
            $('#chatLog3').val(''); // 힌트 내용 refresh
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output4':
            clearInterval(inter4);
            document.getElementById(data.output).innerHTML = '60:00';
            $('#chatLog4').val(''); // 힌트 내용 refresh
            var startStateButton = document.getElementById('startStateButton' + data.roomNum);
            startStateButton.type = 'button';
            startStateButton.className = 'btn btn-default btn-warning';
            startStateButton.value = '시작 전';
            break;
        case 'output5':
            clearInterval(inter5);
            document.getElementById(data.output).innerHTML = '60:00';
            $('#chatLog5').val(''); // 힌트 내용 refresh
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