const countDisplay = document.getElementById('count')
const increaseBtn = document.getElementById('incrementBtn');
const decreaseBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');


let count = 0;

function updateCount () {
    countDisplay.textContent = count;
}

increaseBtn.addEventListener('click', function () {
    count = count + 1;
    updateCount();
})

decreaseBtn.addEventListener('click',function () {
    count = count - 1;
    updateCount();
})

resetBtn.addEventListener('click',function () {
    count = 0;
    updateCount();
})