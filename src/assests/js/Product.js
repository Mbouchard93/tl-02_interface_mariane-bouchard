

export default class Product {
  constructor(name, img, shortdesct, longdesct, price) {
    this.name = name;
    this.img = img;
    this.shortdesct = shortdesct;
    this.longdesct = longdesct;
    this.price = price;
    
  }

  toCardHtml(index) {
    return `
    <div class="flex flex-col justify-around items-center  gap-6 px-4 py-8 max-w-[18.75rem] font-sans font-medium  w-full h-full ">
      <h2 class="font-raleway text-lg text-center font-semibold">${this.name}</h2>
      <img class="max-h-[25rem]" src="${this.img}" alt="${this.name}" class="product-img">
      <p>${this.shortdesct}</p>
      <p>${this.price}</p>
      <div class="flex">
      <button class=" bg-yellow px-8 py-2 text-lg font-bebas uppercase border-black border cursor-pointer" data-index="${index}" data-dialog="#cart">Ajouter</button>
      <button class=" bg-yellow px-8 py-2 text-lg font-bebas uppercase border-black border cursor-pointer" data-index="${index}" data-dialog="#dialogs${index}">Découvrir</button>
      </div>
      </div>
      `;
  }

  toDialogHtml(index) {
    return `
        <div id="dialogs${index}" class="dialog">
          <div class="w-[350px] overflow-auto bg-withe overlay">
            <h2 class="font-raleway text-lg text-center font-semibold">${this.name}</h2>
            <img class="max-h-[25rem]" src="${this.img}" alt="${this.name}" class="product-img">
            <p>${this.shortdesct}</p>
            <p>${this.price}</p>
            <details >
            <summary class="text-xl">Description</summary>
            ${this.longdesct}
            </details>
          </div>
        </div>
      `;
  }
  
}

