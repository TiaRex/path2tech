// # write a for loop that prints the numbers 1 through 10. but stops if the number is 5
for(let i = 1; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);    
}
    
    
// # write a for loop that prints the numbers 1 through 10. but skips the number 5 
for(let i = 1; i <= 10; i++){
    
    if(i == 5){
        continue;
    }
    console.log(i);
}