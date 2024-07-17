import "../css/style.css";
import products from "./products.js";
import "./dialog.js";
import Lineitems from "./Lineitems.js";
import Product from "./Product.js";
import Cart from "./Cart.js";
import "./contact.js";



/**
 * @type {HTMLElement}
 */
const productVedetteContainer = document.querySelector(".vedette-container");
/**
 * @type {HTMLElement}
 */
const productContainer = document.querySelector(".product-container");

if (productVedetteContainer) {
  /**
   * @type {Product[]}
   */
  const productsVedette = products.slice(0, 4);
  /**
   * @param {Product} product
   * @param {Number} index
   */
  productsVedette.forEach((product, index) => {
    productVedetteContainer.appendChild(product.toProductHtml(index));
    productVedetteContainer.appendChild(product.toOverlayHtml(index))
  });
}

if (productContainer) {
  /**
 * @type {Product[]}
 */
  const productsContainer = products.slice(0, 9);
  /**
 * @param {Product} product
 * @param {Number} index
 */
  productsContainer.forEach((product, index) => {
    productContainer.appendChild(product.toProductHtml(index));
    productContainer.appendChild(product.toOverlayHtml(index));
  });
}

/**
 * @type {Cart}
 */
const cart = new Cart();
/**
 * @param {Lineitems} lineItem
 * @param {Number} index
 */
cart.lineItems.forEach((lineItem, index) => {
  cartContainer.toLineItemsHtml(lineItem, index);
});

/**
 * @type {NodeList}
 */
const btnAdd = document.querySelectorAll('.btn__Cart');

/**
 * @param {HTMLElement} btn
 */
btnAdd.forEach(btn => {
  btn.addEventListener('click', () => {
    /**
     * @type {number}
     */
    const productIndex = parseInt(btn.getAttribute('data-product-index'));
    /**
     * @type {Product}
     */
    const product = products[productIndex];
    /**
     * @type {undefined | Lineitems} 
     * 
     */
    let lineItem = cart.lineItems.find(item => item.product === product);
    /**
     * @returns {boolean}
     */
    if (lineItem) {
      lineItem.quantity++;
    } else {
      /**
       * @type {Lineitems}
       */
      lineItem = new Lineitems(product, 1)
      cart.lineItems.push(lineItem)
    }
    /**
     * @type {HTMLElement}
     */
    const cartContainer = document.querySelector('.cart__items');
    /**
     * @type {HTMLElement | null}
     */
    const isLineItems = document.querySelector(`#carts${productIndex}`);

    if (isLineItems) {
      isLineItems.replaceWith(lineItem.toLineItemsHtml(productIndex))
    } else {
      cartContainer.appendChild(lineItem.toLineItemsHtml(productIndex));
    }
    cart.calculTotal()
  });
})

