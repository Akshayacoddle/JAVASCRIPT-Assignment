const xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3000/user');
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const result = JSON.parse(xhr.responseText);
    let htmlContent = '';
    for (let i = 0; i < result.length; i += 1) {
      const { id, name, email, education } = result[i];
      htmlContent = `${htmlContent}<tr><td>${id}</td><td>${name}</td><td>${email}</td></td><td>${education}</td></tr>`;
    }
  }
};
