const cartCounter = document.querySelector(".cart-count");
const cartAnchor = document.querySelector(".cart-anchor");
const displayedFood = document.querySelectorAll(".food-price");
const quatityDisplays = document.querySelectorAll(".display");
const decreaseBtn = document.querySelectorAll(".reduce-btn");
const IncreaseBtn = document.querySelectorAll(".increament-btn");
const delBtn = document.querySelectorAll(".del-btn");

// script for cart item numbers 

let cart = JSON.parse(localStorage.getItem("foods")).length;
cartCounter.innerHTML = cart;
let cartItems = JSON.parse(localStorage.getItem("foods"));
// ends here

cartDisplay();

// script for the display value and buttons
let displayValue = 1;

quatityDisplays.forEach((quatityDisplay) => {
    quatityDisplay.value = displayValue;
});

// increament value buttons 
IncreaseBtn[0].addEventListener("click", ()=>{
    increament(0);
});
IncreaseBtn[1].addEventListener("click", ()=>{
    increament(1);
});
IncreaseBtn[2].addEventListener("click", ()=>{
    increament(2);
});
IncreaseBtn[3].addEventListener("click", ()=>{
    increament(3);
});
IncreaseBtn[4].addEventListener("click", ()=>{
    increament(4);
});
IncreaseBtn[5].addEventListener("click", ()=>{
    increament(5);
});
IncreaseBtn[6].addEventListener("click", ()=>{
    increament(6);
});
IncreaseBtn[7].addEventListener("click", ()=>{
    increament(7);
});
// ends here

// decrease value buttons 
decreaseBtn[0].addEventListener("click", ()=>{
    reduce(0);
});
decreaseBtn[1].addEventListener("click", ()=>{
    reduce(1);
});
decreaseBtn[2].addEventListener("click", ()=>{
    reduce(2);
});
decreaseBtn[3].addEventListener("click", ()=>{
    reduce(3);
});
decreaseBtn[4].addEventListener("click", ()=>{
    reduce(4);
});
decreaseBtn[5].addEventListener("click", ()=>{
    reduce(5);
});
decreaseBtn[6].addEventListener("click", ()=>{
    reduce(6);
});
decreaseBtn[7].addEventListener("click", ()=>{
    reduce(7);
});
// ends here 

// delete item buttons 
delBtn[0].addEventListener("click", ()=>{
    deleteItem("smashed-avo");
    window.location.reload(true);
});
delBtn[1].addEventListener("click", ()=>{
    deleteItem("Yin & Yang");
    window.location.reload(true);
});
delBtn[2].addEventListener("click", ()=>{
    deleteItem("Pancakes");
    window.location.reload(true);
});
delBtn[3].addEventListener("click", ()=>{
    deleteItem("Huevos Rancheros");
    window.location.reload(true);
});
delBtn[4].addEventListener("click", ()=>{
    deleteItem("Rancheros (Tofu)");
    window.location.reload(true);
});
delBtn[5].addEventListener("click", ()=>{
    deleteItem("Breakkie Roll");
    window.location.reload(true);
});
delBtn[6].addEventListener("click", ()=>{
    deleteItem("Breakkie Roll2");
    window.location.reload(true);
});
delBtn[7].addEventListener("click", ()=>{
    deleteItem("Burrito");
    window.location.reload(true);
});
// ends here 


// function to display cart items 
function cartDisplay() {
    for (let i = 0; i < cartItems.length; i++) {
        const cartFoods = cartItems[i];

        switch (cartFoods) {
            case "smashed-avo":
                displayedFood[0].classList.remove("active");
                break;

            case "Yin & Yang":
                displayedFood[1].classList.remove("active");
                break;

            case "Pancakes":
                displayedFood[2].classList.remove("active");
                break; 

            case "Huevos Rancheros":
                displayedFood[3].classList.remove("active");
                break;
    
            case "Rancheros (Tofu)":
                displayedFood[4].classList.remove("active");
                break;
    
            case "Breakkie Roll":
                displayedFood[5].classList.remove("active");
                break;  
            
            case "Breakkie Roll2":
                displayedFood[6].classList.remove("active");
                break;
            
            case "Burrito":
                displayedFood[7].classList.remove("active");
                break;
                   
            default:
                break;
        }
        
    }
}

// function for increase and reduce display value 
function increament(index) {
    quatityDisplays[index].value++;
}

function reduce(index) {
   if (quatityDisplays[index].value < 2) {
       quatityDisplays[index].value = 1;
   
   } else {
        quatityDisplays[index].value--;
   }
}
// ends here

// function to delete item from cart 
function deleteItem(name) {
    const index = cartItems.indexOf(name);
    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    updateLocalStorage();

}

function updateLocalStorage() {
    localStorage.setItem("foods", JSON.stringify(cartItems));
}
