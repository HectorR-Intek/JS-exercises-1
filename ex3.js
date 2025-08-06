// Exercise #3:
/* Create a function that will set the color, font-size, 
   and background color of a DOM element.
   If there are fewer arguments, it should place a default value. 
   Use the this parameter to access the values of the DOM element. 
   (e.g. this.color or this.style.color)*/
"use strict";
function modifyDOM(newColor, newBackground, newSize){
    // Blue, red and larger are the default settings.
    this.style.color  = newColor || "blue";
    this.style.background = newBackground || "red";
    this.style.fontSize = newSize || "larger";
}

const element = document.getElementById("theDiv");
const modifyElement = modifyDOM.bind(element);

modifyElement("black", "yellow", "small");