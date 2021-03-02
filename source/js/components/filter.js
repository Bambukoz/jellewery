const filter = () => {
  const pageClass = {
    PAGE__LOCKED: 'page--locked',
    FILTER_INPUT_NOJS: 'filter__inputs--nojs',
    FILTER_ACTIVE: 'filter--active',
    ACTIVE_CLASS: '--active'
  };

  const page = document.querySelector('.js-page');
  const rangeInput = document.querySelector('.js-range-input');
  const filterBlock = document.querySelector('.js-filter');
  const filterForm = document.querySelector('.js-filter-form');
  const filterOpenBtn = document.querySelector('.js-btn-filter-open');
  const filterCloseBtn = document.querySelector('.js-btn-filter-close');
  const filterBtns = document.querySelectorAll('.js-btn-filter');

  const toggleFilterItemHandler = (evt) => {
    const target = evt.target.closest('li');
    const activeClass = `${target.dataset.class}${pageClass.ACTIVE_CLASS}`;
    target.classList.toggle(activeClass);
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

  if (filterBlock) {
    filterForm.addEventListener('submit', closeFilterHandler);
    for (let btn of filterBtns) {
      btn.addEventListener('click', toggleFilterItemHandler);
    }
  }

  if (filterOpenBtn) {
    filterOpenBtn.addEventListener('click', openFilterHandler);
  }

  if (rangeInput) {
    rangeInput.classList.remove(pageClass.FILTER_INPUT_NOJS);
  }
};

export default filter;
