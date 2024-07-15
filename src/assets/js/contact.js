/**
 * @type {NodeList}
 */
const forms = document.querySelectorAll('form');

/**
 * @param {HTMLElement} form
 */
forms.forEach(form => {
  /**
   * @type {HTMLElement}
   */
  const inputEmail = form.querySelector('.email');
  /**
 * @type {HTMLElement}
 */
  const errorMessage = form.querySelector('.error');
  /**
 * @type {HTMLElement}
 */
  const dialog = form.querySelector('.dialog');
  /**
 * @type {HTMLElement}
 */
  const inputName = document.querySelector('#name');
  /**
 * @type {HTMLElement}
 */
  const spanName = document.querySelector('.name');

  /**
 * @type {Event} e
 */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!inputEmail.checkValidity()) {
      errorMessage.textContent = "Ton e-mail n'est pas valide.";
      inputEmail.classList.add('border-red', 'border-2');
      dialog.removeAttribute('open');
    } else {
      errorMessage.textContent = '';
      inputEmail.classList.remove('border-red', 'border-2');
      inputEmail.value = '';
      dialog.setAttribute('open', '');
      if (spanName) {
        spanName.textContent = inputName.value
      }
    }
  });
});


