(() => {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (const smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');
      if (id.length > 1) {
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
})();
