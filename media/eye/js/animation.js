'use strict';
const bigBookPupil = document.querySelector('.big-book__pupil'),
      bigBookEye = document.querySelector('.big-book__eye'),
      body = document.querySelector('body');

let currentPositionEye = {x: 0, y: 0};


function moveEye(event) {
  
  const mouseX = event.clientX;
  const mouseY = event.clientY;
 
  let baseDistance = body.clientWidth/2;
  
  const positionAndSizeBody = body.getBoundingClientRect();   
  
  const positionAndSizeBookEye = bigBookEye.getBoundingClientRect();
  currentPositionEye.x = positionAndSizeBookEye.left + (positionAndSizeBookEye.width)/2;
  currentPositionEye.y = positionAndSizeBookEye.top + (positionAndSizeBookEye.height)/2;
 
  const differenceX = mouseX - currentPositionEye.x,
        differenceY = mouseY - currentPositionEye.y,
        
        distance = Math.sqrt(Math.pow(differenceX, 2) + Math.pow(differenceY, 2));  
  
  let ratioEyeSize = distance/baseDistance > 1 ? 1 : distance/baseDistance; 
  
  let ratioEyeball = (distance - positionAndSizeBookEye.width/2)/baseDistance > 1 ? 1 : (distance - positionAndSizeBookEye.width/2)/baseDistance;
  
  const sizePupil = 1 + 2*(1 - ratioEyeball),
        posXEye = 30*ratioEyeSize*differenceX/distance,
        posYEye = 30*ratioEyeSize*differenceY/distance;
  
  
  bigBookPupil.style.setProperty('--pupil-x', posXEye + 'px');
  bigBookPupil.style.setProperty('--pupil-y', posYEye + 'px');
  bigBookPupil.style.setProperty('--pupil-size', sizePupil);
}

document.addEventListener('mousemove', moveEye);