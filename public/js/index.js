// menu hamburger

header = document.querySelector('.navbar')
menuIcon = document.querySelector('#menu__icon')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    header.classList.toggle('active');
}

// Categories Select Movement
const select = document.getElementById('categories__select');

select.addEventListener('change', () => {
    const currentSelcted = select.options[select.selectedIndex]
    const catId = currentSelcted.value;
    console.log(catId);
    const section = document.getElementById(`cat__${catId}`);
    section.scrollIntoView();
});