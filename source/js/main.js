(() => {
  const pageClass = {
    HEADER_NOJS: 'header--nojs',
    MAIN_CONTAINER_NOJS: 'main__container--nojs',
    FILTER_INPUT_NOJS: 'filter__inputs--nojs',
    HEADER_OPEN: 'header--open',
    BTN_MENU: 'js-btn-menu',
    ACCORDION_CLASS: 'js-btn-accordion',
    ACTIVE_CLASS: '--active',
  };

  const header = document.querySelector('.js-header');
  const mainContainer = document.querySelectorAll('.js-main-container');
  const btnMenu = document.querySelector('.js-btn-menu');
  const accordionBlock = document.querySelector('.js-accordion');
  const accordionBtn = document.querySelectorAll('.js-btn-accordion');
  const accordionItems = document.querySelectorAll('.js-accordion-item');
  const rangeInput = document.querySelector('.js-range-input');

  const toggleMenuHandler = () => {
    header.classList.toggle(pageClass.HEADER_OPEN);
  };

  const toggleAccordionHandler = (evt) => {
    if (evt.target.classList.contains(pageClass.ACCORDION_CLASS)) {
      const target = evt.target.parentElement;
      const activeClass = `${target.dataset.class}${pageClass.ACTIVE_CLASS}`;
      if (target.classList.contains(activeClass)) {
        target.classList.remove(activeClass);
      } else {
        for (let item of accordionItems) {
          if (item.classList.contains(activeClass)) {
            item.classList.remove(activeClass);
          }
        }
        target.classList.add(activeClass);
      }
    }
  };

  if (accordionBlock) {
    for (let btn of accordionBtn) {
      btn.addEventListener('click', toggleAccordionHandler);
    }
  }

  if (rangeInput) {
    rangeInput.classList.remove(pageClass.FILTER_INPUT_NOJS);
  }
  for (let item of mainContainer) {
    item.classList.remove(pageClass.MAIN_CONTAINER_NOJS);
  }
  header.classList.remove(pageClass.HEADER_NOJS);

  btnMenu.addEventListener('click', toggleMenuHandler);
})();
