const imgArr = ["i/airmax-jump.png", "i/airmax-on-foot.png", "i/airmax-playground.png", "i/airmax-top-view.png", "i/airmax.png"];
console.log(imgArr);
const sliderImg = document.getElementById('slider');
sliderImg.src = imgArr[0];

  for (let i = 0; i < imgArr.length; ++i) {
  	setTimeout (() => {
    sliderImg.src = imgArr[i];
    }, 2000 * i);
 //    if (i >= imgArr.length - 1) {
 //    i = 0;
 // }
}



