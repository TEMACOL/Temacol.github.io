document.addEventListener("DOMContentLoaded", function () {
    // Primer video
    const playBtn = document.getElementById("playBtn");
    const videoCover = document.getElementById("videoCover");
    const videoFrame = document.getElementById("videoFrame");

    if (playBtn && videoCover && videoFrame) {
        playBtn.addEventListener("click", function () {
            videoCover.style.display = "none";
            videoFrame.style.display = "block";
        });
    }
    // Segundo video
    const playBtn2 = document.getElementById("playBtn2");
    const videoCover2 = document.getElementById("videoCover2");
    const videoFrame2 = document.getElementById("videoFrame2");

    if (playBtn2 && videoCover2 && videoFrame2) {
        playBtn2.addEventListener("click", function () {
            videoCover2.style.display = "none";
            videoFrame2.style.display = "block";
        });
    }
});