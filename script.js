// Initialize cart as an empty array
let cart = [];

// Update cart button text
function updateCartButton() {
    const cartButton = document.getElementById('cart-button');
    cartButton.textContent = `Cart (${cart.length})`;
}

// Open the cart modal
function openCartModal() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsList.innerHTML = ''; // Clear current cart items
    let total = 0;

    // Add cart items to modal
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += parseFloat(item.price);
    });

    // Update total
    cartTotal.textContent = total.toFixed(2);

    // Show cart modal
    cartModal.style.display = 'flex';
}

// Close the cart modal
function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Add item to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartButton();
}

// Event Listeners
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-product');
        const productPrice = e.target.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

document.getElementById('cart-button').addEventListener('click', openCartModal);
document.getElementById('close-cart').addEventListener('click', closeCartModal);
