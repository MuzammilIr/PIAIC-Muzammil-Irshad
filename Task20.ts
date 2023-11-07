const str1 = 'Hello';
const str2 = 'World';

console.log('Is str1 == str2?');
console.log(str1 == str2); // False

console.log('Is str1 != str2?');
console.log(str1 != str2); // True

const Str1 = 'HELLO';
const Str2 = 'hello';

console.log('Is str1.toLowerCase() == str2?');
console.log(str1.toLowerCase() == str2); // True

console.log('Is str1.toLowerCase() != str2?');
console.log(str1.toLowerCase() != str2); // False


const num1 = 10;
const num2 = 20;

console.log('Is num1 == num2?');
console.log(num1 == num2); // False

console.log('Is num1 != num2?');
console.log(num1 != num2); // True

console.log('Is num1 > num2?');
console.log(num1 > num2); // False

console.log('Is num1 < num2?');
console.log(num1 < num2); // True

console.log('Is num1 >= num2?');
console.log(num1 >= num2); // False

console.log('Is num1 <= num2?');
console.log(num1 <= num2); // True

const Num1 = 10;
const Num2 = 20;

console.log('Is num1 > 0 and num2 > 0?');
console.log(num1 > 0 && num2 > 0); // True

console.log('Is num1 > 0 or num2 > 0?');
console.log(num1 > 0 || num2 > 0); // True

const arr = [1, 2, 3, 4, 5];

console.log('Is 2 in arr?');
console.log(arr.includes(2)); // True

console.log('Is 6 in arr?');
console.log(arr.includes(6)); // False

const Arr = [1, 2, 3, 4, 5];

console.log('Is 6 not in arr?');
console.log(!Arr.includes(6)); // True

console.log('Is 2 not in arr?');
console.log(!Arr.includes(2)); // False
