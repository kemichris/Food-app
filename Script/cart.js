const cartCounter = document.querySelector(".cart-count");
const cartAnchor = document.querySelector(".cart-anchor");
const displayedFood = document.querySelectorAll(".food-price");
const quatityDisplays = document.querySelectorAll(".display");
const decreaseBtn = document.querySelectorAll(".reduce-btn");
const IncreaseBtn = document.querySelectorAll(".increament-btn");
const delBtn = document.querySelectorAll(".del-btn");
const totalPrice = document.getElementById("total-price");
const promoInput = document.getElementById("promoInput");
const applyPromoBtn = document.getElementById("apply-promo");
const confrimOrderBtn = document.getElementById("confirm-btn");

// script for cart item numbers 
let cart = JSON.parse(localStorage.getItem("foods")).length;
cartCounter.innerHTML = cart;
let cartItems = JSON.parse(localStorage.getItem("foods"));
// ends here

// calling the function to display the cart item 
cartDisplay();
// ends here 



// variables of total price of each item 
let smashedAvo = 20;
let yin = 10;
let pancakes = 25;
let huovos = 15;
let rancheros = 23;
let breakkie1 = 18;
let breakkie2 = 20;
let burrito = 30;

let totalSummary = 0;

// ends here 

let promoCode = "kemichris";

// calling the fuction to sum the items 
sumItems();
// ends here 



// script for the display value and buttons
let displayValue = 1;

quatityDisplays.forEach((quatityDisplay) => {
    quatityDisplay.value = displayValue;
});
// ends here 



// increament value buttons 
IncreaseBtn[0].addEventListener("click", ()=>{
    increament(0);
    sumAvo();
    sumItems();
});
IncreaseBtn[1].addEventListener("click", ()=>{
    increament(1);
    sumYin();
    sumItems();
});
IncreaseBtn[2].addEventListener("click", ()=>{
    increament(2);
    sumpanc();
    sumItems();
});
IncreaseBtn[3].addEventListener("click", ()=>{
    increament(3);
    sumHuovos();
    sumItems();
});
IncreaseBtn[4].addEventListener("click", ()=>{
    increament(4);
    sumRanch();
    sumItems();
});
IncreaseBtn[5].addEventListener("click", ()=>{
    increament(5);
    sumBreak1();
    sumItems();
});
IncreaseBtn[6].addEventListener("click", ()=>{
    increament(6);
    sumBreak2();
    sumItems();
});
IncreaseBtn[7].addEventListener("click", ()=>{
    increament(7);
    sumBurrito();
    sumItems();
});
// ends here


// decrease value buttons 
decreaseBtn[0].addEventListener("click", ()=>{
    reduce(0);
    sumAvo();
    sumItems();
});
decreaseBtn[1].addEventListener("click", ()=>{
    reduce(1);
    sumYin();
    sumItems();
});
decreaseBtn[2].addEventListener("click", ()=>{
    reduce(2);
    sumpanc();
    sumItems();
});
decreaseBtn[3].addEventListener("click", ()=>{
    reduce(3);
    sumHuovos();
    sumItems();
});
decreaseBtn[4].addEventListener("click", ()=>{
    reduce(4);
    sumRanch();
    sumItems();
});
decreaseBtn[5].addEventListener("click", ()=>{
    reduce(5);
    sumBreak1();
    sumItems();
});
decreaseBtn[6].addEventListener("click", ()=>{
    reduce(6);
    sumBreak2();
    sumItems();
});
decreaseBtn[7].addEventListener("click", ()=>{
    reduce(7);
    sumBurrito();
    sumItems();
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



// promoCode button 
applyPromoBtn.addEventListener("click", ()=>{
    addPromoCode();
});

confrimOrderBtn.addEventListener("click", ()=> {
    alert("Your order is complete and is being processed")
})





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



// functions to sum items and qty
function sumAvo() {
    let priceSum = 20 * quatityDisplays[0].value;
    smashedAvo = priceSum;
}
function sumYin() {
    let priceSum = 10 * quatityDisplays[1].value;
    yin = priceSum;
}
function sumpanc() {
    let priceSum = 25 * quatityDisplays[2].value;
    pancakes = priceSum;
}
function sumHuovos() {
    let priceSum = 15 * quatityDisplays[3].value;
    huovos = priceSum;
}
function sumRanch() {
    let priceSum = 23 * quatityDisplays[4].value;
    rancheros = priceSum;
}
function sumBreak1() {
    let priceSum = 18 * quatityDisplays[5].value;
    breakkie1 = priceSum;
}
function sumBreak2() {
    let priceSum = 20 * quatityDisplays[6].value;
    breakkie2 = priceSum;
}
function sumBurrito() {
    let priceSum = 30 * quatityDisplays[7].value;
    burrito = priceSum;
}
// ends here 



// fuction to get total value of all items 
function sumItems() {
    totalSummary = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const cartFoods = cartItems[i];

        switch (cartFoods) {
            case "smashed-avo":
                totalSummary += smashedAvo;
                break;

            case "Yin & Yang":
                totalSummary += yin;
                break;

            case "Pancakes":
                totalSummary += pancakes;
                break; 

            case "Huevos Rancheros":
                totalSummary += huovos;
                break;
    
            case "Rancheros (Tofu)":
                totalSummary += rancheros;
                break;
    
            case "Breakkie Roll":
                totalSummary += breakkie1
                break;  
            
            case "Breakkie Roll2":
                totalSummary += breakkie2
                break;
            
            case "Burrito":
                totalSummary += burrito;
                break;
                   
            default:
                break;
        }
        
    }

    totalPrice.innerHTML = totalSummary;
}



// function for promocode 
function addPromoCode() {
    let discount = totalSummary - ( totalSummary * (25/100))
    if (promoInput.value == promoCode && JSON.parse(localStorage.getItem("couponcode")) != promoInput.value) {
        totalSummary = discount;
        totalPrice.innerHTML = Math.round(totalSummary);
        alert("price reduced by 25%");
        updateLocalStorage()
    } else {
        totalPrice.innerHTML = Math.round(totalSummary);
        alert("promo code is invalid");
    }
}



// function to update the local storage 
function updateLocalStorage() {
    localStorage.setItem("foods", JSON.stringify(cartItems));
    localStorage.setItem("couponcode", JSON.stringify(promoCode));
}
