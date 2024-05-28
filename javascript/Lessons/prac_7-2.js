let numbers = [5, 2, 3, 1, 4];

// # sort the array from lowest to highest
numbers.sort();
console.log(`The sorted array is ${numbers}`);

// # Find the first number greater than 3
let firstNumberGreaterThanThree = numbers.find(item => item > 3);
console.log(`The first number greater than three is ${firstNumberGreaterThanThree }`);

// # get the last two numbers in the array
let sliced = numbers.slice(3,5);
console.log(`The last two numbers in the array are ${sliced}`);

// # Check if the array includes the number 10
let includesTen = numbers.includes(10);
console.log(`The array ${includesTen ? "includes" : "does not include"} the number 10`);