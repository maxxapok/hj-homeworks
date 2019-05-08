'use strict';

function selectNumberPool(el) {
	const divCollection = document.querySelectorAll('.pooling div');
	
	for (let item of divCollection) {
	
		item.classList.remove('flip-it');
		if (item.innerText == el) {
			item.classList.add('flip-it');
		}
	  }
	}

  function subscribe() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState != 4) return;

      if ((this.status >= 200) && (this.status < 300)) {
      
        selectNumberPool(parseInt(this.responseText));
        subscribe();
        return;
      }

      if (this.status != 502) {
      	console.log(this.responseText);
      }

      setTimeout(subscribe, 5000);
    }
    xhr.open("GET", 'https://neto-api.herokuapp.com/comet/long-pooling', true);
    xhr.send();
  }

  subscribe();


