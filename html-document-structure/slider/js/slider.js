const slidersCollection = document.querySelectorAll('.slider');
Array.from(slidersCollection).forEach(item => Slider(item));
const slidesCollection = document.querySelectorAll('.slide');

function Slider(container) {
  const next = container.querySelector('[data-action = next]');
  const prev = container.querySelector('[data-action = prev]');
  const first = container.querySelector('[data-action = first]');
  const last = container.querySelector('[data-action = last]');

  next.addEventListener ('click', moveSlideForward);
  // next.addEventListener ('click', checkSibling);
  prev.addEventListener('click', moveSlideBack);
  // prev.addEventListener('click', checkSibling);
  first.addEventListener('click', moveToTheEnd);
  // first.addEventListener('click', checkSibling);
  last.addEventListener('click', moveToTheStart);
  // last.addEventListener('click', checkSibling);

function moveSlideForward(event) {
	moveSlide(true);
};
function moveSlideBack(event) {
	moveSlide(false);
};
function moveToTheEnd(event) {
	moveSlide(true);
};
function moveToTheStart(event) {
	moveSlide(false);
};
  
  const start = container.querySelector('.slide');
  start.classList.add('slide-current');
  prev.classList.add('disabled');
  prev.removeEventListener('click', moveSlideBack);


  function moveSlide(isForward) {
    const currentSlide = container.querySelector('.slide-current');
    const activatedSlide = isForward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
    currentSlide.classList.remove('slide-current');
    activatedSlide.classList.add('slide-current');
    prev.classList.remove('disabled');
    prev.addEventListener ('click', moveSlideBack);

// function checkSibling(event) {
   if (!currentSlide.nextElementSibling && currentSlide.previousElementSibling) {
 	next.classList.add('disabled');
 	prev.classList.remove('disabled');
 	next.removeEventListener('click', moveSlideForward);
 	last.classList.add('disabled');
 	first.classList.remove('disabled');
 	first.addEventListener('click', moveToTheEnd)
 	last.removeEventListener('click', moveToTheStart);
   }
   if (!currentSlide.previousElementSibling && currentSlide.nextElementSibling) {
   	next.classList.remove('disabled');
   	prev.classList.add('disabled');
 	prev.addEventListener('click', moveSlideBack);
 	first.classList.add('disabled');
 	last.classList.remove('disabled');
 	first.removeEventListener('click', moveToTheEnd);
 	last.addEventListener('click', moveToTheStart);
    }
  // }
}
  function moveToTheOtherEnd(isForward) {
  	const currentSlide = container.querySelector('.slide-current');
    const activatedSlide = isForward ? currentSlide.parentElement.firstElementChild : currentSlide.parentElement.lastElementChild;
    currentSlide.classList.remove('slide-current');
    activatedSlide.classList.add('slide-current');
  }
}
