'use strict';
// const titleCollection = document.querySelectorAll('th');
let count = 0;
function handleTableClick(event) {
  if (event.target.classList.contains('prop__name')) {
  event.target.dataset.sortBy = event.target.dataset.propName;
  if (count % 2 === 0) { 
  	event.target.dataset.dir = 1;
  } else {
  	event.target.dataset.dir = -1;
  }
count++;
sortTable(event.target.dataset.sortBy, event.target.dataset.dir);
  }
}
