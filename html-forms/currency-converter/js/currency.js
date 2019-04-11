const content = document.querySelector('#content');
const loader = document.querySelector('#loader');
const selectFrom = document.querySelector('#from');
const selectTo = document.querySelector('#to');
const outputText = document.querySelector('#result');
const source = document.querySelector('#source');

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", onLoad);
xhr.open("GET","https://neto-api.herokuapp.com/currency", true);
xhr.send();
const optionsArr = [];

function onLoad(event) {
	const dataFromJsonArr = JSON.parse(xhr.responseText);
	loader.classList.add('hidden');
	content.classList.remove('hidden');

	for (let item of dataFromJsonArr) {
	  optionsArr.push('<option></option>');
    }	
  selectFrom.innerHTML = optionsArr.join('');
  const optionsCollection = document.querySelectorAll('option');
  console.log(optionsCollection);
  for (let i = 0; i < dataFromJsonArr.length; ++i) {
      optionsCollection[i].title = dataFromJsonArr[i].title;
      optionsCollection[i].value = dataFromJsonArr[i].value; 
      optionsCollection[i].innerHTML = dataFromJsonArr[i].code;
    } 
    selectTo.innerHTML = selectFrom.innerHTML;
    // Можно ли задать selectTo.innerHTML и selectFrom.innerHTML одновременно, а не приравнивать потом? И вообще путаница из-за этого
     getResult();
  }	

document.addEventListener('DOMContentLoaded', showLoader);

  function showLoader(event) {
  	loader.classList.remove('hidden');
  }
    selectFrom.addEventListener('input', getResult);
    selectTo.addEventListener('input', getResult);
    source.addEventListener('input', getResult);
  

  function getResult() {
  	let result = parseInt(selectFrom.value / selectTo.value * source.value).toFixed(2);
  	outputText.value = result;
  	console.log(result);
  }




