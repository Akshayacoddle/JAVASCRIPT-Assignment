const numbtn = document.querySelectorAll('.child');
console.log(numbtn);
let gameover = false;
let totalmove = 0;
let player = 'X';
function restartGame() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}
function restart() {
  setTimeout(restartGame, 5000);
}
function checkwinner() {
  console.log('checking');
  // eslint-disable-next-line max-len
  const child0 = numbtn[0].innerHTML;
  const child1 = numbtn[1].innerHTML;
  const child2 = numbtn[2].innerHTML;
  const child3 = numbtn[3].innerHTML;
  const child4 = numbtn[4].innerHTML;
  const child5 = numbtn[5].innerHTML;
  const child6 = numbtn[6].innerHTML;
  const child7 = numbtn[7].innerHTML;
  const child8 = numbtn[8].innerHTML;
  if (child0 === player && child1 === player && child2 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  } else if (child3 === player && child4 === player && child5 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  } else if (child6 === player && child7 === player && child8 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  } else if (child0 === player && child3 === player && child6 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  } else if (child1 === player && child4 === player && child7 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  } else if (child2 === player && child5 === player && child8 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  } else if (child0 === player && child4 === player && child8 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  } else if (child2 === player && child4 === player && child6 === player) {
    document.querySelector('h1').innerHTML = `${player} Wins`;
    restart();
    gameover = true;
  }
}
numbtn.forEach((num) => {
  num.addEventListener('click', (ele) => {
    console.log(ele.target);
    if (gameover || num.innerText !== '') return;
    // eslint-disable-next-line no-param-reassign
    num.innerText = player;
    totalmove += 1;
    if (totalmove > 4) {
      checkwinner();
    }

    if (!gameover && totalmove < 9) {
      if (player === 'X') {
        // eslint-disable-next-line no-param-reassign
        player = 'O';
      } else {
        // eslint-disable-next-line no-param-reassign
        player = 'X';
      }
      console.log(ele.target.innerHTML);
    } else if (totalmove === 9 && !gameover) {
      document.querySelector('h1').innerHTML = "It's a Draw!";
      gameover = true;
      restart();
    }
  });
});
