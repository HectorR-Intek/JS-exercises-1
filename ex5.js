//Exercise 5:
/*
Create a function that will:
return the number of vowels in a string
return the number of digits in a whole number using logarithm operations.
Must be the same function.
*/
"use strict";
function specialCounter(argument){
    switch(typeof(argument)){
        case "string":
            let vowels = (argument.match(/[aeiou]/gi) || []).length;
            return vowels;
        case "number":
            let logTen = Math.log(argument)/Math.log(10);
            return Math.floor(logTen+1);
        default:
            throw new Error("Input has to be either a string or a number.");
    }    
}

console.log(specialCounter("Renata Vazquez")); //exp out: 6
console.log(specialCounter(14567));
console.log(specialCounter(100));