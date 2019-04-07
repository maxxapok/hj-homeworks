const addBtnCollection = document.querySelectorAll('.add');
const cartCount = document.querySelector('#cart-count');
const cartTotalPrice = document.querySelector('#cart-total-price')
let itemsCount = 0;
let cartPrice = 0;

for (let addBtn of addBtnCollection) {
  addBtn.addEventListener('click', addToCart);
}

function addToCart(event) {
    cartPrice += parseInt(event.currentTarget.getAttribute('data-price'));
    cartTotalPrice.innerHTML = getPriceFormatted(cartPrice);
    // раскомментила строку 13, с ней так же работает, как и без нее. 
    // Потому что есть parseInt. Ф-я getPriceFormatted не делает погоды, а должна бы 
  	itemsCount++;
  	cartCount.innerHTML = itemsCount;
  	cartTotalPrice.innerHTML = cartPrice;
}
