import product from './Product'
import products from './products';

export default class Lineitems {
    constructor (product, quantity) {
        this.product = product; 
        this.quantity =  quantity;
    }
}

