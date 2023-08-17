// a) Calculate the height of the end user's browser screen
// eslint-disable-next-line no-restricted-globals, no-console
console.log(screen.height);
// b) To console the name of the web host
const name = document.getElementsByName('author')[0];
// c) To show a warning message if there is no https protocol used in the visited website.
if (window.location.href.includes('http:')) {
  // eslint-disable-next-line no-alert
  alert('site not secure');
} else {
  // eslint-disable-next-line no-alert
  alert('secure');
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
  const fName = document.querySelector('#fname');
  const lName = document.querySelector('#lname');
  const age = document.querySelector('#age');
  document.cookie = 'fname = fName.value;';
  document.cookie = 'name = akshaya;';
};
document.cookie = 'name = akshaya;';
// 4) Redirect to the homepage of google from the console.
console.log(document.location.href = 'https://www.google.com/');
// 5) Create a div with background color red, create buttons
// eslint-disable-next-line no-unused-vars
function hide() {
  document.querySelector('#divRed').style.visibility = 'hidden';
}
// eslint-disable-next-line no-unused-vars
function colorChange() {
  document.querySelector('#divRed').style.backgroundColor = 'blue';
}
// eslint-disable-next-line no-unused-vars
function showDetail() {
  document.querySelector('.para').classList.toggle('visible');
}
// 6) Create a select box with numbers 1 to 10,
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
// 7) Consider an array with names of 10 programming languages
const array = ['C', 'C++', 'Java', 'Python', 'Ruby', 'Perl', 'PHP', 'javascript', 'sql', 'R'];
array.forEach((element) => {
  const btn = document.createElement('button');
  btn.innerHTML = element;
  btn.setAttribute('id', element);
  document.body.appendChild(btn);
  const lanId = document.getElementById('language');
  btn.addEventListener('click', () => {
    lanId.innerHTML = element;
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
    document.querySelector('#txtfield').textContent = text;
  } else {
    // eslint-disable-next-line no-alert
    alert('text exceed morethan 50 words');
  }
}
// 9) When the control+enter key is pressed show an alert message.
// eslint-disable-next-line no-unused-vars
function keyPress(event) {
  if (event.keyCode === 13 && event.ctrlKey) {
    console.log('Enter and cntrl key is pressed');
  }
}
