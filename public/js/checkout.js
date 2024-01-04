const delivery = document.querySelectorAll('[name="delivery"]');
const deliveryInfo = document.getElementById('info');

delivery.forEach(ratio => {
    ratio.addEventListener('change', () => {
        if (ratio.value === 'Con Envío') {
            deliveryInfo.style.display = 'block';
        } else {
            deliveryInfo.style.display= 'none';
        }
    });
});

// User info 

const form = document.getElementById('checkout')
//From the url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get('name')
const productPrice = urlParams.get('price')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const delivery = form.querySelector('input[name="delivery"]:checked').value;
    const payment = form.querySelector('input[name="payment"]:checked').value;

    const deliveryParams = `¡Hola! Me gustaría realizar un pedido: 
       Producto: ${productName}_ 
       Precio: $ ${productPrice}_ 
       Nombre: ${form.client.value}_   
       Método de envio: ${delivery}_
       Ciudad: ${form.city.value}_
       Dirección: ${form.adress.value}_
       Observación: ${form.aditional.value}_  
       Método de pago: ${payment}_
       ¡Gracias!`;

    const noDeliveryParams = `¡Hola! Me gustaría realizar un pedido: 
       Producto: ${productName}_ 
       Precio: $ ${productPrice}_ 
       Nombre: ${form.client.value}_   
       Método de envio: ${delivery} 
       *Entrega a Coordinar*_
       Método de pago: ${payment}_
       ¡Gracias!`;

    let infoUser = '';
    if (delivery === 'Con Envío') {
        infoUser = deliveryParams
    } else {
        infoUser = noDeliveryParams;
    }

    const baseUrl = 'https://wa.me/543876153050';
    const text = encodeURIComponent(infoUser);
    const url = `${baseUrl}?text=${text}`;
    window.open(url);
})

