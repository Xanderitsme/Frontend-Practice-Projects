const clock = document.getElementById('content');
const limitSeconds = 30;

clock.innerHTML = 'Loading . . .';

let limitTime = new Date();
limitTime.setSeconds(limitTime.getSeconds() + limitSeconds);
console.log(limitTime.toLocaleString());

const updateClock = () => {
  const date = new Date();

  clock.innerHTML = formatTime(date);
  verifyTimer(limitTime);

  function formatTime(date) {
    let time = date;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let moment = (hours >= 12) ? 'pm' : 'am';

    hours = (hours > 12) ? hours - 12 : hours;

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `Actual time: ${hours}:${minutes}:${seconds} ${moment}<br>`;
  }

  function formatZeroes(time) {
    return (time < 10) ? `0${time}` : time;
  }

  function verifyTimer(limitTime) {
    if (new Date().getTime() >= limitTime.getTime()) clock.innerHTML += `<br>Let's gooooo<br>Tea time!!!`;
  }
}

setInterval(updateClock, 1000);