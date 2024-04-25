let startNum = 0;
let intervalId; 

document.querySelector('.js-screen').innerHTML = "00" + ":" + "00" + ":" + "00";

document.querySelector('.js-start-btn')
  .addEventListener('click', () => {
    startWatch();
  });

document.querySelector('.js-stop-btn')
  .addEventListener('click', () => {
    stopWatch();
  });

document.querySelector('.js-reset-btn')
  .addEventListener('click', () => {
    startNum = 0;
    document.querySelector('.js-screen').innerHTML = "00" + ":" + "00" + ":" + "00";
  });

function startWatch() {
  intervalId = setInterval(() => {
    startNum += 1;

    let hour = Math.floor(startNum/3600); //1h=3600sec
    let minute = Math.floor((startNum - hour*3600)/60);
    let seconds = startNum - (hour*3600 + minute*60);

    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    
    document.querySelector('.js-screen').innerHTML  = hour + ":" + minute + ":" + seconds;

  }, 1000);
};

function stopWatch() {
  clearInterval(intervalId);
}
