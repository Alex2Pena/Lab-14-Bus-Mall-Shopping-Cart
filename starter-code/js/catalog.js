/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options

// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i=0; i<Product.allProducts.length; i++) {
    var option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    selectElement.add(option);
  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
var currentCart = [];
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  var form = document.getElementById('catalog')
  // TODO: Add the selected item and quantity to the cart
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  function addSelectedItemToCart() {
    var product = event.target.items.value;
    var quantity = parseInt(event.target.quantity.value);
    var newCart = new CartItem(product,quantity);
    currentCart.push(newCart);
    form.reset();
console.log(currentCart);
    // console.log(name,itemQuantity);
  }
  // Do all the things ...
  
  cart.saveToLocalStorage();
  
  
  addSelectedItemToCart();
  
  
  
  updateCartPreview();
}
updateCounter();
// TODO: Update the cart count in the header nav with the number of items in the Cart
var totalQuantity = 0;

function updateCounter() {
  for (var i=0; i<currentCart.length; i++){
    itemCount.textContent = totalQuantity;
  totalQuantity = totalQuantity + currentCart[i];
  // itemCount = totalQuantity;
  }
}
console.log(totalQuantity);
// if they press add to cart then item in cart item++
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var cartContents = document.getElementById('cartContents');
  var productUl = document.createElement('ul');
  
  for (var i=0; i<currentCart.length; i++){
    var productLi = document.createElement('li');
    productLi.textContent = `You have ${currentCart[i].quantity} amount of ${currentCart[i].product}.`;
    productUl.appendChild(productLi);
  }
  cartContents.appendChild(productUl);
}
    // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
