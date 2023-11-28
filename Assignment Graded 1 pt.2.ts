// Function to add two numbers
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Function to check if a number is even or odd
function checkEvenOrOdd(number: number): string {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Function to calculate the area of a rectangle
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Function to reverse a string
function reverseString(str: string): string {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

// Function to convert temperature from Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

// Example usage of the functions

let sumResult = add(10, 20);
console.log("Sum of 10 and 20 is:", sumResult); // Output: Sum of 10 and 20 is: 30

let numberToCheck = 15;
let evenOrOddResult = checkEvenOrOdd(numberToCheck);
console.log(numberToCheck + " is " + evenOrOddResult); // Output: 15 is Odd

let rectangleWidth = 5;
let rectangleHeight = 3;
let rectangleArea = calculateArea(rectangleWidth, rectangleHeight);
console.log("Area of the rectangle with width " + rectangleWidth + " and height " + rectangleHeight + " is:", rectangleArea); // Output: Area of the rectangle with width 5 and height 3 is: 15

let stringToReverse = "Hello World!";
let reversedString = reverseString(stringToReverse);
console.log("Reversed string of " + stringToReverse + " is:", reversedString); // Output: Reversed string of Hello World! is: !dlroW olleH

let celsiusTemperature = 25;
let fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + "°C is equal to " + fahrenheitTemperature + "°F"); // Output: 25°C is equal to 77°F

