// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-restricted-globals
let errName = false;
let errMob = false;
let errPlace = false;
let errCompany = false;
let errpin = false;
const form = document.getElementById('form');
const name = document.getElementById('name');
const mobile = document.getElementById('mobile');
const place = document.getElementById('place');
const company = document.getElementById('company');
const pin = document.getElementById('pin');
const nameId = document.getElementById('name').id;
const mobileNumId = document.getElementById('mobile').id;
const placeId = document.getElementById('place').id;
const companyNameId = document.getElementById('company').id;
const pinCodeId = document.getElementById('pin').id;
form.addEventListener('submit', e => {
  e.preventDefault();
  // eslint-disable-next-line no-use-before-define
  validateInput();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerHTML = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};
/* a) if any of the fields are empty on submitting it should show
corresponding error messages below all the required fields. */
const setSuccess = ele => {
  const inputControl = ele.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerHTML = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
};
const isValidMobile = (mob) => {
  const regex1 = /^[1-9]\d{9}$/;
  return regex1.test(mob);
};
const isValidPin = (pins) => {
  const regex = /^[1-9]\d{5}$/;
  return regex.test(pins);
};

const validateInput = () => {
  const nameValue = name.value.trim();
  const mobileValue = mobile.value.trim();
  const placeValue = place.value.trim();
  const companyValue = company.value.trim();
  const pinValue = pin.value.trim();
  console.log(nameValue);
  console.log(name.val());
  if (nameValue === '') {
    setError(name, 'username is required');
    errName = false;
  } else {
    setSuccess(name);
    errName = true;
  }
  if (placeValue === '') {
    setError(place, 'Place is required');
    errPlace = false;
  } else {
    setSuccess(place);
    errPlace = true;
  }
  if (companyValue === '') {
    setError(company, 'Company Name is required');
    errCompany = false;
  } else {
    setSuccess(company);
    errCompany = true;
  }
  if (mobileValue === '' || (!isValidMobile(mobileValue))) {
    errMob = false;
    setError(mobile, 'please enter valid number .must have 10-digit');
  } else {
    setSuccess(mobile);
    errMob = true;
  } if (pinValue === '' || (!isValidPin(pinValue))) {
    setError(pin, 'please enter valid 6-digit Pin');
    errpin = false;
  } else {
    setSuccess(pin);
    errpin = true;
  }
  if (errpin === true && errPlace === true && errCompany === true
    && errName === true && errMob === true) {
    localStorage.setItem(nameId, name.value);
    localStorage.setItem(mobileNumId, mobile.value);
    localStorage.setItem(placeId, place.value);
    localStorage.setItem(companyNameId, company.value);
    localStorage.setItem(pinCodeId, pin.value);
    // eslint-disable-next-line no-undef
    form.reset();
  }
};
/* Make a prepopulate button, which when clicked will populate the form with values in the
local storage if it exists, otherwise, the button will be disabled. */
if (localStorage.getItem('name') === null) {
  // eslint-disable-next-line no-console
  console.log('novalue');
} else {
  const button = document.createElement('button');
  const prebtn = document.createTextNode('PrePopulate');
  button.appendChild(prebtn);
  button.setAttribute('id', 'element');
  const element = document.getElementById('button');
  element.appendChild(button);
  button.addEventListener('click', () => {
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
const div = document.createElement('div');
const divnode = document.createTextNode('');
div.appendChild(divnode);
div.setAttribute('id', 'divelement');
const divelement = document.querySelector('body');
divelement.appendChild(div);
document.getElementById('divelement').style.width = '300px';

const detailBtn = document.createElement('button');
const view = document.createTextNode('click to view detail');
detailBtn.appendChild(view);
detailBtn.setAttribute('id', 'element2');
const element2 = document.querySelector('body');
element2.appendChild(detailBtn);
detailBtn.addEventListener('click', () => {
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
