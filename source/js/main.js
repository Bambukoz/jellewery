(() => {
  const pageClass = {
    PAGE__LOCKED: 'page--locked',
    HEADER_NOJS: 'header--nojs',
    MAIN_CONTAINER_NOJS: 'main__container--nojs',
    FILTER_INPUT_NOJS: 'filter__inputs--nojs',
    HEADER_OPEN: 'header--open',
    BTN_MENU: 'js-btn-menu',
    ACCORDION_CLASS: 'js-btn-accordion',
    ACTIVE_CLASS: '--active',
    FILTER_ACTIVE: 'filter--active',
  };

  const page = document.querySelector('.js-page');
  const header = document.querySelector('.js-header');
  const mainContainer = document.querySelectorAll('.js-main-container');
  const btnMenu = document.querySelector('.js-btn-menu');
  const accordionBlock = document.querySelector('.js-accordion');
  const accordionBtn = document.querySelectorAll('.js-btn-accordion');
  const accordionItems = document.querySelectorAll('.js-accordion-item');
  const rangeInput = document.querySelector('.js-range-input');
  const filterBlock = document.querySelector('.js-filter');
  const filterForm = document.querySelector('.js-filter-form');
  const filterOpenBtn = document.querySelector('.js-btn-filter-open');
  const filterCloseBtn = document.querySelector('.js-btn-filter-close');

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

  const closeFilterHandler = () => {
    filterBlock.classList.remove(pageClass.FILTER_ACTIVE);
    page.classList.remove(pageClass.PAGE__LOCKED);
    filterOpenBtn.addEventListener('click', openFilterHandler);
    filterCloseBtn.removeEventListener('click', closeFilterHandler);
  };

  const openFilterHandler = () => {
    filterBlock.classList.add(pageClass.FILTER_ACTIVE);
    page.classList.add(pageClass.PAGE__LOCKED);
    filterCloseBtn.removeEventListener('click', closeFilterHandler);
    filterCloseBtn.addEventListener('click', closeFilterHandler);
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

  if (filterOpenBtn) {
    filterOpenBtn.addEventListener('click', openFilterHandler);
  }

  if (filterForm) {
    filterForm.addEventListener('submit', closeFilterHandler);
  }

  btnMenu.addEventListener('click', toggleMenuHandler);
})();
