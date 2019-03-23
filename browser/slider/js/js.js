const imgArr = ["i/airmax-jump.png", "i/airmax-on-foot.png", "i/airmax-playground.png", "i/airmax-top-view.png", "i/airmax.png"];
console.log(imgArr);
const sliderImg = document.getElementById('slider');
sliderImg.src = imgArr[0];
setTimeout(() => {
  for (let i = 0; i < imgArr.length; ++i) {
    sliderImg.src = imgArr[i];
  }
  if (i === imgArr.length - 1) {
    i = 0;
  }
}, 5000);
