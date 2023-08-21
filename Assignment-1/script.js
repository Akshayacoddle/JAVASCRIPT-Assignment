// variables with different data types
// check any data type is missing
const name = 'akshaya';
let middleName;
const lastName = 'paloran';
const age = 25;
const isCalculated = true;
const passWord = null;
const num = 9007199254740991n;
const symbol = Symbol('foo');
const car = {
  Name: 'Audi', model: '2023 Audi A6',
};
// data types along with each variable name in the console.
/* eslint-disable no-console */
console.log(`name :${typeof name}`);
console.log(`middleName :${typeof middleName}`);
console.log(`Last-Name : '${typeof lastName}`);
console.log(`age : ${typeof age}`);
console.log(`IS-Calculated : ${typeof isCalculated}`);
console.log(`Password : ${typeof passWord}`);
console.log(`num : ${typeof num}`);
console.log(`symbol : ${typeof symbol}`);
console.log(`car : ${typeof car}`);
// concat string with the above var without using template literals
console.log('Full Name :', name, '', lastName);
// concat string with the above var using template literals
console.log(`Full Name : ${name} ${lastName}`);
