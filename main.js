let buttons = document.getElementsByClassName("box");
let team = document.getElementsByClassName("Player");
let winStatus = document.getElementsByClassName("winStatus");
let restartButton = document.getElementsByClassName("restart");
let win = false;
let counter = 0;
let player1 = [];
let player2 = [];
const win_lines = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (win) {
      return;
    }
    switchPlayer(i + 1);
    if (checkWinLines(player1)) {
      winStatus[0].innerHTML = `Победил игрок: Player1`;
      alert("Winner: Player1");
      return;
    }
    if (checkWinLines(player2)) {
      winStatus[0].innerHTML = `Победил игрок: Player2`;
      alert("Winner: Player2");
      return;
    }
    if (counter === 9) {
      winStatus[0].innerHTML = "Ничья";
      alert("Draw");
    }
  });
}

function switchPlayer(cell) {
  if (player1.includes(cell) || player2.includes(cell)) {
    return;
  }
  if (counter % 2 === 0) {
    buttons[cell - 1].innerHTML = '<img class="image" src="img/krestik.png">';
    player1.push(cell);
    team[0].innerHTML = "Ход игрока: Player2";
  } else {
    buttons[cell - 1].innerHTML = '<img class="image" src="img/nolik.png">';
    player2.push(cell);
    team[0].innerHTML = "Ход игрока: Player1";
  }

  counter++;
}

function checkWinLines(player) {
  for (let i = 0; i < win_lines.length; i++) {
    if (win_lines[i].every((element) => player.includes(element))) {
      win = true;
      return win;
    }
  }
  return win;
}

restartButton[0].addEventListener("click", function () {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "white";
    buttons[i].innerHTML = "";
  }
  winStatus[0].innerHTML = `Победил игрок: `;
  team[0].innerHTML = "Ход игрока: ";
  player1 = [];
  player2 = [];
  counter = 0;
  win = false;
});
