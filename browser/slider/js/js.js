const imgArr = ["i/airmax-jump.png", "i/airmax-on-foot.png", "i/airmax-playground.png", "i/airmax-top-view.png", "i/airmax.png"];
const sliderImg = document.getElementById('slider');
let i = 0;
sliderImg.src = imgArr[i];

  	setInterval (() => {
    i++;
    sliderImg.src = imgArr[i];
    if (i >= imgArr.length - 1) {
    	i = -1;
    }
    }, 2000);
    




