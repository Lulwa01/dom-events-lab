/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let operator = 0
let firstNumber = 0
let secondNumber = 0

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*-------------------------------- Functions --------------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });


  display.addEventListener('click', (event) => {
    console.log('im the display')
  })


  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log('does this work?')
    
    const number = event.target.textContent

    // Example
    if (event.target.classList.contains('number')) {
    // Do something with this operator
    const numberElement = document.createElement('p')
    numberElement.textContent = number
    display.appendChild(numberElement)
        console.log('there is number')
    }

    // Example
    if (event.target.innerText === '*') {
    // Do something with this operator
    const multiply = event.target.textContent
    const multiplyNumber = document.createElement('p')
    multiplyNumber.textContent = multiply
    display.appendChild(multiplyNumber)
    number * number 
    // console.log(`${number} * ${number}`)
    console.log('multiply')
    }

    if (event.target.innerText === '=') {
        // Do something with this operator
            console.log('equal')
        }
    if (event.target.innerText === '-') {
        // Do something with this operator
        const subtract = event.target.textContent
        const subtracNumber = document.createElement('p')
        subtracNumber.textContent = subtract
        display.appendChild(subtracNumber)
        number - number
            console.log('subtract')
        }
    if (event.target.innerText === '+') {
        // Do something with this operator
        const add = event.target.textContent
        const addNumber = document.createElement('p')
        addNumber.textContent = add
        display.appendChild(addNumber)
        number + number
            console.log('plus')
        }
    if (event.target.innerText === '/') {
        // Do something with this operator
        const dash = event.target.textContent
        const dashElement = document.createElement('p')
        dashElement.textContent = dash
        display.appendChild(dashElement)
            console.log('dash')
        }

  });
  // I didnt know how to do it 