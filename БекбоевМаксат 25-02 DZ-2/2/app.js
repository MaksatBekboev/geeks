const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

let seconds = 0;
let intervalId;

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  timerElement.textContent = formatTime(seconds);

  if (seconds % 60 === 0) {
    const minutes = seconds / 60;
    messageElement.textContent = `Прошло ${minutes} ${getMinutesLabel(minutes)}`;
  } else {
    messageElement.textContent = '';
  }

  if (seconds >= 300) {
    stopTimer();
    messageElement.textContent = 'Время вышло!';
  }

  seconds++;
}

function getMinutesLabel(minutes) {
    let label;
  
    if (minutes === 1) {
      label = 'минута';
    } else if (minutes >= 2 && minutes <= 4) {
      label = 'минуты';
    } else {
      label = 'минут';
    }
  
    return label;
  }

function startTimer() {
    if (intervalId) {
      return;
    }
  
    intervalId = setInterval(updateTimer, 1000);
  }
  
  function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
  }
  
  function resetTimer() {
    seconds = 0;
    updateTimer();
    messageElement.textContent = '';
  }
  
  startButton.addEventListener('click', startTimer);
  
  resetButton.addEventListener('click', resetTimer);
  