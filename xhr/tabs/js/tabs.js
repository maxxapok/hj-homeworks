const tabsCollection = document.querySelectorAll('a');
const activeTabContent = document.querySelector('#content');
const preloader = document.querySelector('#preloader');
const xhr = new XMLHttpRequest();

for (let item of tabsCollection) {
	item.addEventListener('click', selectActive);
}

function selectActive(event) {
if (event.currentTarget.classList.contains('active')) {
		return;
	}
for (let item of tabsCollection) {
		event.preventDefault();
		item.classList.remove('active');
  }
  event.currentTarget.classList.add('active');
  preloader.classList.remove('hidden'); 
  const href = event.currentTarget.href;
xhr.open("GET", href, true);
xhr.send();
}

xhr.addEventListener("load", onLoad);
function onLoad(){
	activeTabContent.innerHTML = xhr.response;
	 preloader.classList.add('hidden');
  }

document.addEventListener('DOMContentLoaded', function() {
	const href = tabsCollection[0].href;
	xhr.open("GET", href, true);
    xhr.send();
  }
);
