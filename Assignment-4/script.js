// a) Calculate the height of the end user's browser screen
// eslint-disable-next-line no-restricted-globals, no-console
console.log(screen.height);
// b) To console the name of the web host
const name = document.getElementsByName('author')[0];
// c) To show a warning message if there is no https protocol used in the visited website.
if (window.location.href.includes('http:')) {
  // eslint-disable-next-line no-alert
  alert('site contain http');
} else {
  // eslint-disable-next-line no-alert
  alert('does not contain http');
}
// d) To show an alert message after 10sec while the page is refreshed.
setTimeout(() => {
  // eslint-disable-next-line no-alert
  alert('alert message after 10sec while the page is refreshed');
}, 10000);
// eslint-disable-next-line no-console
console.log(name.content);
/* 2) Store your basic details in local storage of the browser every time the page loads, then 
console them and finally delete them after 1 minute of the page load.  */
localStorage.setItem('name', 'Akshaya k');
localStorage.setItem('age', '25');
localStorage.setItem('gender', 'female');
setTimeout(() => {
  localStorage.clear();
}, 60000);
// eslint-disable-next-line no-console
console.log(localStorage);
/* 3) Create a form and submit button, on click of the
button store your basic details from the form in the cookies. */
const submitOnCookies = () => {
  const fName = document.querySelector('#fname').value;
  const lName = document.querySelector('#lname').value;
  const age = document.querySelector('#age').value;
  document.cookie = `fname = ${fName};`;
  document.cookie = `last = ${lName}`;
  document.cookie = `age =${age}`;
};
// 4) Redirect to the homepage of google from the console.
// console.log(document.location.href = 'https://www.google.com/');
// 5) Create a div with background color red, create buttons
// eslint-disable-next-line no-unused-vars
// 5a) to hide the div
function hide() {
  document.querySelector('#divRed').style.visibility = 'hidden';
}
// eslint-disable-next-line no-unused-vars
// 5b)to change the background color of the div
function colorChange() {
  document.querySelector('#divRed').style.backgroundColor = 'blue';
}
// 5c) to show your basic details on the div, the details should hide/show, on the click.
// eslint-disable-next-line no-unused-vars
function showDetail() {
  document.querySelector('.para').classList.toggle('visible');
}
/* 6) Create a select box with numbers 1 to 10,  when selected 9, you should
change the selection to 10 and show a message that "9 is fully occupied please
select another number", when selected any number other than 9 it should show a
message as "you selected 'particular number' " in a div, on hovering the div it
should change the background color of the div into a highlighting shade, while the
mouse pointer leaves the message area the background color should go back to as before
(don't use CSS to attain the hovering functionality) */
// eslint-disable-next-line no-unused-vars
function changevalue(opt) {
  if (opt === 8) {
    document.querySelector('#divhover').innerHTML = '9 is fully occupied please select another number';
    const $select = document.querySelector('#num');
    $select.value = '10';
  } else {
    document.querySelector('#divhover').innerHTML = `you selected ${opt + 1}`;
  }
}
// eslint-disable-next-line no-undef
divhover.addEventListener('mouseover', () => {
  document.querySelector('#divhover').style.backgroundColor = '#ADC4CE';
});
// eslint-disable-next-line no-undef
divhover.addEventListener('mouseout', () => {
  // eslint-disable-next-line no-undef
  divhover.style.backgroundColor = 'white';
});
/* 7) Consider an array with names of 10 programming languages,
make 10 buttons by iterating this array, when clicked on each button
the name of the programming language should be shown in a corresponding div. */
const array = ['C', 'C++', 'Java', 'Python', 'Ruby', 'Perl', 'PHP', 'javascript', 'sql', 'R'];
array.forEach((element) => {
  const btn = document.createElement('button');
  btn.innerHTML = element;
  btn.setAttribute('id', element);
  document.body.appendChild(btn);
  const lanId = document.getElementById('language');
  // eslint-disable-next-line func-names
  btn.addEventListener('click', (event) => {
    let e = this.event.srcElement.id;
    console.log(e);
    document.getElementById('language').innerHTML = e;
  });
});

// eslint-disable-next-line no-unused-vars

/* 8)Create a form with a text field which when submitted,will change the
 tab title to whatever is entered, limit the fieldto 50 characters, otherwise
 show an error message, and stay on the same page when submitted(it shouldn't refresh). */
// eslint-disable-next-line no-unused-vars
function changeTabTitle() {
  const text = document.querySelector('#text').value;
  if (text.length <= 50) {
    document.title = text;
  } else {
    // eslint-disable-next-line no-alert
    alert('text exceed morethan 50 words');
  }
}
// 9) When the control+enter key is pressed show an alert message.
// eslint-disable-next-line no-unused-vars
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && event.ctrlKey) {
    alert('Enter and cntrl key is pressed');
  }
});
