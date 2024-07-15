/**
 * @type {HTMLElement}
 */
const input = document.querySelector('#search');
/**
 * @type {NodeList}
 */
const cards = document.querySelectorAll('.cards');
/**
 * @type {HTMLElement}
 */
const containerNbArticle = document.querySelector('.nb-article');

input.addEventListener("input", () => {
    /**
     * @type {string}
     */
    const searchValue = input.value.toLowerCase();
    /**
     * @type {number}
     */
    let visibleCount = 0
    /**
     * @param {HTMLElement} card
     */
    cards.forEach((card) => {
        /**
         * @type {string}
         */
        const searchData = card.getAttribute("data-search").toLowerCase();
        if (searchData.includes(searchValue)) {
            card.classList.remove("hidden");
            visibleCount++;
        } else {
            card.classList.add("hidden");
        }
    });

    containerNbArticle.textContent = "Nombre d'article : " + visibleCount;
});
