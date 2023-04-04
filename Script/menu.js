// script for updating the cart 
const cartCounter = document.querySelector(".cart-count");
const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");


// script for adding items to the cart
const foodsBtn = document.querySelectorAll(".add-to-cart-btn");

let cartedItems = []

foodsBtn[0].addEventListener("click", ()=>{
    creatNewItem("smashed-avo");
    updateLocalStorage()
});
foodsBtn[1].addEventListener("click", ()=>{
    creatNewItem("Yin & Yang");
    updateLocalStorage()
});
foodsBtn[2].addEventListener("click", ()=>{
    creatNewItem("Pancakes");
    updateLocalStorage()
});
foodsBtn[3].addEventListener("click", ()=>{
    creatNewItem("Huevos Rancheros");
    updateLocalStorage()
});
foodsBtn[4].addEventListener("click", ()=>{
    creatNewItem("Rancheros (Tofu)");
    updateLocalStorage()
});
foodsBtn[5].addEventListener("click", ()=>{
    creatNewItem("Breakkie Roll");
    updateLocalStorage()
});
foodsBtn[6].addEventListener("click", ()=>{
    creatNewItem("Breakkie Roll2");
    updateLocalStorage()
})
foodsBtn[7].addEventListener("click", ()=>{
    creatNewItem("Burrito");
    updateLocalStorage()
});
// ends here 

// updating the cart counter 
for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", updateCart);
    
};
// ends here 


// fuction to update the cart number 
function updateCart() {
    let cart = JSON.parse(localStorage.getItem("foods")).length;
    cartCounter.innerHTML = cart;
}

// function to update the localStorage 
function updateLocalStorage() {
    localStorage.setItem("foods", JSON.stringify(cartedItems));
}

// function to create new item 
function creatNewItem(value) {
    if (cartedItems.includes(value)) {
        
    } else {
        cartedItems.push(value);
    }
    
}
