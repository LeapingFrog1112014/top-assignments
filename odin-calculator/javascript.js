// Functions

function operate (userData) {
    
}

// Calculator Display Setup

const userData = {
    num1: '1',
    operator: '+',
    num2: '2'
}

const displayContainer = document.querySelector('.display-container');

const displayScreen = document.createElement('div');
displayScreen.setAttribute('style', 'display: flex; flex: 1; background-color: white; justify-content: space-around; font-size: 36px');

const displayNum1 = document.createElement('p'); 
displayNum1.innerText = `${userData.num1}`;

const displayOperator = document.createElement('p'); 
displayOperator.innerText = `${userData.operator}`;

const displayNum2 = document.createElement('p'); 
displayNum2.innerText = `${userData.num2}`;

displayScreen.appendChild(displayNum1);
displayScreen.appendChild(displayOperator);
displayScreen.appendChild(displayNum2);

displayContainer.appendChild(displayScreen);

const calculatorContainer = document.querySelector('.calc');

const numbersContainer = document.createElement('div');
numbersContainer.setAttribute('style', 'display: flex; flex-direction: column; border: solid black;')

const numbers13 = document.createElement('div');
numbers13.setAttribute('style', 'display: flex; flex: 1; justify-content:space-between');
const number1 = document.createElement('a');
number1.classList.add('numbers')
number1.innerText = '1';
const number2 = document.createElement('a');
number2.classList.add('numbers')
number2.innerText = '2';
const number3 = document.createElement('a');
number2.classList.add('numbers')
number3.innerText = '3';
number3.classList.add('numbers')
const operatorPlus = document.createElement('a');
operatorPlus.classList.add('operators');
operatorPlus.innerText = '+';

numbers13.appendChild(number1);
numbers13.appendChild(number2);
numbers13.appendChild(number3);
numbers13.appendChild(operatorPlus);

numbersContainer.appendChild(numbers13);
calculatorContainer.appendChild(numbersContainer);

const numbers46 = document.createElement('div');
numbers46.setAttribute('style', 'display: flex; flex: 1; justify-content:space-between');
const number4 = document.createElement('a');
number4.classList.add('numbers')
number4.innerText = '4';
const number5 = document.createElement('a');
number5.classList.add('numbers')
number5.innerText = '5';
const number6 = document.createElement('a');
number6.classList.add('numbers')
number6.innerText = '6';
number6.classList.add('numbers')
const operatorSubtraction = document.createElement('a');
operatorSubtraction.classList.add('operators');
operatorSubtraction.innerText = '-';

numbers46.appendChild(number4);
numbers46.appendChild(number5);
numbers46.appendChild(number6);
numbers46.appendChild(operatorSubtraction);


numbersContainer.appendChild(numbers46);
calculatorContainer.appendChild(numbersContainer);

const numbers79 = document.createElement('div');
numbers79.setAttribute('style', 'display: flex; flex: 1; justify-content:space-between');
const number7 = document.createElement('a');
number7.classList.add('numbers')
number7.innerText = '7';
const number8 = document.createElement('a');
number8.classList.add('numbers')
number8.innerText = '8';
const number9 = document.createElement('a');
number9.classList.add('numbers')
number9.innerText = '9';
number9.classList.add('numbers')
const operatorDivision = document.createElement('a');
operatorDivision.classList.add('operators');
operatorDivision.innerText = '/';

numbers79.appendChild(number7);
numbers79.appendChild(number8);
numbers79.appendChild(number9);
numbers79.appendChild(operatorDivision);

numbersContainer.appendChild(numbers79);
calculatorContainer.appendChild(numbersContainer);

const numbers0 = document.createElement('div');
numbers0.setAttribute('style', 'display: flex; flex: 1; justify-content:space-between');
const number0 = document.createElement('a');
number0.classList.add('numbers')
number0.innerText = '0';
const operatorMultiplication = document.createElement('a');
operatorMultiplication.classList.add('operators');
operatorMultiplication.innerText = '*';
const operatorExponent = document.createElement('a');
operatorExponent.classList.add('operators');
operatorExponent.innerText = '^';
const operatorEqual = document.createElement('a');
operatorEqual.setAttribute('id', 'equalTo');
operatorEqual.classList.add('operators');
operatorEqual.innerText = '=';





numbers0.appendChild(number0);
numbers0.appendChild(operatorMultiplication);
numbers0.appendChild(operatorExponent);
numbers0.appendChild(operatorEqual);

numbersContainer.appendChild(numbers0);
calculatorContainer.appendChild(numbersContainer);
