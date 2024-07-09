import "../css/style.css";
import products from "./products.js";
import "./dialog.js";
import Lineitems from "./Lineitems.js";
import Product from "./Product.js";
import Cart from "./Cart.js";
import  "./contact.js";
import "./search.js"


const productVedetteContainer = document.querySelector(".vedette-container");
const productContainer = document.querySelector(".product-container");

if (productVedetteContainer) {
  const productsVedette = products.slice(9, 13);
  productsVedette.forEach((product, index) => {
    productVedetteContainer.appendChild(product.toProductHtml(index));
  });
}

if (productContainer) {
  const productsContainer = products.slice(0, 9);
  productsContainer.forEach((product, index) => {
    productContainer.appendChild(product.toProductHtml(index));
  });
}



const cart = new Cart();
const lineItem = new Lineitems(new Product(products[0].price), 5)

console.log(cart, lineItem);

