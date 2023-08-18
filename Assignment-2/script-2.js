const arr = ['1', '2', '3', '4', '5', '6', '7'];
/* eslint-disable no-console */
//  a) Remove number "6"
console.log(arr.splice(arr.indexOf('6'), 1));
// a) after removing length of the array
console.log(arr.length);
// b) Convert all the items of the array to data type number
arr.forEach((value) => {
  console.log(value, typeof Number(value));
});
// c)  Remove last three items of the array
for (let i = arr.length - 1; i >= 4; i -= 1) {
  arr.pop();
}
// c) array after removing last 3
console.log(arr);
arr.unshift('one', 'two');
// c) array after adding 1,2 at begining
console.log(arr);
// d) string concatenation of all items of the array
const arr1 = ['1', '2', '3', '4', '5', '6', '7'];
let stringConcat = '';
let sumOfArray = 0;
arr1.forEach((value) => {
  stringConcat += value;
  sumOfArray += Number(value);
});
// d) string concat
console.log(stringConcat);
// d)  sum of all the items
console.log(sumOfArray);
// e)  Filter out item "3"
const filtered = arr.filter((value) => value === '3');
console.log(filtered);
console.log(arr);
// f) Iterate the array and console the item, when item is either "3", "6" or "7"
arr1.forEach((value) => {
  if (value === '3' || value === '6' || value === '7') {
    console.log(value);
  }
});
// g)Compare new array with the above given array if both have same data type
const arrNew = [1, 2, '3', 4, 5, 6, '7'];
const arrOld = ['1', '2', '3', '4', '5', '6', '7'];
if (arrNew.length === arrOld.length) {
  for (let i = 0; i < arrOld.length; i += 1) {
    if (typeof arrNew[i] === typeof arrOld[i]) {
      console.log(arrNew[i], typeof arrNew[i]);
    }
  }
}

// h)  iterate the array and multiply its with index value console if result is greater than 40
const array = [0, 2, 3, 7, 5, 6, 8];
array.forEach((value, index) => {
  if (value * index > 40) {
    console.log(value * index);
  }
});
// i) merge 2 array into a single array
const firstArray = [1, 2, 3, 4, 5];
const secondtArray = [6, 7, 8, 9, 10];
const mergeArray = firstArray.concat(secondtArray);
console.log(mergeArray);
// star pattern
const n = 5;
let string = '';
for (let i = 1; i <= n; i += 1) {
  for (let k = 1; k <= n - i; k += 1) {
    string += ' ';
  }
  for (let j = 1; j <= i; j += 1) {
    string += '* ';
  }
  string += '\n';
}
console.log(string);
