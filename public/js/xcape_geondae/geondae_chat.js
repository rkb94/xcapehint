var socket = io();
var group = 'geondae'

document.addEventListener("DOMContentLoaded", function () { // 페이지가 Refresh 될 때 main에서 시간 초기화
    socket.emit('join send', group);
    console.log(socket.id);
});

window.onbeforeunload = function() { // 새로고침 방지
    return "Dude, are you sure you want to leave? Think of the kittens!";
}

Date.prototype.hhmmss = function() { // 날짜 형식 Format
    var hh = this.getHours().toString();
    var mm = this.getMinutes().toString();
    var ss = this.getSeconds().toString();
    return (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]) + ":" + (ss[1] ? ss : "0" + ss[0]);
}

$('#chat').on('submit', function(e){
    if($('#message').val() != ""){
        socket.emit('send modal', $('#message').val(), group);
    } else {
        alert("메시지 내용을 입력해주세요.");
        $("#message").focus();
    }
    e.preventDefault();
});

socket.on('receive modal', function(msg){
    var startDate = new Date();
    var modalMessage = msg;
    $('#chatLog').append('<div class="messageContents" >' + startDate.hhmmss() + ' : ' + modalMessage +'\n</div>');
    $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
    $('#message').val("");
    $("#message").focus();
})

socket.on('check alert', function(){
    var startDate = new Date();
    $('#chatLog').append('<div class="checkMessageContents" >---------- ' + startDate.hhmmss() +' : 크루가 위 메시지 내용을 확인했습니다. ----------\n</div>');
    $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
})