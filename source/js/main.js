import nouislder from './nouislider';
import swiper from './swiper';

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
    DESCRIPTION_ACTIVE: 'product-card__description--active',
    CARD_NOJS: 'product-card--nojs',
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
  const productCardBlock = document.querySelector('.js-product-card');
  const descriptionToggle = document.querySelector('#description');
  const descriptionBlock = document.querySelector('.js-description');
  const additionalToggle = document.querySelector('#additional');
  const additionalBlock = document.querySelector('.js-additional');


  const toggleInputHandler = () => {
    descriptionBlock.classList.toggle(pageClass.DESCRIPTION_ACTIVE);
    additionalBlock.classList.toggle(pageClass.DESCRIPTION_ACTIVE);
  };

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

  if (productCardBlock) {
    productCardBlock.classList.remove(pageClass.CARD_NOJS);
  }

  if (additionalToggle && descriptionToggle) {
    additionalToggle.addEventListener('change', toggleInputHandler);
    descriptionToggle.addEventListener('change', toggleInputHandler);
  }

  btnMenu.addEventListener('click', toggleMenuHandler);

  window.onload = () => {
    nouislder();
    swiper();
  };
})();

(() => {
  const pageClass = {
    PAGE_LOCKED: 'page--locked',
    MODAL_ACTIVE: 'modal--active',
  };

  const KeyButton = {
    ESCAPE: 'Escape',
  };

  const page = document.querySelector('.js-page');
  const openLoginBtn = document.querySelectorAll('.js-login');
  const openLogin = document.querySelector('.js-modal-login');
  const formLogin = document.querySelector('.js-form-login');
  const closeLogin = document.querySelector('.js-login-close');

  let isStorageSupport = true;
  let storageEmail = '';

  try {
    storageEmail = localStorage.getItem('userEmail');
  } catch (err) {
    isStorageSupport = false;
  }

  const onEscModalClose = (evt) => {
    if (evt.key === KeyButton.ESCAPE) {
      evt.preventDefault();
      closeLoginHandler();
    }
  };

  const overlayClickHandler = (evt) => {
    if (evt.target === openLogin) {
      closeLoginHandler();
    }
  };

  const closeLoginHandler = () => {
    openLogin.classList.remove(pageClass.MODAL_ACTIVE);
    page.classList.remove(pageClass.PAGE_LOCKED);
    closeLogin.removeEventListener('click', closeLoginHandler);
    openLogin.removeEventListener('click', openLoginHandler);
    document.removeEventListener('keydown', onEscModalClose);
  };

  const openLoginHandler = (evt) => {
    evt.preventDefault();
    page.classList.add(pageClass.PAGE_LOCKED);
    openLogin.classList.add(pageClass.MODAL_ACTIVE);
    if (isStorageSupport && storageEmail) {
      formLogin.email.value = storageEmail;
      formLogin.password.focus();
    } else if (isStorageSupport) {
      formLogin.email.focus();
    }
    openLogin.addEventListener('click', overlayClickHandler);
    closeLogin.addEventListener('click', closeLoginHandler);
    document.addEventListener('keydown', onEscModalClose);
  };

  for (let btn of openLoginBtn) {
    btn.addEventListener('click', openLoginHandler);
  }
})();

(() => {
  const pageClass = {
    PAGE_LOCKED: 'page--locked',
    OVERLAY_ACTIVE: 'overlay--active',
    MODAL_ACTIVE: 'modal--active',
  };

  const KeyButton = {
    ESCAPE: 'Escape',
  };

  const page = document.querySelector('.js-page');
  const openModalBtn = document.querySelector('.js-btn-buy');
  const overlay = document.querySelector('.js-overlay');
  const addModal = document.querySelector('.js-modal-add');
  const closeModalBtn = document.querySelector('.js-login-close');

  const onEscModalClose = (evt) => {
    if (evt.key === KeyButton.ESCAPE) {
      evt.preventDefault();
      closeModalHandler();
    }
  };

  const overlayClickHandler = (evt) => {
    if (evt.target === overlay) {
      closeModalHandler();
    }
  };

  const closeModalHandler = () => {
    overlay.classList.remove(pageClass.OVERLAY_ACTIVE);
    addModal.classList.remove(pageClass.MODAL_ACTIVE);
    page.classList.remove(pageClass.PAGE_LOCKED);
    closeModalBtn.removeEventListener('click', closeModalHandler);
    overlay.removeEventListener('click', closeModalHandler);
    document.removeEventListener('keydown', onEscModalClose);
  };

  const openModalHandler = (evt) => {
    evt.preventDefault();
    overlay.classList.add(pageClass.OVERLAY_ACTIVE);
    addModal.classList.add(pageClass.MODAL_ACTIVE);
    page.classList.add(pageClass.PAGE_LOCKED);
    closeModalBtn.addEventListener('click', closeModalHandler);
    overlay.addEventListener('click', overlayClickHandler);
    document.addEventListener('keydown', onEscModalClose);
  };

  if (addModal) {
    openModalBtn.addEventListener('click', openModalHandler);
  }
})();


(() => {
  const submitForm = document.querySelector('.js-submit-form');

  let isStorageSupport = true;
  let storageEmail = '';

  try {
    storageEmail = localStorage.getItem('userEmail');
  } catch (err) {
    isStorageSupport = false;
  }

  const onFormSubmit = (evt) => {
    if (isStorageSupport && evt.target.userEmail) {
      localStorage.setItem('userEmail', evt.target.userEmail.value);
    } else if (isStorageSupport && evt.target.email) {
      localStorage.setItem('userEmail', evt.target.email.value);
    }
  };

  if (storageEmail) {
    submitForm.userEmail.value = storageEmail;
  }

  document.addEventListener('submit', onFormSubmit);
})();
