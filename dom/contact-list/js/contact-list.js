const list = document.querySelector('.contacts-list');
const listFromJson = loadContacts();
const listArr = JSON.parse(listFromJson);
const liArr = [];
for (let i = 0; i < listArr.length; ++i) {
	liArr.push('<li></li>');
    list.innerHTML = liArr.join('');
}

const itemsCollection = document.querySelectorAll('ul.contacts-list li');
for (let i = 0; i < listArr.length; ++i) {
	itemsCollection[i].innerHTML = `<strong>${listArr[i].name}</strong>`;
	itemsCollection[i].dataset.email = listArr[i].email;
	itemsCollection[i].dataset.phone = listArr[i].phone;
}
