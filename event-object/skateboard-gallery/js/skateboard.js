const itemsCollection = document.getElementsByTagName('a');
const fullImg = document.getElementsByClassName('gallery-view')[0];

for (let item of itemsCollection) {
	item.addEventListener('click', selectItem);
}
function selectItem(event) {
	event.preventDefault();
	if (this.classList.contains('gallery-current')) {
		return;
	}
	for (let i = 0; i < itemsCollection.length; ++i) {
		itemsCollection[i].classList.remove ('gallery-current');
	}
	this.classList.add('gallery-current');
	fullImg.src = event.currentTarget.href;
}