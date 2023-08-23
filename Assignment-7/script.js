const numbtn = document.querySelectorAll('.child');
let gameover = false;
let totalmove = 0;
let player = 'X';
// eslint-disable-next-line max-len
const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
function restartGame() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}
function restart() {
  setTimeout(restartGame, 5000);
}
function checkwinner() {
  winCombo.forEach((combination) => {
    const check = combination.every((idx) => numbtn[idx].innerText === player);
    if (check) {
      document.querySelector('h1').innerHTML = `${player} Wons`;
      restart();
      gameover = true;
    }
  });
}
numbtn.forEach((num) => {
  num.addEventListener('click', () => {
    if (gameover || num.innerText !== '') return;
    // eslint-disable-next-line no-param-reassign
    num.innerText = player;
    totalmove += 1;
    checkwinner();
    if (!gameover && totalmove < 9) {
      if (player === 'X') {
        // eslint-disable-next-line no-param-reassign
        num.innerText = 'X';
        player = 'O';
      } else {
        // eslint-disable-next-line no-param-reassign
        num.innerText = 'O';
        player = 'X';
      }
    } else if (totalmove === 9 && !gameover) {
      document.querySelector('h1').innerHTML = "It's a Draw!";
      gameover = true;
      restart();
    }
  });
});
