// Exercise 4:
/*  Create a function that can copy either all or specific
    properties of an object into another. The functionality should depend
    on the arguments received. */
"use strict";
function copyProp(objA, objB, propsInput){
    const props = propsInput || Object.getOwnPropertyNames(objA) ;
    const values = Object.values(objA);

    for(let i = 0; i<props.length; i++){
        let prop =props[i];
        let val = values[i];
        Object.defineProperty(objB, prop, {value: val});
    }
};

const cup = {
    color: "white",
    content: "coffee"
};

const emptyCup = {
    size: "big"
};

copyProp(cup, emptyCup);
console.log(emptyCup);