'use strict';
// записывам формы и пути в переменные
const formLogin = document.querySelector('.sign-in-htm'),
    formRegistration = document.querySelector('.sign-up-htm'),
    pathLogin = 'https://neto-api.herokuapp.com/signin',
    pathRegistration = 'https://neto-api.herokuapp.com/signup';
// функция активации работы форм
function activatesSendForms(form, path) {
    // находим кнопку и поле вывода
    const btnSend = form.querySelector('input[type="submit"]');
    const output = form.querySelector('output');
    // определяем окончание фразы в случае успешного исхода
    const successfulMessage = form.classList.contains('sign-in-htm') ? 'авторизован' : 'зарегистрирован';
    // навешиваем на кнопку обработчик
    btnSend.addEventListener('click', sendData);

    function sendData(event) {
        event.preventDefault();
        // отправляем данные на сервер в формате json
        const data = {};
        const inputs = form.querySelectorAll('.input');
        for (let input of inputs) {
            let name = input.name;
            let value = input.value;
            data[name] = value;
        }

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', onLoad);
        xhr.open('POST', path);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        function onLoad() {
            // после получения ответа определяем, ошибка ли это 
            // и результат выводим в соответствующее поле
            const response = JSON.parse(xhr.response);

            if ('error' in response) {
                output.innerText = response.message;
            } else {
                output.innerText = `Пользователь ${response.name} успешно ${successfulMessage} `;
            }
        }
    }
}
// активируем формы
activatesSendForms(formLogin, pathLogin);
activatesSendForms(formRegistration, pathRegistration);