window.addEventListener('load', () => {
    /**
     * @type {NodeList}
     */
    const containerDialog = document.querySelectorAll('[data-dialog]');

    /**
     * @type {HTMLElement}
     */
    containerDialog.forEach((element) => {
        /**
         * @param {Event} e
         */
        element.addEventListener('click', (e) => {
            /**
             * @type {string}
             */
            const dialogId = e.target.getAttribute('data-dialog');
            /**
             * @type {HTMLElement}
             */
            const dialog = document.querySelector(dialogId);
            if (dialog.hasAttribute('open')) {
                dialog.setAttribute('closing', '');
                dialog.removeAttribute('open');
            } else {
                dialog.setAttribute('open', '');
                dialog.removeAttribute('closing');
            }
        });
    });

    /**
     * @type {NodeList}
     */
    const dialogs = document.querySelectorAll('.dialog');

    /**
     * @param {HTMLElement}
     */
    dialogs.forEach((dialog) => {

        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.setAttribute('closing', '');
                dialog.removeAttribute('open');
            }
        });
    });

    /**
     * @type {NodeList}
     */
    const btnClose = document.querySelectorAll('.btn--close')
    /**
     * @param {HTMLElement}
     */
    btnClose.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            /**
             * @type {HTMLElement}
             */
            const dialog = e.target.closest('.dialog');
            dialog.setAttribute('closing', '');
            dialog.removeAttribute('open');
        });
    });
});

