// Initialize an array with initial elements
let numbers: number[] = [1, 2, 3, 4, 5];

// -------------------- Scenario 1: Modifying Array with Methods --------------------

// Pushing new elements to the end of the array
numbers.push(6, 7);
console.log("Modified array after pushing:", numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

// Removing the last element from the array
let removedElement = numbers.pop();
console.log("Removed element using pop:", removedElement); // Output: 7
console.log("Modified array after pop:", numbers); // Output: [1, 2, 3, 4, 5, 6]

// Removing the first element from the array
removedElement = numbers.shift();
console.log("Removed element using shift:", removedElement); // Output: 1
console.log("Modified array after shift:", numbers); // Output: [2, 3, 4, 5, 6]

// Adding new elements to the beginning of the array
numbers.unshift(-1, 0);
console.log("Modified array after unshift:", numbers); // Output: [-1, 0, 2, 3, 4, 5, 6]

// -------------------- Scenario 2: Subarray Creation --------------------

// Creating a subarray using splice to remove elements and form a new array
let subarray1 = numbers.splice(2, 3);
console.log("Subarray created using splice:", subarray1); // Output: [3, 4, 5]
console.log("Original array after splice:", numbers); // Output: [-1, 0, 6]

// Creating a subarray using slice to copy a portion of the original array without modifying it
let subarray2 = numbers.slice(1, 4);
console.log("Subarray created using slice:", subarray2); // Output: [0, 6]
console.log("Original array remains unchanged:", numbers); // Output: [-1, 0, 6]
