'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter'),
    counter = document.querySelector('.counter'),
    errors = document.querySelector('.errors');

connection.addEventListener('message', event => {
    let message = JSON.parse(event.data);
    counter.innerText = message.connections;
    errors.innerText = message.errors;
    console.log(event.data);
    console.log(message);
});

window.addEventListener('beforeunload', () => {
    connection.onclose = function() {};
    connection.close(1000, 'Работа закончена');
});