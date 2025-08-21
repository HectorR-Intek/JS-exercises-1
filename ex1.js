"use strict";
function sortWords(arr, order){
  switch(order){
    case "asc":
      return sortAlphabetically(arr); 
    case "desc":
      return sortAlphabetically(arr, 1);
    case "len":
      return sortLength(arr);
    case "len-desc":
      return sortLength(arr, 1);
    case "cons":
      return sortConsonants(arr);
    case "cons-desc":
      return sortConsonants(arr, 1);
  }
}

function sortAlphabetically(arr, reverseFlag = 0){
  arr.sort();
  if(reverseFlag) return arr.reverse();
  return arr;
}

function sortLength(arr, reverseFlag = 0){
  arr.sort((a,b)=> (a.length - b.length));
  if(reverseFlag) return arr.reverse()
  return arr;  
}

function sortConsonants(arr, reverseFlag = 0){
  const countConsonants = (word) =>
    (word.match(/[^aeiou\s\d\W_]/gi) || []).length;
  arr.sort((a,b) => (countConsonants(a)-countConsonants(b)));
  if(reverseFlag) return arr.reverse();
  return arr;
}

console.log(sortWords(["Tiger", "Lion", "Turtle", "Shark"], "desc"));