//ajax
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
// eslint-disable-next-line func-names
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const result = JSON.parse(xhr.responseText);
    let htmlContent = '';
    for (let i = 0; i < result.length; i += 1) {
      const { id, name, email } = result[i];
      htmlContent = `${htmlContent}<tr><td>${id}</td><td>${name}</td><td>${email}</td></tr>`;
    }
    document.getElementById('result').innerHTML = htmlContent;
  }
};
