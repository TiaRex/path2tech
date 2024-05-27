// # The following code has a bug, fix it!
let user = "Cody Rhodes";

function print_message() {
    let message = "Hello, World!";
    console.log(`${message} ${user}`);
}

// console.log(message);
print_message();

// # Answer the following questions:
function answer(){
    const result = "function"; // # Write either global or function
    console.log("What scope is the result variable? ", result);
}
answer();

// # How can I get access to the question_variable without moving the question variable outside of the function?
function question() {
    let question_variable = "I want to be accessed outside of this function";

    // # write your answer here
    return question_variable;
}

let question_result = question();
console.log("The question variable is: ", question_result);