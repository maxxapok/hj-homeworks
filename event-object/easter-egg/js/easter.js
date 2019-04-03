const navig = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
document.addEventListener ('keydown', showNavig);
document.addEventListener ('keydown', showSecret);
function showNavig(event) {
	if (event.code === 'KeyT' && event.ctrlKey && event.altKey) {
		navig.classList.toggle('visible');
	}
}

const rightStringArr = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
let stringArr = [];
let i = 0;
function showSecret(event) {
  stringArr.push(event.code);
  console.log(event.code);
	if (stringArr[i] !== rightStringArr[i]) {
		alert('попробуй еще раз');
		// Try - catch же здесь не подойдет? А ретерн нужен?
		stringArr = [];
		i = 0;
		// return;
	} else {
	  ++i;	
  }
  if (stringArr.join('') === rightStringArr.join('')) {
  		secret.classList.add('visible');
  }
}	
