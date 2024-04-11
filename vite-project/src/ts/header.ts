export function renderHeaderInfo() {
const menu = document.querySelector('.header__menu');
const openButton = document.querySelector('.header__open');
const closeButton = document.querySelector('.header__close');

openButton?.addEventListener('click', () => {
    menu?.classList.toggle('header__menu--hidden');
    openButton.classList.add('header__menu--hidden');
    closeButton?.classList.remove('header__menu--hidden');
});

closeButton?.addEventListener('click', () => {
    menu?.classList.toggle('header__menu--hidden');
    openButton?.classList.remove('header__menu--hidden');
    closeButton.classList.add('header__menu--hidden');
});
}