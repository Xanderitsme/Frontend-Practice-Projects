const backgroundContainer = document.getElementById('background-container');
const title = document.getElementById('title');
const description = document.getElementById('description');

let clickCounter = 0;
const minTime = 1200;
const maxTime = 3000;

let startTime = 0;

const handleClickEvent = () => {
  if (clickCounter % 2 == 0) {
    title.innerHTML = 'Wait . . .';
    description.innerHTML = '';
    backgroundContainer.style.backgroundColor = 'red';
    setTimeout(startTimer, randomNumber(minTime, maxTime));
    clickCounter++;
  } else {
    if (startTime != 0) {
      const endTime = performance.now();
      title.innerHTML = `Response time: ${endTime - startTime} ms`;
      description.innerHTML = 'Click to retry';
      backgroundContainer.style.backgroundColor = 'rgb(70, 0, 150)';
      clickCounter++;
      startTime = 0;
    }
  }
}

backgroundContainer.addEventListener('click', handleClickEvent);

document.addEventListener('keydown', (event) => {
  if (event.key != 'Enter' &&
    event.key != ' ' &&
    event.key != 'ArrowUp' &&
    event.key != 'ArrowDown' &&
    event.key != 'ArrowLeft' &&
    event.key != 'ArrowRight') {
    return;
  }
  handleClickEvent();
});

function randomNumber(minValue, maxValue) {
  maxValue = maxValue - minValue + 1;
  return Math.floor(Math.random() * (maxValue)) + minValue;
}

function startTimer() {
  title.innerHTML = 'Click!';
  description.innerHTML = '';
  backgroundContainer.style.backgroundColor = 'green';
  startTime = performance.now();
}
