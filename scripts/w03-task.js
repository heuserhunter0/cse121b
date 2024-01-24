/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    // get values from HTML
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    // call add function
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// click event listener to button ID 'addNumbers'
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    // get values from HTML
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // call subtraction function
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// event listener
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    // call multiply function
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// event listener
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  // Function Declaration
  function divideNumbers() {
    // Get values from HTML form controls
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
  
    // Call the divide function and assign the result to the quotient HTML element
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  // Add click event listener to the button with ID 'divideNumbers'
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    // declare and instantiate a variable to store numeric value 
    let subtotal = Number(document.querySelector('#subtotal').value);

    // check if membership checkbox has been checked
    let isMember = document.querySelector('#member').checked;
    let discount = isMember ? 0.2 : 0;

    // calculate total
    let total = subtotal - (subtotal * discount);

    // output total to span two decimals
    document.querySelector('#total').textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#array').innerHTML = numbersArray.join(', ');
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1).join(', ');
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', ');
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(', ');
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);