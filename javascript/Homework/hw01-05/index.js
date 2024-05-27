// Tia Truong 04/30/2024

function app() {
    greeting("Tia", "Truong", "Will I become a Software Engineer?");
    const random_number = get_random_number();
    console.log(`The answer to your question is: ${random_number === 1 ? 'Yes' : 'No'}`); 
    console.log(`Is the random number even? ${random_number%2 === 0 ? 'Yes' : 'No'}`); // bonus
    magic_eight_ball(random_number);
}

function greeting(first_name, last_name, question) {
    console.log("Welcome to this magic eight ball application");
    const full_name = `${first_name} ${last_name}`;
    console.log(`Hello my name is ${full_name} and my question is:\n${question.toUpperCase()}`); 
}

function get_random_number() {
    return Math.round(Math.random() * 8); // generate rand whole number 1 to 8
}

function magic_eight_ball(number_result) {
    switch (number_result) {
        case 1:
            console.log("It is certain.");
            break;
    
        case 2:
            console.log("Yes definitely.");
            break;
    
        case 3:
            console.log("Most likely.");
            break;
    
        case 4:
            console.log("Don't count on it.");
            break;
    
        case 5:
            console.log("Outlook not so good.");
            break;
    
        case 6:
            console.log("Very doubtful.");
            break;
    
        case 7:
            console.log("Ask again later.");
            break;

        case 8:
            console.log("Concentrate and ask again.");
            break;
    
        default:
            console.log("Not a valid case please use a number between 1 and 8");
            break;
    }
}
app();