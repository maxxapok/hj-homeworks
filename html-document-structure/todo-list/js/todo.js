const sectionsCollection = document.querySelector('.todo-list');
const doneList = sectionsCollection.querySelector('.done');
const undoneList = sectionsCollection.querySelector('.undone');

const doneLabelsCollection = doneList.querySelectorAll('label');

for (let item of doneLabelsCollection) {
	item.addEventListener('click', moveToUndoneList);
}

function moveToUndoneList(event) {
	if (event.currentTarget.firstElementChild.checked) {
    undoneList.appendChild(event.currentTarget);
    event.currentTarget.addEventListener('click', moveToDoneList); 
  }
}  

const undoneLabelsCollection = undoneList.querySelectorAll('label');

for (let item of undoneLabelsCollection) {
	item.addEventListener('click', moveToDoneList);
}

function moveToDoneList(event) {
	if (event.currentTarget.firstElementChild.checked) {
    doneList.appendChild(event.currentTarget);
    event.currentTarget.addEventListener('click', moveToUndoneList);
  }
}

// 2 раза лейблы перемещается из одного списка в другой и обратно, а третий раз уже нет, почему?