// const soundArr = ["", "i/guggenheim-museum.jpg", "i/headquarters.jpg", "i/IAC.jpg", "i/new-museum.jpg."];
const liCollection = document.getElementsByClassName("drum-kit__drum");
console.log(liCollection);
for (const el of liCollection) {
	const soundPlay = el.getElementsByTagName('audio')[0];
	console.log(soundPlay);
el.onclick = () => {
	soundPlay.play();
	soundPlay.currentTime = 0;
 };
}

// Вопрос. Почему в консоли после каждого клика накапливаются 'AbortError: The operation was aborted"?