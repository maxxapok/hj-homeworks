// 'use strict';
// const form = document.querySelector('.sign-in-htm');

// form.addEventListener('submit', sendForm);

// function sendForm() {
//  const formData = new FormData(form);
// 	for(const [k,v] of formData) {
// 	console.log(k+': '+v);
//     } 
// const xhr = new XMLHttpRequest();
// xhr.addEventListener('load',(e) => {console.log(xhr.response);
// });
// xhr.open('POST','https://neto-api.herokuapp.com/signin');
// xhr.send(formData);
// }

'use strict';
const form = document.querySelector('.sign-in-htm');
console.log(form);
const sendBtn = form.querySelector('.button');
console.log(sendBtn);

// console.log(sendBtn);
// for (let item of sendBtnCollection) {
form.addEventListener('click', sendForm);
// }

function sendForm(event) {

	console.log('нина иди спать');


 const formData = new FormData(form);
  for(const [k,v] of formData) {
  console.log(k+': '+v);
    } 
const xhr = new XMLHttpRequest();
//xhr.addEventListener('load',(e)=>{console.log(xhr.response);});
xhr.open('POST','https://neto-api.herokuapp.com/signin');
xhr.send(formData);
// const xhr1 = new XMLHttpRequest();
//xhr.addEventListener('load',(e)=>{console.log(xhr.response);});
// xhr1.open('GET','https://neto-api.herokuapp.com/signin');
// xhr1.send();
// console.log(xhr1);

// fetch('https://neto-api.herokuapp.com/signin')
//   .then((res)=>{console.log(res)})
//   .catch((err)=>{console.log(res)});
}