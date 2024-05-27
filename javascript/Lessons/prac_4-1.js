// # Create a sum function that takes in two parameters and print the sum of the two parameters.
function sum(num_one, num_two) { // # enter your parameters between the parenthesis
    //# code goes here
    const sum = num_one + num_two;
    console.log("The sum is: ", sum);
}
    
// # call your function here
sum(1,1);

// # create a subtract function that takes in two parameters, set the default parameters to a number of your choice and print the result of the two parameters, when calling the function do not pass any arguments.
function subtract(num_one, num_two) { // # enter your parameters between the parenthesis
    
    //# code goes here
    const diff = num_one - num_two;
    console.log("The result of subtracting the two numbers is: ", diff);
}
    
// # call your function here
subtract(8,2);

function sum_nums(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result = sum_nums(3, 4);
const second_result = sum_nums(result, 5);
console.log(second_result);