
    const forms = document.querySelectorAll('form'); 
    forms.forEach(form => {
      const inputEmail = form.querySelector('.email');
      const errorMessage = form.querySelector('.error');
      const dialog = form.querySelector('.dialog');
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
        }
      });
    });

  
