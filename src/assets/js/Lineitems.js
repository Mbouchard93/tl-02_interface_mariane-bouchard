import Cart from './Cart';
import product from './Product'
import products from './products';

export default class Lineitems {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    toLineItemsHtml(index) {
        const containerLine = document.createElement('div');
        const imgLine = document.createElement('img')
        const nameLine = document.createElement('span');
        const count = document.createElement('input');
        const subTotal = document.createElement('span');

        containerLine.id = `carts${index}`;

        nameLine.textContent = this.product.name;
        
        imgLine.src = this.product.img
        imgLine.className = 'h-[125px] rotate-90 translate-x-[100%]'
    
        count.setAttribute('type', 'number')
        count.setAttribute('min', 0)
        count.value = this.quantity; 
        
        
        count.addEventListener('input', () => {
        let subtotalValue = count.value * this.product.price;
        subTotal.textContent = subtotalValue.toFixed(2) + '$';
        if (count.value < 1) {
            containerLine.classList.add('hidden');
        } else {
            containerLine.classList.remove('hidden');
        }
        
        });


        let subtotalValue = count.value * this.product.price;
        subTotal.textContent = subtotalValue.toFixed(2) + '$';

        containerLine.appendChild(nameLine);
        containerLine.appendChild(imgLine);
        containerLine.appendChild(count);
        containerLine.appendChild(subTotal);
    
        return containerLine;

    }
}


