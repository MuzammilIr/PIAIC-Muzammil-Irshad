// Variable declaration
const car = 'subaru';

// Test 1: Is car == 'subaru'?
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// Test 2: Is car != 'subaru'?
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

// Test 3: Is car > 'subaru'?
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // False

// Test 4: Is car < 'subaru'?
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // False

// Test 5: Is car === 'subaru'?
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

// Test 6: Is car !== 'subaru'?
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False

// Test 7: Is car > 0?
console.log("Is car > 0? I predict True.");
console.log(car.localeCompare('subaru') > 0); // True

// Test 8: Is car < 0?
console.log("Is car < 0? I predict False.");
console.log(car.localeCompare('subaru') > 0); // False

// Test 9: Is car >= 0?
console.log("Is car >= 0? I predict True.");
console.log(car.localeCompare('subaru') > 0); // True

// Test 10: Is car <= 0?
console.log("Is car <= 0? I predict False.");
console.log(car.localeCompare('subaru') > 0); // False
