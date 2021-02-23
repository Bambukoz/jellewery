const menu = () => {
  const pageClass = {
    HEADER_OPEN: 'header--open',
  };

  const btnMenu = document.querySelector('.js-btn-menu');
  const header = document.querySelector('.js-header');

  const toggleMenuHandler = () => {
    header.classList.toggle(pageClass.HEADER_OPEN);
  };

  btnMenu.addEventListener('click', toggleMenuHandler);
};

export default menu;
