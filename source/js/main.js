const pageClass = {
  HEADER_NOJS: 'header--nojs',
  MAIN_CONTAINER_NOJS: 'main__container--nojs',
  FAQ_NOJS: 'faq--nojs',
  HEADER_OPEN: 'header--open',
  BTN_MENU: 'js-btn-menu',
  FAQ_ACTIVE: 'faq__item--active'
};

const header = document.querySelector('.js-header');
const mainContainer = document.querySelector('.js-main-container');
const btnMenu = document.querySelector('.js-btn-menu');
const faqBlock = document.querySelector('.js-faq');
const accordionBtn = document.querySelectorAll('.js-btn-faq');
const accordionItems = document.querySelectorAll('.faq__item');

const toggleMenuHandler = () => {
  header.classList.toggle(pageClass.HEADER_OPEN);
};

header.classList.remove(pageClass.HEADER_NOJS);
mainContainer.classList.remove(pageClass.MAIN_CONTAINER_NOJS);
faqBlock.classList.remove(pageClass.FAQ_NOJS);

const toggleAccordionHandler = (evt) => {
  const target = evt.target.parentElement;
  if (target.classList.contains(pageClass.FAQ_ACTIVE)) {
    target.classList.remove(pageClass.FAQ_ACTIVE);
  } else {
    for (let item of accordionItems) {
      if (item.classList.contains(pageClass.FAQ_ACTIVE)) {
        item.classList.remove(pageClass.FAQ_ACTIVE);
      }
    }
    target.classList.add(pageClass.FAQ_ACTIVE);
  }
};

for (let btn of accordionBtn) {
  btn.addEventListener('click', toggleAccordionHandler);
}

btnMenu.addEventListener('click', toggleMenuHandler);
