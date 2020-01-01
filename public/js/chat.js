var socket = io();
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
        socket.emit('send modal', $('#message').val());
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