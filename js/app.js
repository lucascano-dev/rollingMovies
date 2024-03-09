const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

