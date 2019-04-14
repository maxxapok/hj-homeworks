const navig = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
document.addEventListener ('keydown', showNavig);
document.addEventListener ('keydown', showSecret);
function showNavig(event) {
	if (event.code === 'KeyT' && event.ctrlKey && event.altKey) {
		navig.classList.toggle('visible');
	}
}

const rightString = 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ';
let keyString = '';
function showSecret(event) {
	if (rightString.includes(keyString)) {
		keyString += event.code;
	} else {
		keyString = '';
	}
	if (keyString === rightString) {
	secret.classList.add('visible');	
  }
}
