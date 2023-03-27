const cartCounter = document.querySelector(".cart-count");
const cartAnchor = document.querySelector(".cart-anchor");
const displayedFood = document.querySelectorAll(".food-price");

let cart = JSON.parse(localStorage.getItem("cart"));
cartCounter.innerHTML = cart;

let cartItems = JSON.parse(localStorage.getItem("foods"));


cartDisplay();


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


// // Sample data for the food web app
// const items = [
//     {
//       id: 1,
//       name: "Burger",
//       price: 10.99,
//     },
//     {
//       id: 2,
//       name: "Fries",
//       price: 5.99,
//     },
//     {
//       id: 3,
//       name: "Drink",
//       price: 2.99,
//     },
//   ];
  
//   // Empty array to store items in cart
//   let cartItems = [];
  
//   // Function to add item to cart
//   function addToCart(itemId) {
//     // Find the item in the items array by its id
//     let item = items.find((item) => item.id === itemId);
  
//     // Add the item to the cart
//     cartItems.push(item);
//   }
  
//   // Function to display the cart
//   function displayCart() {
//     let cart = document.getElementById("cart");
  
//     // Clear any existing data
//     cart.innerHTML = "";
  
//     // Loop through all items in the cart and add them to the list
//     for (let i = 0; i < cartItems.length; i++) {
//       let item = cartItems[i];
//       let itemNode = document.createElement("li");
//       itemNode.innerText = `${item.name} - $${item.price}`;
  
//       cart.appendChild(itemNode);
//     }
  
//     // Calculate and display the total price of items in the cart
//     let totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
//     let totalNode = document.createElement("li");
//     totalNode.innerText = `Total: $${totalPrice.toFixed(2)}`;
//     cart.appendChild(totalNode);
//   }
  
//   // Example usage:
//   // Add an item to the cart
//   addToCart(1);
  
//   // Display the items and total price in the cart
//   displayCart();
  