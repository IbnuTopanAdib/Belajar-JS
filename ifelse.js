function trueOrFalse(wasThatTrue) {
    
    if (wasThatTrue){
      return "Yes, that was true"
    }
    return "No, that was false"
  
  }
  
  
  trueOrFalse(true);
  trueOrFalse(false);

//Comparison with equality operator

  function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  testEqual("12");

//Comparison with strict equality operator

function testStrict(val) {
    if (val===7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  testStrict("7");
  testStrict(7);


  function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

//Comparison with inequality operator
  function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testNotEqual(99));

//Comparison with strict inequality  operator
  function testStrictNotEqual(val) {
    if (val!== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  testStrictNotEqual(17);
  testStrictNotEqual("17");

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);


//   Comparison with the Less Than Operator
  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
//   Comparison with the Less Than Or Equal To Operator
  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

//   Comparisons with the Logical And Operator
function banding(){
if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
  }
  return "No";
}
function banding1(){
  if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";
}


// Comparisons with the Logical Or Operator

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
  
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

//   Introducing Else If Statements
// order are matters in if else statements
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    }else {
      return "Between 5 and 10";
    }
  }
  
  testElseIf(7);
