'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
connection.addEventListener('open', showBubbles(connection));
document.addEventListener('click', sendClickCoordinates);
function sendClickCoordinates(event) {

  connection.send(JSON.stringify({
    x: event.pageX,
    y: event.pageY
  }));
}