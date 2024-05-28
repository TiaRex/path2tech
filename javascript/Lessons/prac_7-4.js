// # use a traditional for loop to iterate over an array
let numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// # use a for of loop to iterate over an array
let arr = ['a', 'b', 'c', 'd', 'e'];
for(const i of arr) {
    console.log(i);
}

// # use a forEach loop to iterate over an array
let characters = ['mickey', 'minnie', 'goofy', 'donald', 'daisy'];
characters.forEach((item) => console.log(item));