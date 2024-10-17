/* eslint-disable no-console */
// 1)Use switch statement inside a map function and console each item by using switch statement.
// do with one case
const array = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
array.map((value, index) => {
  switch (index) {
    case index: console.log(value);
      break;
    default: console.log('array index out of bond');
      break;
  }
  return 0;
});
// 2)  Write a closure function to delete indexes 5 and 2 of this array.
function parent() {
  const arrayClosure = [1, 2, 3, 4, 5, 6];
  function child() {
    arrayClosure.splice(arrayClosure.indexOf(5), 1);
    arrayClosure.splice(arrayClosure.indexOf(2), 1);
    return arrayClosure;
  }
  console.log(child);
  return child;
}
const res = parent();
const val = res();
console.log('gggggggggggg' + val);
/* 3)Use constructor method to console all elements of the passed array.
(the array will be passed to theconstructor method) */
// method comes in class
class ArrayItem {
  constructor(arrayCons) {
    this.arrayCons = arrayCons;
    arrayCons.forEach((element) => {
      console.log(element);
    });
  }
}
const arrayCons = [1, 2, 3, 4, 5, 6];
// eslint-disable-next-line no-unused-vars
const arrayItem = new ArrayItem(arrayCons);
// where is the full q?
/* 4)Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being
any one of the item name either in the passed array or not in the passed array, the function
should delete the passed item if it exists in the array, if it doesn't exist then the item
should be inserted into the array, finnally console the output. */
function checkingArrayItem(arr1, item) {
  let flag = 0;
  arr1.forEach((element) => {
    if (element === item) {
      flag += 1;
    }
  });
  return flag;
}
const arr = [1, 2, 3, 4, 5];
const item = 3;
const flag = checkingArrayItem(arr, item);
if (flag === 1) {
  arr.splice(arr.indexOf(item), 1);
} else {
  arr.push(item);
}
console.log(arr);
// 5) Create a self-invoking function to console you name.
(function () {
  console.log('Akshaya');
}());
/* 6) {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }:Using this object make an array
 consisting of allthe keys of the given object in reverse order. (output should be
   ['q', 'p', 'c', 'f', 'b', 'a']) */
const objectArray = {
  a: 'one',
  b: '2',
  f: '5',
  c: '33',
  p: 'do',
  q: 'one',
};
console.log(Object.keys(objectArray).reverse());
/* 7) { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},
{a:'five', id:'212'}] } From the given object remove the data array item with id as '24'.
(consider that the data arrays order will be different every time you get, so write code in
  such a way that given any object it will remove the item with id as 24 if it exists ) */
const data = [
  { a: 'one', id: '22' },
  { a: 'four', id: '7' },
  { a: 'six', b: '2' },
  { a: 'sixty', id: '24' },
  { a: 'five', id: '212' },
];
for (let i = 0; i < data.length; i += 1) {
  const result = (data[i].id);
  if (result === '24') {
    delete data[i];
  }
}
console.log(data);
// 8 a) Get the length of the string.
const string = 'Javascript is the King of the web.';
console.log(string.length);
// b) Print the 8th character of the string without using any function.
console.log(string[7]);
// c) Execute the above code from browser console.
console.log(string[7]);
// d) Get the position of the word "King" in string.
console.log(string.indexOf('King'));
// e) Replace "King" with "Emperor".
console.log(string.replace('King', 'Emperor'));
// f) Insert the string "new” before the word "King"
const index = string.indexOf('King');
const newString = `${string.slice(0, index)} new ${string.slice(index)}`;
console.log(newString);
// g) Get the words in string as an array.
console.log(string.split(' '));
// h) Extract and print the words "is the King" from string.
console.log(string.substring(string.indexOf('is'), string.indexOf('of')));
// i) Get the count of occurrences of the strings "the" and "of" in string.
console.log(string.match(/the/gi).length);
console.log(string.match(/of/gi).length);
/* j) pad string with "*" and set the total length of the string as 30, displayed at right side.
remove string using js not manually */
const string2 = string.slice(0, 25);
console.log(string2.padEnd(30, '*'));
