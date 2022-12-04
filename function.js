//Global vs Local
function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Array

function woy(array, babi) {
  return array.push(babi);
}

const array2 = [1, 2, 3, 4, 5];

woy(array2, 6);

console.log(array2);

//Boolean value

//   Returning Boolean Values from Functions
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}
isLess(10, 15);

//Return Early Pattern for Functions
//ketika fungsi mencapai return maka kode dibawahnya tidak akan dieksekusi

function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

var who = "Ibnu";
var email = "resyaderesya@gmail.com";
var password = "complicated";

const userEmail = (userName, userEmail, userPassword) => {
  return userName + " " + userEmail + " " + userPassword;
};

console.log(userEmail(who, email, password));

const penjumlahan = (a, b) => {
  return a + b;
};

console.log(penjumlahan(9, 10));

const pengurangan = (a, b) => a - b;

console.log(pengurangan(9, 1));

const user = () => "wadaw";

console.log(user());

colors = ["blue", "red", "green", "yellow"];

copiedColors = [...colors];

console.log(copiedColors);

const array1 = (...args) => {
  return args;
};

console.log(array1("aku", "kamu", "dia"));
