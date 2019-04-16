'use strict';

const titleCollection = document.querySelectorAll('th');
// Почему не пригождается? должна
let count = 0;
function handleTableClick(event) {
  event.currentTarget.dataset.sortBy = event.target.dataset.propName;
  if (count % 2 === 0) { 
  	event.target.dataset.dir = 1;
  } else {
  	event.target.dataset.dir = -1;
  }
count++;
sortTable(event.currentTarget.dataset.sortBy, event.target.dataset.dir);
}

// Работает по клику не только на заголовок, но и любую ячейку столбца, как от этого избавиться?