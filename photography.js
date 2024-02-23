
function sound() {
let soundBtn = document.getElementById("sound-el");
let mainVid = document.getElementById("img-2697");

    if (mainVid.muted) {
        mainVid.muted = false;
        soundBtn.textContent = "Mute";
    } else {
        mainVid.muted = true;
        soundBtn.textContent = "Unmute";
    }

};

