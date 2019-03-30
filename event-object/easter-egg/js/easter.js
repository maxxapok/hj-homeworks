const navig = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
document.addEventListener ('keydown', showNavig);
document.addEventListener ('keydown', showSecret);
function showNavig(event) {
	if (event.code === 'KeyT' && event.ctrlKey && event.altKey) {
		navig.classList.toggle('visible');
	}
}

const stringArr = [];

function showSecret(event) {
  stringArr.push(event.key);
  let stringFromArr = stringArr.join('');
  if (stringFromArr === "нетология" || stringFromArr === "ytnjkjubz") {
  	secret.classList.add('visible');
  }
}

// Вопрос: как поймать ошибку, если начинаем вводить не те символы, и заставить вводить с начала?
