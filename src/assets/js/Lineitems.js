import Cart from './Cart';
import Product from './Product'
import products from './products';
/**
 * @param {Product}
 * @param {number} quantity
 */

export default class Lineitems {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    /**
     * 
     * @param {number} index 
     * @returns {HTMLElement}
     */
    toLineItemsHtml(index) {
        const containerLine = document.createElement('div');
        const imgLine = document.createElement('img');
        const nameLine = document.createElement('span');
        const containerSubTotal = document.createElement('div');
        const decrementButton = document.createElement('button');
        const incrementButton = document.createElement('button');
        const count = document.createElement('input');
        const subTotal = document.createElement('span');

        containerLine.id = `carts${index}`;
        containerLine.className = 'drop-shadow-lg bg-white p-4 rounded-md'

        nameLine.textContent = this.product.name;
        nameLine.className = 'text-xl font-raleway'
        imgLine.src = this.product.img;
        imgLine.className = 'h-[125px] rotate-90 translate-x-[100%]';

        decrementButton.textContent = '-';
        decrementButton.className = 'bg-yellow  w-[30px] h-[30px] text-2xl  font-bold rounded';

        incrementButton.textContent = '+';
        incrementButton.className = 'bg-yellow w-[30px] h-[30px]  rounded font-semibold';


        count.value = this.quantity;
        count.className = 'text-center w-10 bg-white';
        count.setAttribute('disabled', '')
        containerSubTotal.className = 'flex gap-2 items-center '


        const updateSubtotal = () => {
            /**
             * @type {number}
             */
            let subtotalValue = count.value * this.product.price;
            /**
             * @type {string}
             */
            subTotal.textContent = subtotalValue.toFixed(2) + '$';
            if (count.value < 1) {
                containerLine.classList.add('hidden');
            } else {
                containerLine.classList.remove('hidden');
            }
        };

        decrementButton.addEventListener('click', () => {
            if (count.value > 0) {
                /**
                 * @type {number}
                 */
                count.value = parseInt(count.value) - 1;
                updateSubtotal();

            }
        });

        incrementButton.addEventListener('click', () => {
            count.value = parseInt(count.value) + 1;
            updateSubtotal();

        });


        updateSubtotal();

        containerLine.appendChild(nameLine);
        containerLine.appendChild(imgLine);
        containerSubTotal.appendChild(decrementButton);
        containerSubTotal.appendChild(count);
        containerSubTotal.appendChild(incrementButton);
        containerSubTotal.appendChild(subTotal);
        containerLine.appendChild(containerSubTotal);

        return containerLine;
    }
}


