const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');


startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

const COLOR_DELAY = 1000;

let intervalId = null;

function onStartBtnClick() {
    intervalId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, COLOR_DELAY);
    changeBtnStatus(false, true);
}

function onStopBtnClick() {
    clearInterval(intervalId);
    changeBtnStatus(true, false);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeBtnStatus = (remove, add) => {
    startBtn.disabled = add;
    stopBtn.disabled = remove;
};
