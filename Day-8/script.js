const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const targetDate = new Date('2025-12-31T23:59:59');

function updateTimer () {
    const now = new Date();

    const diff = targetDate - now;

    if (diff <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    const currentDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const currentHour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const currentMin = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const currentSec = Math.floor((diff % (1000 * 60)) / 1000);


    days.textContent = currentDay;
    hours.textContent = currentHour;
    minutes.textContent = currentMin;
    seconds.textContent = currentSec;
}


setInterval(updateTimer,1000);

updateTimer();