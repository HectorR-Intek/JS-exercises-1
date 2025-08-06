// Exercise #1
// Sorting with different criteria:
"use strict";
function sortWords(words, order = "asc") {
  const arr = [...words]; // copying the array
  const countConsonants = (word) =>
    (word.match(/[^aeiou\s\d\W_]/gi) || []).length;

  const compare = (a, b) => {
    switch (order) {
      case "desc":
        return a.localeCompare(b) < 0;
      case "length-asc":
        return a.length > b.length;
      case "length-desc":
        return a.length < b.length;
      case "consonants-asc":
        return countConsonants(a) > countConsonants(b);
      case "consonants-desc":
        return countConsonants(a) < countConsonants(b);
      case "asc":
      default:
        return a.localeCompare(b) > 0;
    }
  };

  // Bubble sort
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(sortWords(["Tiger", "Lion", "Turtle", "Shark"], "desc"));