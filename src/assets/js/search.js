const input = document.querySelector('#search');
const cards = document.querySelectorAll('.cards');
const containerNbArticle = document.querySelector('.nb-article');

input.addEventListener("input", () => {
    const searchValue = input.value.toLowerCase();
    let visibleCount =  0 
    
    cards.forEach((card) => {
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
