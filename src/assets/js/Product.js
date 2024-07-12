import products from "./products";
import btnimg from '../img/icone/close.svg';
import Lineitems from "./Lineitems";
import Cart from "./Cart";

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
    containerCard.className = 'flex flex-col justify-around items-center gap-6 px-4 py-8 max-w-[14.75rem] font-sans font-medium w-full h-full cards hover:drop-shadow-xl ';
    containerCard.setAttribute('data-search', this.name);
    const name = document.createElement('h2');
    name.className = 'font-raleway text-lg text-center font-semibold cursor-pointer';
    name.textContent = this.name;
    name.setAttribute('data-dialog', `#dialogs${index}`);
    const cart = document.querySelectorAll('.cart');

    const figure = document.createElement('figure')
    const img = document.createElement('img');
    img.src = this.img;
    img.setAttribute('data-dialog', `#dialogs${index}`);
    img.setAttribute('alt', this.name);
    img.className = ' w-full h-full cursor-pointer drop-shadow-xl'
    figure.className = 'max-h-[22rem]';
    const shortdesct = document.createElement('p');
    shortdesct.textContent = this.shortdesct;
    shortdesct.className = 'cursor-pointer'
    shortdesct.setAttribute('data-dialog', `#dialogs${index}`);

    const price = document.createElement('p');
    price.textContent = this.price + ' $ ';


    const btnCard = document.createElement('button');
    btnCard.setAttribute('data-dialog', '#cart');
    btnCard.setAttribute('data-product-index', index);
    btnCard.className = 'bg-yellow px-8 py-2 text-lg font-bebas uppercase border-black border cursor-pointer btn__Cart';
    btnCard.textContent = 'Ajouter';
    
  
    figure.appendChild(img)
    containerCard.appendChild(name);
    containerCard.appendChild(figure);
    containerCard.appendChild(shortdesct);
    containerCard.appendChild(price);
    containerCard.appendChild(btnCard);

    return containerCard;

  
}
toOverlayHtml(index) {
  const containeroverlay = document.createElement('div');
  containeroverlay.className = 'dialog';
  containeroverlay.id = `dialogs${index}`;

  const overlay = document.createElement('div');
  overlay.className = 'overflow-auto h-[95dvh] w-[75dvw] lg:w-[40vw]  place-self-center flex-col justify-center gap-5 px-10 py-14 items-center rounded-md bg-withe overlay z-10';

  const btnClose = document.createElement('img');
  btnClose.src = btnimg;
  btnClose.className = 'btn--close cursor-pointer top-4 right-4 absolute';

  const name = document.createElement('h2');
  name.className = 'font-raleway text-lg text-center font-semibold';
  name.textContent = this.name;

  const img = document.createElement('img');
  img.src = this.img;
  img.setAttribute('alt', this.name);
  img.className = 'max-h-[22rem]';

  const shortdesct = document.createElement('p');
  shortdesct.textContent = this.shortdesct;

  const details = document.createElement('details');
  details.className = 'cursor-pointer';

  const summary = document.createElement('summary');
  summary.textContent = 'Description';
  summary.className = 'text-xl p-2';
  details.appendChild(summary);

  const textDesct = document.createElement('p');
  textDesct.textContent = this.longdesct;
  details.appendChild(textDesct);

  const btnCardOVerlay = document.createElement('button');
  btnCardOVerlay.setAttribute('data-dialog', '#cart');
  btnCardOVerlay.setAttribute('data-product-index', index);
  btnCardOVerlay.className = 'bg-yellow px-8 py-2 text-lg font-bebas uppercase border-black border cursor-pointer btn--close btn__Cart';
  btnCardOVerlay.textContent = 'Ajouter';

  overlay.appendChild(btnClose);
  overlay.appendChild(name);
  overlay.appendChild(img);
  overlay.appendChild(shortdesct);
  overlay.appendChild(details);
  overlay.appendChild(btnCardOVerlay);

  containeroverlay.appendChild(overlay);

  return containeroverlay;
}
      
}



