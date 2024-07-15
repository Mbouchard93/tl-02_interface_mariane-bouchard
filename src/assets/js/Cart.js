import Lineitems from "./Lineitems";
import Product from "./Product";
import products from "./products";

export default class Cart {
    constructor() {
        /**
         * @type {number}
         */
        this.total = 0;
        /**
         * @type {Lineitems[]}
         */
        this.lineItems = [];
    }

}

