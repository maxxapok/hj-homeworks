const list = document.querySelector('.contacts-list');
const listFromJson = loadContacts();
const listArr = JSON.parse(listFromJson);
list.innerHTML = ('<li></li> <li></li> <li></li> <li></li> <li></li>');
// Щито же мы будем делать когда будет много li) Как сделать универсально?
const itemsCollection = document.querySelectorAll('ul.contacts-list li');
for (let i = 0; i < listArr.length; ++i) {
	itemsCollection[i].innerHTML = ('<strong>'+listArr[i].name+'</strong>');
	itemsCollection[i].dataset.email = listArr[i].email;
	itemsCollection[i].dataset.phone = listArr[i].phone;
}
// И вообще мне не нравится, что мне всюду требуются i-е элементы массивов, поэтому не получается сделать через for of. Как этого избежать?