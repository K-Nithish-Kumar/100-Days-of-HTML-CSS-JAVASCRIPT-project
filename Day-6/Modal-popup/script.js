const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');


function openModal () {
    overlay.classList.add('show');
}

function closeModal () {
    overlay.classList.remove('show');
}

openBtn.addEventListener('click' ,openModal);

closeBtn.addEventListener('click',closeModal);

overlay.addEventListener('click', function(event) {
    if(event.target == overlay) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    if(event.key == 'Escape') {
        closeModal();
    }
});