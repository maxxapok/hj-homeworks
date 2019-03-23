const imgArr = ["i/airmax-jump.png", "i/airmax-on-foot.png", "i/airmax-playground.png", "i/airmax-top-view.png", "i/airmax.png"];
console.log(imgArr);
// let i = 0;
const sliderImg = document.getElementById('slider');
sliderImg.src = imgArr[0];

  for (let i = 0; i < imgArr.length; ++i) {
  	setTimeout(() => {
  	console.log(i);
    sliderImg.src = imgArr[i];
    }, 2000);
  }
  if (i === imgArr.length - 1) {
    i = 0;
  }



