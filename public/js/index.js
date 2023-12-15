// menu hamburger

header = document.querySelector('.navbar')
menuIcon = document.querySelector('#menu__icon')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    header.classList.toggle('active');
}