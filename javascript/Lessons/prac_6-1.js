// # write a while loop that prints the numbers 1 through 10
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

// # write a while loop that prints the multiplication table of 5
let j = 1;
while(j <= 10){
    console.log(`5 * ${j} = ${j}*5`);
    j++;
}

// # write a while loop that calculates the factorial of a number. EX: the factorial of 5 is 5*4*3*2*1 = 120
let factorial = 1;
let counter = 5;
while(counter > 0){
// # write your logic here
    factorial *= counter;
    counter--;
}

console.log(`The factorial of ${counter} is ${factorial}`);