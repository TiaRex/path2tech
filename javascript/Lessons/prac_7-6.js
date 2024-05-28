// # use the spread operator to combine arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1,...arr2];

console.log(`Result from combining arrays: ${arr3}`);

// # use the concat method to combine arrays
const arr4 = [1, 2, 3, 4, 5];
const arr5 = [6, 7, 8, 9, 10];
const arr6 = [11, 12, 13, 14, 15];
const arr7 = [16, 17, 18, 19, 20];
const arr8 = [arr4.concat(arr5,arr6,arr7)];

console.log(`Result from combining arrays: ${arr8}`);