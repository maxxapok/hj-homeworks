thumbPicArr = ['images/thumb/01.jpg', 'images/thumb/02.jpg','images/thumb/03.jpg', 'images/thumb/04.jpg', 'images/thumb/05.jpg'];
fullPicArr = ['images/full/01.jpg', 'images/full/02.jpg','images/full/03.jpg', 'images/full/04.jpg', 'images/full/05.jpg'];

const itemsCollection = document.getElementsByTagName('a');
console.log(itemsCollection);
const fullImg = document.getElementsByClassList('gallery-view')[];
for (let item of itemsCollection) {
	item.addEventListener('click', selectItem);
}
function selectItem(event) {
	if (this.classList.contains('gallery-current')) {
		return;
	}
	for (let item of itemsCollection) {
		event.preventDefault();
		item.classList.remove ('gallery-current');
	}
	this.classList.add('gallery-current');
}