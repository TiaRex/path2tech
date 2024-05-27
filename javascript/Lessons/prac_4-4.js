// # create a calculate_sum function that takes two parameters and returns the sum of the two parameters, then create a calculate_wrapper function that takes three parameters, two number parameters, and a callback parameter. Then in the function call the callback function and pass the two number parameters as arguments and return the result
function calculate_sum(num1,num2) { // # write the parameters within the parenthesis

    // # write your code here
    return num1 + num2; 
}
    
function calculate_wrapper(num1,num2,callback) { // # write the parameters within the parenthesis
    
    // # write your code here
    const ans = callback(num1, num2);
    return ans;
}
    
let calculate_result = calculate_wrapper(3,4,calculate_sum);
console.log("The result is: ", calculate_result);
    
    
    
// # Using the divide function, complete the divide_wrapper funtion passing three parameters, two number parameters, and a callback parameter. Then in the function divide the parameters and return the result
function divide(num1, num2) {
    
    return num1 / num2;
}
    
function divide_wrapper(num1,num2,callback) { // # write the parameters within the parenthesis
    
    // # write your code here
    const ans = callback(num1, num2);
    return ans;
}
    
let result = divide_wrapper(10,2,divide);
console.log("The result is: ", result);