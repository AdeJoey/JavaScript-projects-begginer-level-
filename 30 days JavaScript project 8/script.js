let song = document.getElementById('song');
let progress = document.getElementById('range');
let play = document.getElementById('play');
let songTitle = document.querySelector('p');


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

//function for the play and pause behaviour
play.addEventListener('click', function (e) {
    if (play.classList.contains('fa-pause')) {
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
    else{
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
})

//updating the function every 5milisecs

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
//function that allows song play from where ever point the user selects
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
}
