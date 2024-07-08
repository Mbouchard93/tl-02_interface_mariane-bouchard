
window.addEventListener('load', ()=> {

    const form = document.querySelector('.template-areas-form');
    const inputEmail = document.querySelector('#email');
    const errorMessage = document.querySelector('.area-error');
    const dialog = document.querySelector('#form');

   

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        if (!inputEmail.checkValidity()) {
            errorMessage.textContent = "Ton email n'est pas valide";
            inputEmail.classList.add('border-red', 'border-2');
            dialog.removeAttribute('open'); 
        } else {
            errorMessage.textContent = '';
            inputEmail.classList.remove('border-red', 'border-2');
            inputEmail.value = ''; 
            dialog.setAttribute('open', ''); 
        }
    });
})

