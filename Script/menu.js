// script for updating the cart 

const cartCounter = document.querySelector(".cart-count");
const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
    cart = 0;
}

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", updateCart);
    
}

window.onload = cartCounter.innerHTML =cart;

function updateCart() {
    cart++;
    cartCounter.innerHTML = cart;
    updateLocalStorage()
}

function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart)); 
}