const btnOpen = document.querySelector('#search-open');
const btnClose = document.querySelector('#search-close');
const search = document.querySelector('.search');

btnOpen.addEventListener('click', () => {
    search.classList.add('active');
    console.log(search);
});

btnClose.addEventListener('click', () => {
    search.classList.remove('active');
    console.log(search);
});
