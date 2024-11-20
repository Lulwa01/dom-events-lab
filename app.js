// /*-------------------------------- Constants --------------------------------*/

// /*-------------------------------- Variables --------------------------------*/
// let operator = 0
// let firstNumber = 0
// let secondNumber = 0

// /*------------------------ Cached Element References ------------------------*/
// const buttons = document.querySelectorAll('.button');
// const calculator = document.querySelector('#calculator');
// const display = document.querySelector('.display');


// /*-------------------------------- Functions --------------------------------*/


// /*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });


//   display.addEventListener('click', (event) => {
//     console.log('im the display')
//   })


//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log('does this work?')
    
//     const number = event.target.textContent

//     // Example
//     if (event.target.classList.contains('number')) {
//     // Do something with this operator
//     const numberElement = document.createElement('p')
//     numberElement.textContent = number
//     display.appendChild(numberElement)
//         console.log('there is number')
//     }

//     // Example
//     if (event.target.innerText === '*') {
//     // Do something with this operator
//     const multiply = event.target.textContent
//     const multiplyNumber = document.createElement('p')
//     multiplyNumber.textContent = multiply
//     display.appendChild(multiplyNumber)
//     number * number 
//     // console.log(`${number} * ${number}`)
//     console.log('multiply')
//     }

//     if (event.target.innerText === '=') {
//         // Do something with this operator
//             console.log('equal')
//         }
//     if (event.target.innerText === '-') {
//         // Do something with this operator
//         const subtract = event.target.textContent
//         const subtracNumber = document.createElement('p')
//         subtracNumber.textContent = subtract
//         display.appendChild(subtracNumber)
//         number - number
//             console.log('subtract')
//         }
//     if (event.target.innerText === '+') {
//         // Do something with this operator
//         const add = event.target.textContent
//         const addNumber = document.createElement('p')
//         addNumber.textContent = add
//         display.appendChild(addNumber)
//         number + number
//             console.log('plus')
//         }
//     if (event.target.innerText === '/') {
//         // Do something with this operator
//         const dash = event.target.textContent
//         const dashElement = document.createElement('p')
//         dashElement.textContent = dash
//         display.appendChild(dashElement)
//             console.log('dash')
//         }

//   });
//   // I didnt know how to do it 



/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let operator = null;
let result = 0;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const displayEl = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // if it is a number
        if(event.target.classList.contains("number")) {
            if(operator === null) {
                firstNumber += event.target.innerText
                displayEl.innerText = firstNumber
            } else {
                secondNumber += event.target.innerText
                displayEl.innerText = firstNumber + operator + secondNumber 
            }
        }
        // if it is an operator
        else if (event.target.classList.contains("operator")){
            let selectedOperator = event.target.innerText
            if (selectedOperator === 'C') {
              // CLEAR DISPLAY
              displayEl.innerText = ''
              firstNumber = ''
              secondNumber = ''
              operator = null
              result = 0
            } else {
                if (firstNumber !== '') {
                    operator = event.target.innerText   
                    displayEl.innerText = firstNumber + operator
                }
            }
            
        } 
        // if it's equals
        
        else if (event.target.classList.contains("equals")) {
            calculate()
        }
    })
})
/*-------------------------------- Functions --------------------------------*/
function calculate() {
    if(firstNumber !== '' && secondNumber !== '' && operator !== null) {
        let num1 = parseFloat(firstNumber)
        let num2 = parseFloat(secondNumber)
        // do the calculation
        if (operator === '+') {
            result = num1 + num2
        } else if(operator === '-') {
            result = num1 - num2
        } else if(operator === '*') {
            result = num1 * num2
        } else if(operator === '/') {
            result = num1 / num2
        }
        displayEl.innerText = result
    }
}