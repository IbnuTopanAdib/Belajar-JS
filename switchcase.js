// switch

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val){
      case 1:
        answer = "alpha"
        break;
      case 2: 
        answer = "beta"
        break;
      case 3: 
        answer = "gamma"
        break;
      case 4:
        answer = "delta"
        
  
    }
  
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));

  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  
    switch(val){
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff"
        break;
    }
  
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(switchOfStuff("a"));


  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch( val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High"
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(sequentialSizes(9));

  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    // if (val === "bob") {
    //   answer = "Marley";
    // } else if (val === 42) {
    //   answer = "The Answer";
    // } else if (val === 1) {
    //   answer = "There is no #1";
    // } else if (val === 99) {
    //   answer = "Missed me by this much!";
    // } else if (val === 7) {
    //   answer = "Ate Nine";
    // }
  
    switch(val){
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1"
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break
      default:
        answer = ""
  
    }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(chainToSwitch("bob"));