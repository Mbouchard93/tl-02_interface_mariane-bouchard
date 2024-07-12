import "../css/style.css";
import products from "./products.js";
import "./dialog.js";
import Lineitems from "./Lineitems.js";
import Product from "./Product.js";
import Cart from "./Cart.js";
import  "./contact.js";



const productVedetteContainer = document.querySelector(".vedette-container");
const productContainer = document.querySelector(".product-container");

if (productVedetteContainer) {
  const productsVedette = products.slice(0, 4);
  productsVedette.forEach((product, index) => {
    productVedetteContainer.appendChild(product.toProductHtml(index));
    productVedetteContainer.appendChild(product.toOverlayHtml(index))
  });
}

if (productContainer) {
  const productsContainer = products.slice(0, 9);
  productsContainer.forEach((product, index) => {
    productContainer.appendChild(product.toProductHtml(index));
    productContainer.appendChild(product.toOverlayHtml(index));
  });
}


const cart = new Cart();
const btnAdd = document.querySelectorAll('.btn__Cart');

for (let i = 0; i < cart.lineItems.length; i++) {
  const lineItem = cart.lineItems[i];
  const lineItems = lineItem.toLineItemsHtml(i);
  cartContainer.appendChild(lineItems);
}


btnAdd.forEach(btn => {
  btn.addEventListener('click', () => { 
    const productIndex = parseInt(btn.getAttribute('data-product-index'));
    const product = products[productIndex];

    let lineItem = cart.lineItems.find(item => item.product === product);
    

    if(lineItem){
      lineItem.quantity++;
    }else {
      lineItem = new Lineitems(product, 1)
      cart.lineItems.push(lineItem)
    }
    
    const cartContainer = document.querySelector('.cart__items');
    

    const isLineItems = document.querySelector(`#carts${productIndex}`);
    if(isLineItems){
      isLineItems.replaceWith(lineItem.toLineItemsHtml(productIndex)) 
    }else {
      cartContainer.appendChild(lineItem.toLineItemsHtml(productIndex)); 
    }

  
    
  });
})


