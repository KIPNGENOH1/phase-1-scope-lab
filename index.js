// Declare a global variable using var keyword
var customerName = 'bob';

// Function that uppercases the global customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function that declares a global variable bestCustomer and assigns it 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';  // This creates a global variable
}

// Function that overwrites the bestCustomer global variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';  // This changes the value of the global variable bestCustomer
}

// Declare a constant called leastFavoriteCustomer
const leastFavoriteCustomer = 'John';

// Function that attempts to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jane';  // This will cause an error because leastFavoriteCustomer is a constant
}
// Write your solution in this file!
