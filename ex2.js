//Exercise 2:
/*Create a function that can limit the execution 
of other functions to a determined amount of times. */
"use strict";
function limitFunc(func, times){
    let counter = 0;

    return function(){
        if (counter < times){
            counter++;
            func();
            return;
        }
        console.log("Function has been called too many times");
    }
}

function test(){
    console.log("This is a test");
    return;
}

const limited = limitFunc(test, 4);
limited();
limited();
limited();
limited();
limited();
limited();
