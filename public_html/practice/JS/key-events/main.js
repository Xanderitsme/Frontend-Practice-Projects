const image = document.getElementById('square');

image.style.transition = '0.2s';

let x = 0;
let y = 0;
let size = 1;

const startAnimation = () => {
  let timerId = null;
  const finalX = x + 200;
  const finalY = y + 100;

  timerId = setInterval(frame, 5);

  function frame() {
    if (x >= finalX || y >= finalY) {
      clearInterval(timerId);
    } else {
      x += 1;
      y += 1;
      image.style.left = x + 'px';
      image.style.top = y + 'px';
    }
  }
}

const reset = () => {
  x = 0;
  y = 0;
  size = 1;
  image.style.left = x + 'px';
  image.style.top = y + 'px';
  image.style.scale = size;
}

const movement = 10;
const increase = 0.1;

const move = (event) => {
  switch (event.key) {
    case 'ArrowDown':
      y += movement;
      image.style.top = y + 'px';
      break;
    case 'ArrowUp':
      y -= movement;
      image.style.top = y + 'px';
      break;
    case 'ArrowRight':
      x += movement;
      image.style.left = x + 'px';
      break;
    case 'ArrowLeft':
      x -= movement;
      image.style.left = x + 'px';
      break;
    case '+':
      size += increase;
      image.style.scale = size;
      break;
    case '-':
      size -= increase;
      image.style.scale = size;
      break;
    case 'Enter':
      startAnimation();
      break;
    case 'Escape':
      reset();
      break;
    default: break;
  }
}

document.addEventListener('keydown', move);
