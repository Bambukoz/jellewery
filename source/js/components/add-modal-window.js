const addModalWindow = () => {
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
  const closeModalBtn = document.querySelector('.js-modal-close');

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
};

export default addModalWindow;
