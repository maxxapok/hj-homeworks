const fieldset = document.querySelector('.list-block');
const inputCollection = document.querySelectorAll('[type = checkbox]');
const outputText = document.querySelector('output');
let counter = 0;

  for (let item of inputCollection) {
    item.addEventListener('input', getChecked);
  }; 

function getChecked(event) {
if (event.currentTarget.checked) {
	counter ++;
	} else {
		counter --;
	}
outputText.value = counter + " of " + inputCollection.length;
ifCompleted();
}

  document.addEventListener('DOMContentLoaded', showCounter);

  function showCounter(event) {
  	for (let item of inputCollection) {
  		if (item.checked) {
  			counter++;
  		}
  	}
  	outputText.value = counter + " of " + inputCollection.length;
  	ifCompleted();
  }

  function ifCompleted() {
  	if (counter === inputCollection.length) {
  		fieldset.classList.add('complete');
  	} else {
  		fieldset.classList.remove('complete');
  	}
  }
