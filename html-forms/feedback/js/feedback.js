const contentForm = document.querySelector('.contentform');
const buttonContactCollection = document.querySelectorAll('.button-contact');
buttonContactCollection[0].value = 'send-button';
buttonContactCollection[1].value = 'change-button';
const sendBtn = buttonContactCollection[0];
const changeBtn = buttonContactCollection[1];
const outputText = document.querySelector('#output');
const inputCollection = document.querySelectorAll('input, textarea');

  contentForm.addEventListener('change', checkContent);

document.addEventListener('DOMContentLoad', checkContent);

function checkContent(event) {

	// Как эту проверку это сделать по-человечьи? А если у нас много элементов будет
	
	if (inputCollection[0].value !== '' &&
	    inputCollection[1].value !== '' && 
	    inputCollection[2].value !== '' && 
	    inputCollection[3].value !== '' && 
	    inputCollection[4].value !== '' && 
		inputCollection[5].value !== '' && 
		inputCollection[6].value !== '' && 
		inputCollection[7].value !== '' && 
		inputCollection[8].value !== '' && 
		inputCollection[9].value !== '' &&
		inputCollection[10].value !== '') {
		sendBtn.removeAttribute('disabled');
	}
	if (inputCollection[0].value === '' || 
		inputCollection[1].value === '' || 
		inputCollection[2].value === '' || 
		inputCollection[3].value === '' || 
		inputCollection[4].value === '' || 
		inputCollection[5].value === '' || 
		inputCollection[6].value === '' || 
		inputCollection[7].value === '' || 
		inputCollection[8].value === '' || 
		inputCollection[9].value === '' ||
		inputCollection[10].value === '') {
		sendBtn.setAttribute('disabled', true);
	}
}
		
sendBtn.addEventListener('click', sendForm);

function sendForm(event) {
	event.preventDefault();
	contentForm.classList.add('hidden');
	outputText.classList.remove('hidden');
	getUserInfo();
  }

  changeBtn.addEventListener('click', changeMessage);
 
function changeMessage(event) {
	contentForm.classList.remove('hidden');
	outputText.classList.add('hidden');
}

function getUserInfo() {
	const outputsCollection = outputText.querySelectorAll('output');
	for (let i = 0; i < outputsCollection.length; ++i) {
		outputsCollection[i].value = inputCollection[i].value;
	}
}

	const zipInput = contentForm.querySelector('[name = zip]');
	
	zipInput.addEventListener('keypress', checkIndex);
	
function checkIndex (event) {
	if (event.charCode && (event.charCode < 48 || event.charCode > 57)) {
	  alert('введите число');
	  event.preventDefault();
	}
}
