const pageClass = {
  HEADER_NOJS: 'header--nojs',
  HEADER_OPEN: 'header--open',
  BTN_MENU: 'js-btn-menu',
};

const header = document.querySelector('.js-header');
const btnMenu = document.querySelector('.js-btn-menu');

const toggleMenuHandler = () => {
  header.classList.toggle(pageClass.HEADER_OPEN);
};

header.classList.remove(pageClass.HEADER_NOJS);

btnMenu.addEventListener('click', toggleMenuHandler);
