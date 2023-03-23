const cartCounter = document.querySelector(".cart-count");
// const cartAnchor = document.querySelector(".cart-anchor");

let cart = JSON.parse(localStorage.getItem("cart"));
cartCounter.innerHTML = cart;