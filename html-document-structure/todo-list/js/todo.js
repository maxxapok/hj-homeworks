'use strict'

const sectionsCollection = document.querySelector('.todo-list');
const doneList = sectionsCollection.querySelector('.done');
const undoneList = sectionsCollection.querySelector('.undone');

const LabelsCollection = sectionsCollection.querySelectorAll('label');

for (let item of LabelsCollection) {
  const itemInput = item.querySelector('input');
  itemInput.addEventListener('click', moveToList);
}

function moveToList(event) {
  event.currentTarget.parentNode.parentNode.classList.contains('done') ?
    undoneList.appendChild(event.currentTarget.parentNode) :
    doneList.appendChild(event.currentTarget.parentNode);
}

// 

// const sectionsCollection = document.querySelector('.todo-list');
// const doneList = sectionsCollection.querySelector('.done');
// const undoneList = sectionsCollection.querySelector('.undone');

// const doneLabelsCollection = doneList.querySelectorAll('label');

// for (let item of doneLabelsCollection) {
// 	item.addEventListener('click', moveToUndoneList);
// }

// function moveToUndoneList(event) {
// 	if (event.currentTarget.firstElementChild.checked) {
//     undoneList.appendChild(event.currentTarget);
//     event.currentTarget.addEventListener('click', moveToDoneList); 
//   }
// }  

// const undoneLabelsCollection = undoneList.querySelectorAll('label');

// for (let item of undoneLabelsCollection) {
// 	item.addEventListener('click', moveToDoneList);
// }

// function moveToDoneList(event) {
// 	if (event.currentTarget.firstElementChild.checked) {
//     doneList.appendChild(event.currentTarget);
//     event.currentTarget.addEventListener('click', moveToUndoneList);
//   }
// }

// 2 раза лейблы перемещается из одного списка в другой и обратно, а третий раз уже нет, почему?





// Второй вариант решения, тоже с косяком, работает со второго клика, а не с первого:

// const sectionsCollection = document.querySelector('.todo-list');
// const doneList = sectionsCollection.querySelector('.done');
// const undoneList = sectionsCollection.querySelector('.undone');

// const LabelsCollection = sectionsCollection.querySelectorAll('label');

// for (let item of LabelsCollection) {
// 	const itemInput = item.querySelector('input');
// 	itemInput.addEventListener('click', moveToList);
// }

// function moveToList(event) {
// 	console.log(event.currentTarget.checked);

// 	event.currentTarget.checked ? undoneList.appendChild(event.currentTarget.parentNode) : doneList.appendChild(event.currentTarget.parentNode);
// 	event.currentTarget.checked ? event.currentTarget.removeAttribute('checked') : event.currentTarget.setAttribute('checked', true);
// }