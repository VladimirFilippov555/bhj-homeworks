const products = document.querySelector('.products');
const cart = document.querySelector('.cart__products');

products.addEventListener('click', (event) => {
    const target = event.target
    let sum;

    if (target.classList.contains('product__quantity-control_dec')) {
        sum = target.nextElementSibling;
        if (Number(sum.innerText) === 0) {
            return;
        } else {
            sum.innerText = Number(sum.innerText) - 1;
        }
    }

    if (target.classList.contains('product__quantity-control_inc')) {
        sum = target.previousElementSibling;
        sum.innerText = Number(sum.innerText) + 1;
    }

    if (target.classList.contains('product__add')) {
        let product = target.closest('.product');
        let productId = product.getAttribute('data-id');
        let productImage = product.querySelector('.product__image').getAttribute('src');
        let productCount = product.querySelector('.product__quantity-value').innerText;
        let productsInCart = cart.children;
        
        for (let index = 0; index < productsInCart.length; index++) {
            let productsInCartId = productsInCart[index].getAttribute('data-id');
            if (productsInCartId === productId) {
                productCount = Number(productsInCart[index].lastElementChild.innerText) + Number(productCount);
                productsInCart[index].lastElementChild.innerText = productCount;
                return;
            }
        } 
                        
       cart.insertAdjacentHTML('beforeEnd', 
        `<div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${productCount}</div>
        </div>`);
    }
});

