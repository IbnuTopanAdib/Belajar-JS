function removeFirstTwo(list) {
    // Only change code below this line
   
    const [a, b, ...shorterList ] = list
    
  
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);


  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max,min}) => (max + min) / 2.0; 
  // Only change code above this line

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for( let i = 0; i< arr.length; i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line
  
    return failureItems;
  }

  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return ({name, age, gender})
    // Only change code above this line
  };