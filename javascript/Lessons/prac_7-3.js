let numbers = [1, 2, 3, 4, 5];

// # Return a new array with the square of each element
let squares = numbers.map((item) => item * item);
console.log(`The squares are: ${squares}`);

// # Return a new array with only the even numbers
let evens = numbers.filter(item => item % 2 == 0);
console.log(`The even numbers are: ${evens}`);

// # Check if any number is greater than 4 in the numbers array
let hasNumberGreaterThanFour = numbers.some(item => item > 4);
console.log(`The numbers array has a number greater than 4: ${hasNumberGreaterThanFour}`);