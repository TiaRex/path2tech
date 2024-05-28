let fruits = ['apple', 'banana', 'cherry'];

// # add an element to the end of an array
fruits.push("lychee");
console.log(`fruits: ${fruits}`);

// # remove the first element from an array
fruits.shift();
console.log(`fruits: ${fruits}`);

// # add an element to the beginning of an array
fruits.unshift("passion fruit");
console.log(`fruits: ${fruits}`);

// # remove the last element from an array
fruits.pop();
console.log(`fruits: ${fruits}`);

// # remove the first two elements from an array using splice
fruits.splice(0,2);
console.log(`fruits: ${fruits}`);

// # insert 3 elements at the beginning of the array using splice
fruits.splice(0, 0, "strawberry", "orange", "mango");
console.log(`fruits: ${fruits}`);