// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
   for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");



  function randomFraction() {
    // Only change code below this line.
    var result = 0;
    // Math.random() can generate 0. We don't want to     return a 0,
    // so keep generating random numbers until we get one     that isn't 0
    while (result === 0) {
      result = Math.random();
    }
  
    return result;
    // Only change code above this line.
  }

  var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}


function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");


  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }


  function checkSign(num) {
    return num > 0 ? "positive"
      : num < 0 ? "negative"
      : "zero";
  }

  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }