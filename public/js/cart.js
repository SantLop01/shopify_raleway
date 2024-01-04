// Cart Resume
cartBtn = document.querySelector('.cart__container')
productsWrap = document.getElementById('products__container');

cartBtn.addEventListener('click', (e) => {
    console.log('El icono del carrito',e.currentTarget)
    productsWrap.classList.toggle('hidden__cart')
});

// Var for the Cart
const rowCart = document.querySelector('.row__products');

// Container of Items
const itemsContainer = document.querySelector('.shop__items');

// Var for the products added to cart
let newCartProducts = [];

const productsCount = document.querySelector('#products__count');
const cartTotal = document.querySelector('.cart__total');
const totalPrice = document.querySelector('.total__price');
const cartEmpty = document.querySelector('.cart__empty')

itemsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('bx-cart')) {
        const item = e.target.closest('.item__content');
        const infoItem = {
            quantity: 1,
            title: item.querySelector('.item__name').textContent,
            price: item.querySelector('.item__price').textContent
        }
        const exist = newCartProducts.some(
            item => item.title === infoItem.title
        );
        if (exist) {
            const items = newCartProducts.map(product => {
                if (product.title === infoItem.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            newCartProducts = [...items];
        } else {
            newCartProducts = [...newCartProducts, infoItem];
        }

        showHTML();
    }
});

rowCart.addEventListener('click', (e) => {
    if (e.target.classList.contains('bx-x')) {
        const item = e.target.closest('.cart__product');
        const title = item.querySelector('.info__product__name').textContent;

        newCartProducts = newCartProducts.filter(i => i.title !== title);

        showHTML();
    }
})

const showHTML = () => {
    if (!newCartProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowCart.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowCart.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }
    rowCart.innerHTML = '';

    let totalItems = 0;
    let total = 0;

    newCartProducts.forEach(product => {
        productsContainer = document.createElement('div');
        productsContainer.classList.add('cart__product');

        productsContainer.innerHTML = `
        <div class="info__product">
            <span class="info__count">${product.quantity}</span>
            <p class="info__product__name">${product.title}</p>
            <span class="info__price">${product.price}</span>
        </div>
        <span class="close__icon"><i class='bx bx-x'></i></span>
        `;
        rowCart.append(productsContainer)

        
        const price = product.price.replace('$', ""); 
        const quantity = product.quantity;

        total = total + quantity * price;
        totalItems = totalItems + product.quantity;
    });

    totalPrice.innerText = `${total}`;
    productsCount.innerText = `${totalItems}`;

};