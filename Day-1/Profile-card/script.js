const toggleBtn = document.getElementById('toggleBtn');
const details = document.getElementById('details');

function toggleDetails() {
    const isOpen = details.classList.contains('open');
    if(isOpen) {
        details.classList.remove('open');
        toggleBtn.textContent = 'Show more';
        toggleBtn.setAttribute('aria-expanded','false');
    } else {
        details.classList.add('open');
        toggleBtn.textContent = 'Show less';
        toggleBtn.setAttribute('aria-expanded','true');
    }
}


toggleBtn.addEventListener('click', toggleDetails);

document.addEventListener('click', (e) => {
    const card = document.getElementById('card');
    if(!card.contains(e.target) && details.classList.contains('open')) {
        details.classList.remove('open');
        toggleBtn.textContent = 'Show more';
        toggleBtn.setAttribute('aria-expanded','false')
    }
});