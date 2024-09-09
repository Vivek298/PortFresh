document.addEventListener("DOMContentLoaded", function() {
  const audioPlayer = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const stopBtn = document.getElementById("stop-btn");
  const fileInput = document.getElementById("file-input");

  playBtn.addEventListener("click", function() {
    audioPlayer.play();
  });

  pauseBtn.addEventListener("click", function() {
    audioPlayer.pause();
  });

  stopBtn.addEventListener("click", function() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  });

  fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
  });
});
