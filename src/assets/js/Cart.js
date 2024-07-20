import Lineitems from "./Lineitems";

// code inutile -0.5

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

