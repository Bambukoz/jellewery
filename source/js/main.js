import nouislder from './components/nouislider';
import swiper from './components/swiper';
import menu from './components/menu';
import form from './components/form';
import addModalWindow from './components/add-modal-window';
import loginModalWindow from './components/login-modal-window';
import productCardInput from './components/product-card-input';
import accordion from './components/accordion';
import filter from './components/filter';

(() => {
  const pageClass = {
    HEADER_NOJS: 'header--nojs',
    MAIN_CONTAINER_NOJS: 'main__container--nojs',
    CARD_NOJS: 'product-card--nojs',
  };

  const header = document.querySelector('.js-header');
  const mainContainer = document.querySelectorAll('.js-main-container');
  const productCardBlock = document.querySelector('.js-product-card');

  window.onload = () => {
    nouislder();
    swiper();
    menu();
    form();
    addModalWindow();
    loginModalWindow();
    productCardInput();
    accordion();
    filter();
  };

  for (let item of mainContainer) {
    item.classList.remove(pageClass.MAIN_CONTAINER_NOJS);
  }

  if (productCardBlock) {
    productCardBlock.classList.remove(pageClass.CARD_NOJS);
  }

  header.classList.remove(pageClass.HEADER_NOJS);
})();
