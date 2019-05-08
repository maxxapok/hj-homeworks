'use strict';
const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
// divCollection = document.querySelectorAll('.websocket div');

ws.addEventListener('message', selectNumber);

function selectNumber(event) {
	const divCollection = document.querySelectorAll('.websocket div');
	
	for (let item of divCollection) {
	
		item.classList.remove('flip-it');
		if (item.innerText == event.data) {
			item.classList.add('flip-it');

		}
	  }
	}



