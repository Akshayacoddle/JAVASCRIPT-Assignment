// variables with different data types
//check any data type is missing
const name = "akshaya";
let middleName;
const lastName = "paloran";
const age = 25;
const isCalculated = true;
const passWord = null;
// data types along with each variable name in the console.
/* eslint-disable no-console */
//specify the datatypes in the console
console.log(`name :${typeof name}`);
console.log(`middleName :${typeof middleName}`);
console.log(`Last-Name : '${typeof lastName}`);
console.log(`age : ${typeof age}`);
console.log(`IS-Calculated : ${typeof isCalculated}`);
console.log(`Password : ${typeof passWord}`);
// concat string with the above var without using template literals
console.log("Full Name :", name, "", lastName);
// concat string with the above var using template literals
console.log(`Full Name : ${name} ${lastName}`);
