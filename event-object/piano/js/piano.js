// Вопрос: при зажатых клавишах не работает клик, почему??

const middleArr = ['sounds/middle/first.mp3', 'sounds/middle/second.mp3', 'sounds/middle/third.mp3', 'sounds/middle/fourth.mp3', 'sounds/middle/fifth.mp3'];
const higherArr = ['sounds/higher/first.mp3', 'sounds/higher/second.mp3', 'sounds/higher/third.mp3', 'sounds/higher/fourth.mp3', 'sounds/higher/fifth.mp3'];
const lowerArr = ['sounds/lower/first.mp3', 'sounds/lower/second.mp3', 'sounds/lower/third.mp3', 'sounds/lower/fourth.mp3', 'sounds/lower/fifth.mp3'];
const keysCollection = document.getElementsByTagName('audio');
const liCollection = document.getElementsByTagName('li');
const changeRegister = document.getElementsByTagName('ul')[0]; 


for (let i = 0; i < liCollection.length; i++) {
    liCollection[i].addEventListener('click', function () {
        makeSound(event, i);
    });
}

function makeSound(event, i) {
    let key = keysCollection[i];
    // Key можно получить разными способами. Почему в зависимости от способа меняется звучание - 
    //  в одних случаях (например, если key = keysCollection[0]) при нажатии новой клавиши предыдущая замолкает,
     // в других нет (звук длится, как с педалью). От чего это зависит?

    if(event.altKey) {
        changeRegister.classList.remove('middle', 'lower');
        changeRegister.classList.add('higher');
        key.src = higherArr[i];
    } else if (event.shiftKey) {
        changeRegister.classList.remove('middle', 'higher');
        changeRegister.classList.add('lower');
        key.src = lowerArr[i];
    } else {
        changeRegister.classList.remove('lower', 'higher');
        changeRegister.classList.add('middle');
        key.src = middleArr[i];
    }
    key.play();
};

function ifKeyup() {
	changeRegister.classList.remove('lower', 'higher');
	changeRegister.classList.add('middle');
	for (let i = 0; i < keysCollection.length; i++) {
   		keysCollection[i].src = middleArr[i]; 
	}
}

document.addEventListener('keyup', ifKeyup);

