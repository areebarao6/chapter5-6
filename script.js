//chapter 5//

//Exercise 5.1://

const maxValue = 5;


const solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution);

let isCorrect = false;


while (!isCorrect) {
   
    const userGuess = parseInt(prompt(`Enter a number between 1 and ${maxValue}:`), 10);


    if (userGuess === solution) {
        isCorrect = true;
        console.log("Congratulations! Your guess is correct.");
    } else {      
        if (userGuess > solution) {
            console.log("Too high. Try again!");
        } else {
            console.log("Too low. Try again!");
        }
    }
}
// Exercise 5.2//


let counter = 0;


const step = 10;

do {
  
    console.log("Counter:", counter);

  
    counter += step;

} while (counter < 100);

console.log("Counter reached 100 or more. Loop completed.");

//Exercise 5.3//

let myWork = [];


for (let i = 1; i <= 10; i++) {
    
    const status = i % 2 === 0; 


    const lesson = {
        name: `Lesson ${i}`,
        status: status
    };


    myWork.push(lesson);
}


console.log(myWork);
//Exercise 5.4//

let myTable = [];


const numRows = 3;
const numColumns = 4;

let counters = 0;
for (let i = 0; i < numRows; i++) { 
    let tempTable = [];
    for (let j = 0; j < numColumns; j++) {
     
        counter++;
        tempTable.push(counters);
    }

   
    myTable.push(tempTable);
}
console.table(myTable);

//Exercise 5.5//

let grid = [];

const totalCells = 64;

let count = 0;


let row = [];


for (let i = 0; i <= totalCells; i++) {
   
    if (count % 8 === 0) {
     
        if (row !== undefined) {
    
            grid.push(row);
        }

        row = [];
    }

   
    count++;


    let tempValue = counter;
    row.push(tempValue);

    if (count === 8) {
     
        grid.push(row);
    }
}
console.log(grid);

//Exercise 5.6://

let myArray = [];


for (let x = 1; x <= 10; x++) {
    myArray.push(x);
}


console.log("Array:", myArray);

console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


console.log("Using for of loop:");
for (const value of myArray) {
    console.log(value);
}

//Exercise 5.7//

let myObject = {
  item1: 'Apple',
  item2: 'Banana',
  item3: 'Orange'
};


console.log("Object properties and values:");
for (let key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}


let Array = ['Apple', 'Banana', 'Orange'];


console.log("\nArray values:");
for (let i = 0; i < Array.length; i++) {
  console.log(Array[i]);
}
//Exercise 5.8//

let outputString = '';


const skipNumber = 3;


for (let i = 1; i <= 10; i++) {
   
    if (i === skipNumber) {
       
        continue;
    }

 
    outputString += i;
}


console.log("Using continue:", outputString);


outputString = ''; 


for (let i = 1; i <= 10; i++) {
 
    if (i === skipNumber) {
     
        break;
    }

    outputString += i;
}


console.log("Using break:", outputString);


let multiplicationTable = [];


const value = 5; 

for (let row = 1; row <= value; row++) {

    let tempRow = [];

    for (let col = 1; col <= value; col++) {
    
        tempRow.push(row * col);
    }

    
    multiplicationTable.push(tempRow);
}


console.log("Multiplication Table:");
for (let i = 0; i < multiplicationTable.length; i++) {
    console.log(multiplicationTable[i].join("\t"));
}

//-----------------------------------------------------------------------------------------------------------------//
//Cahpter 6//
// Exercise 6.1//

function addNumbers(num1, num2) {
  return num1 + num2;
}

let firstNumber = 5;
let secondNumber = 7;

console.log(`The sum of ${firstNumber} and ${secondNumber} is: ${addNumbers(firstNumber, secondNumber)}`);


let thirdNumber = 10;
let fourthNumber = 3;

console.log(`The sum of ${thirdNumber} and ${fourthNumber} is: ${addNumbers(thirdNumber, fourthNumber)}`);

// Exercise 6.2//

let descriptiveWords = ['Creative', 'Adventurous', 'Ambitious', 'Determined', 'Friendly', 'Energetic'];


function generateDescription() {
   
    let userName = prompt("Please enter a name:");

   
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    let randomAdjective = descriptiveWords[randomIndex];

 
    console.log(`The name ${userName} is described as ${randomAdjective}.`);
}


generateDescription();
//Exercise 6.3//

let number1 = 10;
let number2 = 5;


let operator = '+';

function calculate(value1, value2, operation) {
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else {

        return value1 + value2;
    }
}


console.log(`Result of ${number1} ${operator} ${number2}: ${calculate(number1, number2, operator)}`);


operator = '-';
console.log(`Result of ${number1} ${operator} ${number2}: ${calculate(number1, number2, operator)}`);

//Exercise 6.4//
let resultsArray = [];

for (let i = 1; i <= 10; i++) {

    let value1 = i * 5;
    let value2 = i * i;

    
    function calculateAndReturn(value1, value2) {
    
        return value1 + value2;
    }

 
    let result = calculateAndReturn(value1, value2);

    resultsArray.push(result);
}


console.log("Results Array:", resultsArray);


//Exercise 6.5//


let values = '1000';


(function() {
    let values = 'IIFE Local Value';
    console.log('Inside IIFE:', values);
})();


let result = (function() {
    let values = 'IIFE Expression Local Value';
    return values;
})();

console.log('Result Variable:', result);


(function(passedValues) {
    let values = `Anonymous Function Local Value: ${passedValues}`;
    console.log(values);
})('Custom Passed Value'); 
//Exercise 6.6//

function calculateFactorial(number) {
  if (number === 0) {
      return 1;
  } else {
      
      return number * calculateFactorial(number - 1);
  }
}


function runFactorialCalculation(initialNumber) {
  console.log(`Calculating factorial for ${initialNumber}: ${calculateFactorial(initialNumber)}`);
}

runFactorialCalculation(5); 


runFactorialCalculation(3); 
//Exercise 6.7//


let startValue = 10;

function countdown(value) {
  
    console.log(value);

    if (value < 1) {
        return;
    }

  
    countdown(value - 1);
}


function countdownDecrease(value) {

    console.log(value);

    if (value > 0) {
        return countdownDecrease(value - 1);
    }
}


console.log("Countdown:");
countdown(startValue);

console.log("\nCountdown with Decrease:");
countdownDecrease(startValue);

//Exercise 6.8//

let greetingFunctionExpression = function(name) {
  console.log(`Hello, ${name}! This is a function expression.`);
};


greetingFunctionExpression('John');


function greetingFunctionDeclaration(name) {
  console.log(`Hello, ${name}! This is a function declaration.`);
}

greetingFunctionDeclaration('Jane');
//Chapter Project//

function countUpRecursive(startNumber) {
  if (startNumber > 10) {
      return;
  }

  console.log(startNumber);
  countUpRecursive(startNumber + 1);
}


countUpRecursive(1);

const outputOne = () => console.log("One");
const outputTwo = () => console.log("Two");
const outputThree = () => {
  console.log("Three");
  outputOne();
  outputTwo();
};


const outputFour = () => {
  console.log("Four");
  setTimeout(() => countUpRecursive(1), 0);  
  setTimeout(outputThree, 0); 
};


outputFour();
