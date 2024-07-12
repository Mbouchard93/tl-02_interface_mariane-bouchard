import products from "./products";
import btnimg from '../img/icone/close.svg';
export default class Product {
  constructor(name, img, shortdesct, longdesct, price) {
    this.name = name;
    this.img = img;
    this.shortdesct = shortdesct;
    this.longdesct = longdesct;
    this.price = price;
  }

  toProductHtml(index) {
    const containerCard = document.createElement('div');
    containerCard.className = 'flex flex-col justify-around items-center gap-6 px-4 py-8 max-w-[18.75rem] font-sans font-medium w-full h-full cards';
    containerCard.setAttribute('data-search', this.name);
    const name = document.createElement('h2');
    name.className = 'font-raleway text-lg text-center font-semibold';
    name.textContent = this.name;

    const img = document.createElement('img');
    img.src = this.img;
    img.setAttribute('alt', this.name);
    img.className = 'max-h-[25rem]';

    const shortdesct = document.createElement('p');
    shortdesct.textContent = this.shortdesct;

    const price = document.createElement('p');
    price.textContent = this.price;

    const containerBtn = document.createElement('div');
    containerBtn.className = 'flex';

    const btnCard = document.createElement('button');
    btnCard.setAttribute('data-index', index);
    btnCard.setAttribute('data-dialog', '#cart');
    btnCard.className = 'bg-yellow px-8 py-2 text-lg font-bebas uppercase border-black border cursor-pointer';
    btnCard.textContent = 'Ajouter';

    const btnDesct = document.createElement('button');
    btnDesct.setAttribute('data-index', index);
    btnDesct.setAttribute('data-dialog', `#dialogs${index}`);
    btnDesct.className = 'bg-yellow px-8 py-2 text-lg font-bebas uppercase border-black border cursor-pointer';
    btnDesct.textContent = 'Découvrir';

    containerBtn.appendChild(btnCard);
    containerBtn.appendChild(btnDesct);

    containerCard.appendChild(name);
    containerCard.appendChild(img);
    containerCard.appendChild(shortdesct);
    containerCard.appendChild(price);
    containerCard.appendChild(containerBtn);

   
    const containeroverlay = document.createElement('div');
    containeroverlay.className = 'dialog';
    containeroverlay.id = `dialogs${index}`;

    const overlay = document.createElement('div');
    overlay.className = 'overflow-auto absolute h-[85vh] w-[75vw] lg:w-[40vw] lg:left-1/4 place-self-center flex-col justify-center gap-5 p-10 items-center rounded-md bg-withe overlay';

    const btnClose = document.createElement('img');
    btnClose.src = btnimg;
    btnClose.className = 'btn--close cursor-pointer top-4 right-4 absolute';

    const details = document.createElement('details');
    details.className = 'cursor-pointer';
    
 
    const summary = document.createElement('summary');
    summary.textContent = 'Description';
    summary.className = 'text-xl';
    details.appendChild(summary); 
    const textDesct = document.createElement('p');
    textDesct.textContent = this.longdesct
    details.appendChild(textDesct)
   

    const btnCardOVerlay = document.createElement('button');
    btnCardOVerlay.setAttribute('data-index', index);
    btnCardOVerlay.setAttribute('data-dialog', '#cart');
    btnCardOVerlay.className = 'bg-yellow px-8 py-2 text-lg font-bebas uppercase border-black border cursor-pointer btn--close';
    btnCardOVerlay.textContent = 'Ajouter';
  
    overlay.appendChild(btnClose);
    overlay.appendChild(name.cloneNode(true));
    overlay.appendChild(img.cloneNode(true));
    overlay.appendChild(shortdesct.cloneNode(true));
    overlay.appendChild(price.cloneNode(true));
    overlay.appendChild(details);
    overlay.appendChild(btnCardOVerlay);

    containeroverlay.appendChild(overlay);
    containerCard.appendChild(containeroverlay);

    return containerCard;
}

      
}

