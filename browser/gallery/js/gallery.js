const imgArr = ["i/breuer-building.jpg", "i/guggenheim-museum.jpg", "i/headquarters.jpg", "i/IAC.jpg", "i/new-museum.jpg."];
console.log(imgArr);
const galleryImg = document.getElementById('currentPhoto');
const prevPhotoButton = document.getElementById('prevPhoto');
const nextPhotoButton = document.getElementById('nextPhoto');
let i = 0;
galleryImg.src = imgArr[0];
nextPhotoButton.onclick = showNextPhoto;
prevPhotoButton.onclick = showPrevPhoto;
function showNextPhoto() {
galleryImg.src = imgArr[i + 1];
i++;
if (i >= imgArr.length - 1) {
i = -1;
}
};
function showPrevPhoto() {
i--;
if (i < 0) {
i = imgArr.length - 1;
}
galleryImg.src = imgArr[i];
};