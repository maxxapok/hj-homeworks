'use strict'
const listBlock = document.querySelector('.list-block'),
lies = document.querySelectorAll('.list-block li'),
checkboxes = document.querySelectorAll('.list-block input[type="checkbox"]'),
output = document.querySelector('.list-block output'),
checksAll = checkboxes.length;
let i = 0;


for (let checkbox of checkboxes){
	checkbox.addEventListener('change', change);
}

document.addEventListener("DOMContentLoaded", count);
function count() {
	for(let checkbox of checkboxes){
		if (checkbox.checked){
			i++;
		}
	}
	output.value = i +' из '+ checksAll;
	done();
}

function change (event) {
	 if (event.currentTarget.checked) {
	 	i++;
	 } else {
	 	i--;
	 }
   output.value = i +' из '+ checksAll;
   done(); 
}

function done() {
	if (i === checksAll) {
		listBlock.classList.add('complete');
	} else {
		listBlock.classList.remove('complete');
	}
}

