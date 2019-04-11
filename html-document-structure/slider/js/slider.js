const slidersCollection = document.querySelectorAll('.slider');
Array.from(slidersCollection).forEach(item => Slider(item));
const slidesCollection = document.querySelectorAll('.slide');

function Slider(container) {
  const next = container.querySelector('[data-action = next]');
  const prev = container.querySelector('[data-action = prev]');
  const first = container.querySelector('[data-action = first]');
  const last = container.querySelector('[data-action = last]');

  next.addEventListener ('click', event => moveSlide(true));
  prev.addEventListener('click', event => moveSlide(false));
  first.addEventListener('click', event => moveToTheOtherEnd(true));
  last.addEventListener('click', event => moveToTheOtherEnd(false));

  // next.addEventListener ('click', event => checkSiblings());
  // prev.addEventListener ('click', event => checkSiblings());
  // first.addEventListener ('click', event => checkSiblings());
  // last.addEventListener ('click', event => checkSiblings());

  container.querySelector('.slide').classList.add('slide-current');
  // const currentSlide = container.querySelector('.slide-current');
  // const slidesCollection = container.querySelectorAll('.slide');

  function moveSlide(isForward) {
    const currentSlide = container.querySelector('.slide-current');
    const activatedSlide = isForward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
    currentSlide.classList.remove('slide-current');
    activatedSlide.classList.add('slide-current');

  //  if (!currentSlide.nextElementSibling) {
 	// next.classList.add('disabled');
 	// prev.classList.remove('disabled');
 	// // next.addEventListener('click', null);
 	// last.classList.add('disabled');
 	// first.classList.remove('disabled');
 	// // last.addEventListener('click', null);
  //  }
  //  if (!currentSlide.previousElementSibling) {
  //  	next.classList.remove('disabled');
  //  	prev.classList.add('disabled');
 	// // prev.addEventListener('click', null);
 	// first.classList.add('disabled');
 	// last.classList.remove('disabled');
 	// // first.addEventListener('click', null);
  //  }
  }
  function moveToTheOtherEnd(isForward) {
  	const currentSlide = container.querySelector('.slide-current');
    const activatedSlide = isForward ? currentSlide.parentElement.firstElementChild : currentSlide.parentElement.lastElementChild;
    currentSlide.classList.remove('slide-current');
    activatedSlide.classList.add('slide-current');
  }
}
