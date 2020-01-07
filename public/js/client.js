var modal = document.getElementById('id01');
var silenceAudio = new Audio('/mp3/silence.mp3');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        silenceAudio.play();
        modal.style.display = "none";
    }
}