import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');
const dateInput = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let dateNow = new Date();
const date = flatpickr('#datetime-picker', options);

let intervalId = null;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', onStartBtnClick);
dateInput.addEventListener('change', onInputCheck);

function onStartBtnClick(evt) {
  changeBtn(true);

  let dateMs = date.selectedDates[0].getTime();
  let dateNowMs = Date.now();

  console.log('MS :', dateMs);
  console.log('NOW MS:', dateNowMs);
  
  startCount(dateMs);
}

function startCount(dateMs){
  intervalId = setInterval(() => {
    const deltaMs = dateMs - Date.now();
    const afterConvertMs = convertMs(deltaMs);
    if (deltaMs <= 1000){
      this.stopTimer()
    }
    console.log(afterConvertMs);
    updateClockFace(afterConvertMs);
  }, 1000)
  changeBtn(true, true);
}

function onInputCheck() {

    let dateMs = date.selectedDates[0].getTime();
    let dateNowMs = dateNow.getTime();

    if (dateMs <= dateNowMs) {
      Notiflix.Notify.failure("Please choose a date in the future");
        changeBtn(false,true);
    } 
    else {
        changeBtn(false,false);
    }
}


function changeBtn(addInput, add){
  dateInput.disabled = addInput;
  startBtn.disabled = add;
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero (Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero (Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function updateClockFace({ days, hours, minutes, seconds }) {
  dataDays.textContent = days;
  dataHours.textContent = hours;
  dataMinutes.textContent = minutes;
  dataSeconds.textContent = seconds;
}