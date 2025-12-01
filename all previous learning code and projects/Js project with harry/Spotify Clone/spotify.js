console.log("Welcome To Spotify");

let songIndex = 0;
let audioElement = new Audio("songs/3.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songItems"));
let songItemsPlay = Array.from(document.getElementsByClassName("songItemsPlay"));
let Previous = document.getElementById("Previous");
let Next = document.getElementById("Next");
let playsongName = document.getElementById('playsongName');
let volumeControl = document.getElementById("volumeControl");


const song = [
    { songName: 'Dil Awara', filePath: 'songs/1.mp3', coverPath: 'cover-img/1.jpg' },
    { songName: 'Sidhu-song', filePath: 'songs/2.mp3', coverPath: 'cover-img/2.jpg' },
    { songName: 'Rassian Bndana', filePath: 'songs/3.mp3', coverPath: 'cover-img/3.jpg' },
    { songName: 'Be Mine', filePath: 'songs/4.mp3', coverPath: 'cover-img/4.jpg' }
];

songitems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;

});

const makeAllPlay = () => {
    songItemsPlay.forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    });
}

songItemsPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = song[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        playsongName.innerHTML = song[songIndex].songName;
        updatPlayButton(true);
    });
});

const updateSongItemIcon = (songIndex, isPlaying) => {
    makeAllPlay();
    const currentSongItemPlay = songItemsPlay[songIndex];
    if (isPlaying) {
        currentSongItemPlay.classList.remove("fa-circle-play");
        currentSongItemPlay.classList.add("fa-circle-pause");
    } else {
        currentSongItemPlay.classList.remove("fa-circle-pause");
        currentSongItemPlay.classList.add("fa-circle-play");
    }
};

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        updatPlayButton(true);
        updateSongItemIcon(songIndex, true)
    }
    else {
        audioElement.pause();
        updatPlayButton(false);
        makeAllPlay();
        updateSongItemIcon(songIndex, false)
    }
})

const updatPlayButton = (isPlaying) => {
    if (isPlaying) {
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
}



Next.addEventListener('click', () => {
    songIndex = (songIndex + 1) % song.length;
    audioElement.src = song[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    playsongName.innerHTML = song[songIndex].songName;
    updatPlayButton(true);
    updateSongItemIcon(songIndex, true)

})

Previous.addEventListener('click', () => {
    songIndex = (songIndex - 1 + song.length) % song.length;
    audioElement.src = song[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    playsongName.innerHTML = song[songIndex].songName;
    updatPlayButton(true);
    updateSongItemIcon(songIndex, true)

})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value;
    console.log(`volume : ${audioElement.volume * 100}%`)
})



