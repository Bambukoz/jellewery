const form = () => {
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
};

export default form;
