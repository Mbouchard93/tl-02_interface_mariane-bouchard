// la logique pour afficher l'overlay ne fonctionnais pas sans ceci. 
window.addEventListener('load', () => {
  // Sélectionnez tous les éléments qui ont un attribut data-dialog
  const containerDialog = document.querySelectorAll('[data-dialog]');

 containerDialog.forEach((element) => {
      // Ajoutez un écouteur d'événements click à chaque élément
      element.addEventListener('click', (e) => {
          // Récupérez l'id du dialogue à partir de l'attribut data-dialog
          const dialogId = e.target.getAttribute('data-dialog');

          // Sélectionnez le dialogue correspondant
          const dialog = document.querySelector(dialogId);

          // Vérifiez si le dialogue est actuellement ouvert
          if (dialog.hasAttribute('open')) {
              // Si le dialogue est ouvert, ajoutez l'attribut 'closing' et retirez l'attribut 'open'
              dialog.setAttribute('closing', '');
              dialog.removeAttribute('open');
          } else {
              // Si le dialogue n'est pas ouvert, ajoutez l'attribut 'open' et retirez l'attribut 'closing'
              dialog.setAttribute('open', '');
              dialog.removeAttribute('closing');
          }
      });
  });

  // Sélectionnez tous les dialogues
  const dialogs = document.querySelectorAll('.dialog');

  dialogs.forEach((dialog) => {
      // Ajoutez un écouteur d'événements click à chaque dialogue
      dialog.addEventListener('click', (e) => {
          // Vérifiez si le clic a eu lieu directement sur le dialogue et non sur un de ses enfants
          if (e.target === dialog )  {
              // Si le dialogue est ouvert, ajoutez l'attribut 'closing' et retirez l'attribut 'open'
              dialog.setAttribute('closing', '');
              dialog.removeAttribute('open');
          }
      });
  });
const btnClose = document.querySelectorAll('.btn--close')
btnClose.forEach((btn) => {
    // Ajoutez un écouteur d'événements click à chaque bouton de fermeture
    btn.addEventListener('click', (e) => {
        // Récupérez le dialogue parent du bouton sur lequel l'utilisateur a cliqué
        const dialog = e.target.closest('.dialog');

        // Si le dialogue est ouvert, ajoutez l'attribut 'closing' et retirez l'attribut 'open'
        dialog.setAttribute('closing', '');
        dialog.removeAttribute('open');
    });
});
});



