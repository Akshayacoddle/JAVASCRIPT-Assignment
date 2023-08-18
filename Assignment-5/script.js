// eslint-disable-next-line no-unused-vars
function submitForm() {
  let Err = true;
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  const name = document.getElementById('name').value;
  const mobileNum = document.getElementById('mobile').value;
  const place = document.getElementById('place').value;
  const companyName = document.getElementById('company').value;
  const pinCode = document.getElementById('pin').value;
  const nameId = document.getElementById('name').id;
  const mobileNumId = document.getElementById('mobile').id;
  const placeId = document.getElementById('place').id;
  const companyNameId = document.getElementById('company').id;
  const pinCodeId = document.getElementById('pin').id;
  /* a) if any of the fields are empty on submitting it should show
  corresponding error messages below all the required fields. */
  if (mobileNum === '' || name === '' || place === '' || companyName === '') {
    // eslint-disable-next-line no-alert
    alert('below all the required fields! please fill it out');
    // d) store the details in the local storage and clear the form
  } else {
    localStorage.setItem(nameId, name);
    localStorage.setItem(mobileNumId, mobileNum);
    localStorage.setItem(placeId, place);
    localStorage.setItem(companyNameId, companyName);
    localStorage.setItem(pinCodeId, pinCode);
    // eslint-disable-next-line no-undef
    form.reset();
  }
  // b) pin code and mobile number fields should be integer
  // c)The minimum length of the phone number should be 10
  const regex1 = /^[1-9]\d{9}$/;
  if (regex1.test(mobileNum) === false) {
    document.getElementById('namediv').innerHTML = 'please enter valid number .must have 10-digit';
  } else {
    document.getElementById('namediv').innerHTML = '';
    Err = false;
  }
  const regex = /^[1-9]\d{5}$/;
  if (regex.test(pinCode) === false) {
    document.getElementById('pindiv').innerHTML = 'please enter valid 6-digit Pin';
  } else {
    document.getElementById('pindiv').innerHTML = '';
    // eslint-disable-next-line no-unused-vars
    Err = false;
  }
}
/* Make a prepopulate button, which when clicked will populate the form with values in the
 local storage if it exists, otherwise, the button will be disabled. */
if (localStorage.getItem('name') === null) {
  // eslint-disable-next-line no-console
  console.log('novalue');
} else {
  const para = document.createElement('button');
  const node = document.createTextNode('PrePopulate');
  para.appendChild(node);
  para.setAttribute('id', 'element');
  const element = document.getElementById('button');
  element.appendChild(para);
  para.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('mobile').value = localStorage.getItem('mobile');
    document.getElementById('place').value = localStorage.getItem('place');
    document.getElementById('company').value = localStorage.getItem('company');
    document.getElementById('pin').value = localStorage.getItem('pin');
  });
}
/* 2 )Create a button and div using JS, when clicked on the button your basic details should be
shown in the div.The static HTML file should only contain the basic HTML structure, no div/buttons.
*/
const para2 = document.createElement('div');
const node2 = document.createTextNode('');
para2.appendChild(node2);
para2.setAttribute('id', 'divelement');
const divelement = document.querySelector('body');
divelement.appendChild(para2);
document.getElementById('divelement').style.width = '300px';

const para1 = document.createElement('button');
const node1 = document.createTextNode('click to view detail');
para1.appendChild(node1);
para1.setAttribute('id', 'element2');
const element2 = document.querySelector('body');
element2.appendChild(para1);
para1.addEventListener('click', () => {
  document.getElementById('divelement').innerHTML = `Name: ${localStorage.getItem('name')} <br> Phone : ${localStorage.getItem('mobile')}  
  <br> Place : ${localStorage.getItem('place')} <br> company : ${localStorage.getItem('company')} <br> Pin : ${localStorage.getItem('pin')}`;
});
// 3) Create a private variable and console it by accessing it.
class Private {
  #companyName = '';

  static age = 24;

  static getAge() {
    return this.age;
  }

  setName(name) {
    this.#companyName = name;
  }

  getName() {
    return this.#companyName;
  }
}
const DataPrivate = new Private();
DataPrivate.setName('coddle');
// eslint-disable-next-line no-console
console.log(DataPrivate.getName());
// 4) Create a static variable and console it by accessing it.
// eslint-disable-next-line no-console
console.log(Private.age);
