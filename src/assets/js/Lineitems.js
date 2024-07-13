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
        const imgLine = document.createElement('img');
        const nameLine = document.createElement('span');
        const containerSubTotal = document.createElement('div');
        const decrementButton = document.createElement('button');
        const incrementButton = document.createElement('button');
        const count = document.createElement('input');
        const subTotal = document.createElement('span');

        containerLine.id = `carts${index}`;

        nameLine.textContent = this.product.name;
        
        imgLine.src = this.product.img;
        imgLine.className = 'h-[125px] rotate-90 translate-x-[100%]';
    
        decrementButton.textContent = '-';
        decrementButton.className = 'bg-grey text-white px-2 py-1 rounded';
        
        incrementButton.textContent = '+';
        incrementButton.className = 'bg-grey text-white px-2 py-1 rounded';

        
        count.value = this.quantity; 
        count.className = 'text-center w-16';


        const updateSubtotal = () => {
            let subtotalValue = count.value * this.product.price;
            subTotal.textContent = subtotalValue.toFixed(2) + '$';
            if (count.value < 1) {
                containerLine.classList.add('hidden');
            } else {
                containerLine.classList.remove('hidden');
            }
        };
        
        decrementButton.addEventListener('click', () => {
            if (count.value > 0) {
                count.value = parseInt(count.value) - 1;
                updateSubtotal();
            }
        });

        incrementButton.addEventListener('click', () => {

            count.value = parseInt(count.value) + 1;   
            
            updateSubtotal();
        });

        count.addEventListener('input', () => {
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


