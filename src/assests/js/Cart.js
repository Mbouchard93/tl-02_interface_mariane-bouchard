import Lineitems from "./Lineitems";
import products from "./products";

export default class Cart {
    constructor (){
        this.total = 0;
        /**
         * @type {Lineitems[]}
         */
        this.lineItems = [];

    }
}



