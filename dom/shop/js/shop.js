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

// Куда и как нужно применить ф-ю getPriceFormatted? Работает так же и без следующей строки, если использован parseInt
// cartTotalPrice.innerHTML = getPriceFormatted(cartPrice);

itemsCount++;
cartCount.innerHTML = itemsCount;
cartTotalPrice.innerHTML = cartPrice;
}
