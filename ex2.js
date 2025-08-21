//Exercise 2:
/*Create a function that can limit the execution 
of other functions to a determined amount of times. */
"use strict";
function limitFunc(func, times){
    let counter = 0;

    return function(...args){
        if (counter < times){
            counter++;
            return func.apply(this, args);  // Same context, same arguments as usually called.
        }
        throw new Error("Function has been called too many times");
    }
}

function print(...args){
    console.log(`This prints the arguments: ${args}`);
    return;
}

print("Hello ", "Everyone");

const limited = limitFunc(print, 3);
limited("Hello ", "Everyone");
limited("Hello ", "Everyone");
limited("Hello ", "Everyone");
limited("Hello ", "Everyone");