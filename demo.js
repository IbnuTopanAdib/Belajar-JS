const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };
  
  const articleAuthor = article["author"];
  const articleLink = article["link"];
  
  const value = "title";
  const valueLookup = article[value];

  console.log(articleAuthor);

  function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
   const lookup = {
     "alpha" : "Adams",
     "bravo" : "Boston",
     "charlie" : "Chicago",
     "delta" : "Denver",
     "echo" : "Easy",
     "foxtrot" : "Frank"
   }
     result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");

  function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return 'Not Found';
    }
  }

  
  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside['glove box'];

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  
  console.log(secondTree)


  // Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

  const myArray = [];

// Only change code below this line

let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

// Setupconst myArray = [];

// Only change code below this line



for (var x = 1; x < 6; x++) {
  myArray.push(x);
}

for (var z = 1; z < 10; z += 2) {
    myArray.push(i);
  }

  for (let i = 9 ; i > 0; i -= 2) {
    myArray.push(i);
  }

  const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
      for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


  const iArray = [];
let u = 10;

// Only change code below this line


do {
  myArray.push(i);
  u++;
} while (u <= 10);

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

  function sum(arr, n) {
    // Only change code below this line
  
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  
    // Only change code above this line
  }