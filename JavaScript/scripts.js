// order form summary
const orderForm = document.getElementById("orderForm");
const orderSummary = document.getElementById("orderSummary");

// // event listener
  orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

// reset button
const resetBtn = document.getElementById("resetBtn");

// event listener for reset
  resetBtn.addEventListener("click", function () {
  orderSummary.innerHTML =
  "<h2>Order Summary</h2><p>Your order summary will appear here.</p>";
});

// variables
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let quantity = document.getElementById("quantity").value;

  let shirtType = document.querySelector('input[name="shirtType"]:checked');
  let selectedAddons = document.querySelectorAll('input[name="addons"]:checked');

// string methods
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();

// boolean
  let formIsValid = true;

// if and else
  if (firstName === "" || lastName === "" || email === "" || quantity === "") {
    alert("Please fill out all required fields.");
    formIsValid = false;
  } else if (!shirtType) {
    alert("Please select a shirt type.");
    formIsValid = false;
  } else if (quantity <= 0) {
    alert("Enter a valid quantity.");
    formIsValid = false;
  }

  if (formIsValid === true) {
    let shirtPrice = Number(shirtType.value);

// arrays
  let addonValues = [];

// loops
  for (let i = 0; i < selectedAddons.length; i++) {
    addonValues.push(Number(selectedAddons[i].value));
  }

  let addonTotal = getAddonTotal(addonValues);

// arithmetic operators
  let total = (shirtPrice + addonTotal) * quantity;

  displaySummary(firstName, lastName, email, quantity, total);
  }
});

// function that returns
function getAddonTotal(addonValues) {
let total = 0;

// loops
  for (let i = 0; i < addonValues.length; i++) {
    total += addonValues[i];
  }

  return total;
}

// function with arguments
function displaySummary(firstName, lastName, email, quantity, total) {
  orderSummary.innerHTML =
    "<h2>Order Summary</h2>" +
    "<p>Name: " + firstName + " " + lastName + "</p>" +
    "<p>Email: " + email + "</p>" +
    "<p>Quantity: " + quantity + "</p>" +
    "<p>Total Price: $" + total.toFixed(2) + "</p>";
}