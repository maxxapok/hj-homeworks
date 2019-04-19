const content = document.querySelector('#content');
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);
xhr.open("GET","https://neto-api.herokuapp.com/book/", true);
xhr.send();

function onLoad (event) {
	const dataFromJsonArr = JSON.parse(xhr.responseText);
	let bookInfo = '';
	for(let item of dataFromJsonArr){
		bookInfo += `<li data-title="${item.title}" data-author="${item.author.name}" data-info="${item.info}" data-price="${item.price}"><img src="${item.cover.small}"></li>`;
	}
	content.innerHTML = bookInfo;
}

// const content = document.querySelector('#content');
// const xhr = new XMLHttpRequest();
// xhr.addEventListener("load", onLoad);
// xhr.open("GET","https://neto-api.herokuapp.com/book/", true);
// xhr.send();
// const liArr = [];

// function onLoad (event) {
// 	const dataFromJsonArr = JSON.parse(xhr.responseText);
// 	for (let item of dataFromJsonArr) {
// 	  liArr.push('<li></li>');
//   }	
//   content.innerHTML = liArr.join('');
  
//   const booksCollection = document.querySelectorAll('li');

// 	for (let i = 0; i < dataFromJsonArr.length; ++i) {
	
//       booksCollection[i].innerHTML = `<img src= ${dataFromJsonArr[i].cover.small}>`;
//       booksCollection[i].dataset.title = dataFromJsonArr[i].title
//       booksCollection[i].dataset.author = dataFromJsonArr[i].author.name;
//       booksCollection[i].dataset.info = dataFromJsonArr[i].info;
//       booksCollection[i].dataset.price = dataFromJsonArr[i].price;   
//   } 
// }










