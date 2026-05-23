// Initialize the cart counter state in memory
let totalItemsInCart = 0;

// Grab the DOM elements we need to manipulate
const cartBadge = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Loop through all 4 buttons and attach an action listener
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Increment the tracking variable
        totalItemsInCart++;
        
        // Update the visual display in the navbar instantly
        cartBadge.textContent = totalItemsInCart;
        
        // Add a small visual indicator to show it worked
        alert('Item added to cart successfully!');
    });
});