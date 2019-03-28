const srcArr = ['mp3/LA Chill Tour.mp3', 'mp3/LA Fusion Jam.mp3', 'mp3/This is it band.mp3'];
const titleArr = ['LA Chill Tour', 'This is it band', 'LA Fusion Jam'];
const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const player = mediaplayer.getElementsByTagName('audio')[0];
const playstateBtn = document.getElementsByClassName('playstate')[0];
const playBtn = document.getElementsByClassName('fa-play')[0];
const pauseBtn = document.getElementsByClassName('fa-pause')[0];
const stopBtn = document.getElementsByClassName('stop')[0];
const backBtn = document.getElementsByClassName('back')[0];
const nextBtn = document.getElementsByClassName('next')[0];
const titleSpan = document.getElementsByClassName('title')[0];
let i = 0;

playBtn.onclick = () => {
	player.play();
	mediaplayer.classList.add('play');
}

pauseBtn.onclick = () => {
	player.pause();
	mediaplayer.classList.remove('play');
}

stopBtn.onclick = () => {
	player.pause();
	player.currentTime = 0;
	mediaplayer.classList.remove('play');
}
nextBtn.onclick = () => {
	i++;
	player.src = srcArr[i];
	titleSpan.title = titleArr[i];
	// console.log(srcArr[i]);
	if (mediaplayer.classList.contains('play')) {
		player.play();
	}
	if (i >= srcArr.length - 1) {
		i = -1;
	}
}

backBtn.onclick = () => {
	i--;
	if (i < 0) {
        i = srcArr.length - 1;
    }
	player.src = srcArr[i];
	titleSpan.title = titleArr[i];
	// console.log(srcArr[i]);
	if (mediaplayer.classList.contains('play')) {
	player.play();
    }
}
