'use strict';
const app = document.querySelector('.app'),
      controls = document.querySelector('.controls'),
      list = document.querySelector('.list'),
      buttonTakePhoto = document.getElementById('take-photo'),
      errorMessage = document.getElementById('error-message');

const photoSound = document.createElement('audio');
photoSound.src = 'https://raw.githubusercontent.com/netology-code/hj-homeworks/master/media/photo-booth/audio/click.mp3';

const video = document.createElement('video');
app.insertBefore(video, controls);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

navigator.mediaDevices
  .getUserMedia({video: true, audio: false})
  .then((stream) => { 
    video.srcObject=stream;
    video.play();
    controls.style.display = 'flex';    
  })
  .catch(err => {
    console.warn(err);
    errorMessage.classList.add('visible');
    errorMessage.innerText = 'Нет доступа к видеокамере!';
  });

function takeFoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  ctx.drawImage(video, 0, 0);
  const src = canvas.toDataURL();  
    
  photoSound.pause();
  photoSound.currentTime = 0;
  photoSound.play(); 
  createPhotoCard(src, 'snapshot.png');  
}


function el(tagName, attributes, children) {
  const element = document.createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.innerText = children;
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }
  return element;
}


function createPhotoCard(src, download) {
  const photoCard =  el('figure', {class: ''}, [
            el('img', {src: src}, ''),
            el('figcaption', {class: ''}, [
              el('a', {href: src, download: download}, [
                el('i', {class: 'material-icons file_download'}, 'file_download') 
              ]),
              el('a', {class: ''}, [
                el('i', {class: 'material-icons file_upload'}, 'file_upload') 
              ]),
              el('a', {class: ''}, [
                el('i', {class: 'material-icons delete'}, 'delete') 
              ])
            ])
         ]);
  
  list.appendChild(photoCard);  
  
  photoCardAddEventListener(photoCard, src);  
}

buttonTakePhoto.addEventListener('click', takeFoto);


function photoCardAddEventListener(photoCard, url) {
  
  const btnDelete = photoCard.querySelector('a i.delete'); 
  btnDelete.addEventListener('click', () => {    
    photoCard.remove();
  });
  
  const btnDownload = photoCard.querySelector('a i.file_download');
  btnDownload.addEventListener('click', () => {
    btnDownload.remove();
  });
  
  const btnUpload = photoCard.querySelector('a i.file_upload');
  
  btnUpload.addEventListener('click', (event) => { 
    event.preventDefault();
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const dataForServer = new FormData();
        dataForServer.append('image', blob); 
       
        fetch('https://neto-api.herokuapp.com/photo-booth', {method: 'POST', body: dataForServer})
          .then(res => {
            console.log(res);
            btnUpload.remove();          
          });
      });      
  });  
}
