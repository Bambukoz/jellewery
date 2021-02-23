const accordion = () => {
  const pageClass = {
    ACCORDION_CLASS: 'js-btn-accordion',
    ACTIVE_CLASS: '--active',
  };

  const accordionBlock = document.querySelector('.js-accordion');
  const accordionBtn = document.querySelectorAll('.js-btn-accordion');
  const accordionItems = document.querySelectorAll('.js-accordion-item');

  const toggleAccordionHandler = (evt) => {
    const target = evt.target.closest('li');
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
  };

  if (accordionBlock) {
    for (let btn of accordionBtn) {
      btn.addEventListener('click', toggleAccordionHandler);
    }
  }
};

export default accordion;
