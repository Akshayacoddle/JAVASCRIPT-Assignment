/* const arr = ['1', '2', '3', '4', '5', '6', '7'];
console.log(arr.length);
// b) Convert all the items of the array to data type number
arr.forEach((value, index) => {
  console.log(value, index);
});
const limit = arr.length - 3;
for (let i = arr.length - 1; i >= limit; i -= 1) {
  arr.pop();
}
arr.unshift('one', 'two', 7, 9, 8);
console.log(arr); 
let person = {
  name: 'akshaya',
  age: 22,
  qualification: 'mca',
};

let numbers = Object.values(person);

console.log(numbers);
 Object.entries(person).forEach(element => {
  console.log(element);
}); 
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);
let a = [[1, 2], [3, 4], 55, 33, 2];

// Iterate through the outer array
for (let i = 0; i < a.length; i++) {
  // Check if the element is an array
  if (Array.isArray(a[i])) {
    // Iterate through the inner array
    for (let j = 0; j < a[i].length; j++) {
      console.log(a[i][j]);
    }
  } else {
    console.log(a[i]);
  }
} 
let a = [55, 33, 2];
const b = [];
for (let i = 0; i < a.length; i++) {
  b.push(a[i])
}
b.push(9)
console.log('a ' + a);
console.log('b ' + b);
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 5)); // "zil" 
var arr = [1, "Sachin", true, {}, 'c', [10, "Ramu", false], 7777, "dakdah", true];
console.log('length of array ', arr.length);
console.log(arr.indexOf(true));
var arr = ["Virat", 10, "Sachin", true, null, 15.7655343421];
console.log(arr.join('-'));
var arr = ["Virat", 10, "Sachin", true, null, 15.7655343421]; 
var a = ['a', 'y', 'e', 'z', 'x', 'y'];
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.slice(2, 10));
arr.splice(arr.indexOf(7), 1);
console.log(arr); 
var a = ['a', 'y', 'e', ['z', 'x'], 'y'];
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var [num1, num2, num3, ...rest] = arr;
var b = [...a, ...rest]
console.log(num1 + " " + num2 + " " + num3); //10 20

// Traditional function expression
let add = function (x, y) {
  return x + y;
};
console.log(add(3, 5));
// Arrow function
let addArrow = (x, y) => x + y;
console.log(addArrow(53, 5));
let count =0
for(let i=0;i<10;i++){
$('p').click((e) => {

})
} 


var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
arr.forEach((element, ind, arr) => {
  console.log(element + " " + ind + " " + arr);
});


let a = [[1, 2], [3, 4], 55, 33, 2];
function iterateArray(arr) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      // If the element is an array, recursively call the function
      iterateArray(element);
    } else {
      // If the element is not an array, log or process it
      console.log(element);
    }
  }
}

// Call the function with the provided array
iterateArray(a); 

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);

const numbers = [65, 44, 12, 4];
const newArr = [...numbers];
newArr.push(40)
console.log(numbers);
console.log(newArr);
let result = 0;
const numbers = [65, 44, 12, 4];
const filtered = numbers.filter((value) => {
  return value > 4;
  // console.log(value + "  " + index);
})
console.log(filtered);

x = 10;
console.log(x);
const x; 
add()
function add() {

  if (true) {
    const x = 11;
    console.log('hi');

  }
  console.log(x);
}

let a = [1, 2, 3, 4];
let [num1, num2, ...rest] = a;
;
console.log(a.concat(1, 3));
console.log(a);
a.forEach((e) => {
  console.log(e + 2);
}) 
let a = 'akshaya';

console.log(a.substring(-6));
let person = {
  name: 'akshaya',
  age: 22,
  qualification: 'mca',
};
console.table(person);
console.log('hello', 22, '/');
a = [1, 2, 3, 4];
console.log(a.splice(0, 1, 8));
console.log(a);
let result = 'huhg' - 'u';
console.log(result);

let a = [[1, 2], [3, [9, 33, 8], 4], 55, 33, 2];
function check(a) {
  a.forEach(element => {
    if (Array.isArray(element)) {
      check(element);
    } else {
      console.log(element);
    }
  });
}
check(a);
a = [1, 2, 3, 4];
let result = a.reduce((prev, current) => current + prev);
console.log('result  ' + result); 

const firstArray = [1, 2, 3, 4, 5];
const secondtArray = [6, 7, 8, 9, 10];
const mergeArray = [...firstArray, ...secondtArray];

console.log(...firstArray);
let a = firstArray.splice(1, 4);
console.log(firstArray);
a = '';
console.log(typeof a);
a = null;
console.log(typeof a); 

const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "coding", "traveling"],
  address: {
    city: "Example City",
    country: "Example Country"
  }
};

// Accessing properties
console.log(person.name); // "John Doe"
console.log(person.hobbies[0]); // "reading"
console.log(person.address.city);
console.log(person['hobbies'][0]);*/


/*for (i = 0; i < 5; i++) {
  var a = 10;

}
console.log(a);
function sum() {
  var a = 10;
}
sum();
console.log(a);

var i = 0;
for (i = 0; i < 5; i++) {
  alert(i)

}
alert(i)
let b = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [8, 4, 8]];
for (let i = 0; i < b.length; i++) {
  for (let j = 0; j < b[i].length; j++) {
    console.log(b[i][j]);
  }
}
let a = [1, 2, 4, 5, 6];
let b = [2, 8, 5];
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] !== b[j]) {
      console.log(a[i]);
    }
  }
}


const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "coding", "traveling"],
  address: {
    city: "Example City",
    country: "Example Country"
  }
};

let a = [1, 2, 4, 5, 6];
console.log(a.length);
console.log(Object.keys(person).length);


let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": ["A", "B"],
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": { "a": "D" },
    "capacity": 5
  },
  {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}

]
let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.unshift(car);
console.log(Object.keys(cars).sort);


console.log(Array.isArray(cars[0].registration)); */

let element = [[1, 2, 3], [4, 5, 6], [7, 90, 88], [{ a: '1', b: '2' }, { c: '3', d: 4 }, { f: [6, 7, 8], g: 'a' }]];
/*console.log(arr[3][2].g);

function check(arr) {
  arr.forEach(element => {
    if (Array.isArray(element)) {
      check(element);
    } else {
      console.log(element);
    }
  });
}
check(arr);
else if (typeof arr === "object" && arr !== null) {
  console.log(`Car ${i + 1} has an object registration.`);
}*/



function check(arr) {
  arr.forEach(element => {
    if (Array.isArray(element)) {
      check(element);
    } else if (typeof arr === "object" && arr !== null) {
      console.log(arr[element]);
    } else {
      console.log(element);
    }
  });
}
console.log(Number.isInteger(2.8));