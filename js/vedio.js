
//vedio
var playVedio = document.getElementById('playVedio'),
    lightBox = document.querySelector('.videoBox'),
    lbClose = lightBox.querySelector('span'),
    lbVideo = lightBox.querySelector('video');

function showHideLightBox() {
    lightBox.classList.toggle('show-videoBox');

    if (lbVideo.paused) {
        lbVideo.play();
    } else {
        lbVideo.currentTime = 0;
        lbVideo.pause();
    }

}

playVedio.addEventListener('click', showHideLightBox);
lbClose.addEventListener('click', showHideLightBox);




