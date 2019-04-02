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
// cartPrice = getPriceFormatted(event.currentTarget.getAttribute('data-price'));
// А вот с этой функцией у меня почему-то не работает как надо
itemsCount++;
cartCount.innerHTML = itemsCount;
cartTotalPrice.innerHTML = cartPrice;
}
