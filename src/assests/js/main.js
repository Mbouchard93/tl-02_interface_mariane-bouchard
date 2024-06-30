import "../css/style.css";
import products from "./products.js";
import "./dialog.js";
import Lineitems from "./Lineitems.js";
import Product from "./Product.js";
import Cart from "./Cart.js";


function toHtmlProduct (container, products)  {
  if (container) {
    container.innerHTML = products
      .map((product, index) => {
        const productInstance = new Product(
          product.name,
          product.img,
          product.shortdesct,
          product.longdesct, 
          product.price,
          product.total
        );
        // Retournez le HTML pour la carte du produit et le dialogue
        return productInstance.toCardHtml(index) + productInstance.toDialogHtml(index);
      })
      .join("");
  }
};
const productContainer = document.querySelector(".product-container");
const productVedetteContainer = document.querySelector(".vedette-container");

  toHtmlProduct(productContainer, products.slice(0, 9));
  toHtmlProduct(productVedetteContainer, products.slice(9, 13));



const cart = new Cart();
const lineItem = new Lineitems(new Product(products[0].price), 5)

console.log(cart, lineItem);
 