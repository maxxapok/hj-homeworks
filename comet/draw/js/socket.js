'use strict';
const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');
window.editor.addEventListener('update', getData);


function getData(event) {
	const blob = event.canvas.toBlob( function(blob) { 
		ws.send(blob);
	});	
}
