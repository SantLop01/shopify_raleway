// scroll section

window.onscroll = () => {
    let filter = document.querySelector('#filter-categories');
    let header = document.querySelector('.page__header');
    let altura = header.offsetHeight;

    filter.classList.toggle('sticky', window.scrollY > altura);
};