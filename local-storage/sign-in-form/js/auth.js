const formLogin = document.querySelector('.sign-in-htm'),
      formRegistration  = document.querySelector('.sign-up-htm'),
      pathLogin = 'https://neto-api.herokuapp.com/signin',
      pathRegistration = 'https://neto-api.herokuapp.com/signup';

function activatesSendForms(form, path) {
  
  const btnSend = form.querySelector('input[type="submit"]');
  const output = form.querySelector('output');
  
  const successfulMessage = form.classList.contains('sign-in-htm') ? 'авторизован': 'зарегистрирован';
  
  btnSend.addEventListener('click', sendData);
  function sendData(event) {
    event.preventDefault();
    
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
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(data));  
    function onLoad() {
      const response = JSON.parse(xhr.response);
      
      if ('error' in response) {        
        output.innerText = response.message;
      } else {
        output.innerText = `Пользователь ${response.name} успешно ${successfulMessage} `;
      }      
    }
  }
}

activatesSendForms(formLogin, pathLogin);
activatesSendForms(formRegistration, pathRegistration);



