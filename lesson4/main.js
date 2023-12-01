Node.prototype.insertAfter = function (newNode, referenceNode) {
  this.insertBefore(newNode, referenceNode.nextSibling);
};

const container = document.querySelector(".container");
const table = document.querySelector(".table");
const units = document.querySelectorAll(".table-unit");
const startBtn = document.querySelector(".start-text");
const gameMsg = document.querySelector(".game-messages");
const options = document.querySelector(".options");
const optionBtn = document.createElement("div");
const soloBtn = document.querySelector("#solo");
const duoBtn = document.querySelector("#duo");
const saveBtn = document.querySelector("#save-btn");
const nickInput = document.querySelector("#nick-input");

let q = 0;
let player1Moves = [];
let player2Moves = [];
let gmodeState = "duo";
let gamemode = "duo";
let nickname = "player1";
const winCombs = [
  ["1", "2", "3"],
  ["1", "4", "7"],
  ["1", "5", "9"],
  ["3", "6", "9"],
  ["3", "5", "7"],
  ["2", "5", "8"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

hideTable();
activeStartBtn();

console.log(units);
console.log(gamemode);

function startPlay() {
  cancelPreMenu();
  offWinEffect();
  showTable();
  clearBoard();
  unactiveStartBtn();
  hideOptionsBtn();
  gameMessages(`Ход игрока ${nickname}`, "Игра началась...");
  activeBoard();
}

function gameMessages(msg, text = "Игра начата") {
  startBtn.innerHTML = text;
  gameMsg.innerHTML = msg;
}

function activeBoard() {
  if (gamemode == "duo") {
    units.forEach((unit) => {
      unit.addEventListener("click", clickHandler);
    });
  } else {
    units.forEach((unit) => {
      unit.addEventListener("click", clickHandlerSolo);
    });
  }
}

function unActiveBoard() {
  units.forEach((unit) => {
    unit.removeEventListener("click", clickHandler);
    unit.removeEventListener("click", clickHandlerSolo);
  });
}

function clickHandler(event) {
  if (event.currentTarget.innerHTML) {
    gameMessages((msg = "Данная ячейка уже занята."));
  } else {
    if (q % 2 == 0) {
      event.currentTarget.innerHTML = `<div class="circle"></div>`;
      player1Moves.push(event.currentTarget.id);
      ++q;
      if (checkCombination(player1Moves)) {
        stopGame(`${nickname}`);
      } else {
        gameMessages((msg = "Ход player2"));
        if (player1Moves.length + player2Moves.length == 9) {
          stopGame("Ничья");
        }
      }
    } else {
      event.currentTarget.innerHTML = `<div class="cross"></div>`;
      player2Moves.push(event.currentTarget.id);
      ++q;
      if (checkCombination(player2Moves)) {
        stopGame("player2");
      } else {
        gameMessages((msg = `Ход ${nickname}`));
        if (player1Moves.length + player2Moves.length == 9) {
          stopGame("Ничья");
        }
      }
    }
  }
}

function clickHandlerSolo(event) {
  if (event.currentTarget.innerHTML) {
    gameMessages((msg = "Данная ячейка уже занята."));
  } else {
    event.currentTarget.innerHTML = `<div class="circle"></div>`;
    player1Moves.push(event.currentTarget.id);

    if (checkCombination(player1Moves)) {
      stopGame(`${nickname}`);
      return;
    } else {
      gameMessages((msg = "Ход Бота"));
      if (player1Moves.length + player2Moves.length == 9) {
        stopGame("Ничья");
      }
    }
  }

  setTimeout(() => {
    while (true) {
      let Num = getRandomN();
      if (units[Num].innerHTML) {
        continue;
      } else {
        units[Num].innerHTML = `<div class="cross"></div>`;
        player2Moves.push(String(Num + 1));
        if (checkCombination(player2Moves)) {
          stopGame("Бот");
          break;
        } else {
          gameMessages((msg = `Ход ${nickname}`));
          if (player1Moves.length + player2Moves.length == 9) {
            stopGame("Ничья");
            break;
          }
        }
        console.log(player2Moves);
        break;
      }
    }
  }, 1000);
}

function getRandomN() {
  return Math.floor(Math.random() * 9);
}

function checkCombination(playerMoves) {
  console.log(playerMoves);
  for (winComb of winCombs) {
    if (winComb.every((num) => playerMoves.includes(num))) {
      return true;
    }
  }
}

function stopGame(winner) {
  if (winner == "Ничья") {
    gameMessages(`Победила дружба!`, `Начать игру`);
  } else {
    gameMessages(`${winner} выиграл`, `Начать игру`);
  }
  unActiveBoard();
  activeStartBtn();
  onWinEffect();
  q = 0;
}

function startHandler(event) {
  startPlay();
}

function activeStartBtn() {
  startBtn.addEventListener("click", startHandler);
  startBtn.classList.add("click-eff");
  startBtn.style.cursor = "pointer";
}

function unactiveStartBtn() {
  startBtn.removeEventListener("click", startHandler);
  startBtn.classList.remove("click-eff");
  startBtn.style.cursor = "default";
}

function clearBoard() {
  units.forEach((unit) => {
    unit.innerHTML = "";
    player1Moves = [];
    player2Moves = [];
  });
}

function hideTable() {
  table.style.display = "none";
}

function showTable() {
  table.style.display = "grid";
}

function onWinEffect() {
  gameMsg.classList.add("win-effect");
}

function offWinEffect() {
  gameMsg.classList.remove("win-effect");
}


function cancelPreMenu() {
  container.appendChild(optionBtn);
  if (container.contains(options)) {
    container.removeChild(options);
  }
}

function hideOptionsBtn() {
  optionBtn.classList.add("opt-hide");
}

function showOptionsBtn() {
  optionBtn.classList.remove("opt-hide");
}

function initOptionBtn() {
  optionBtn.textContent = "Настройки";
  optionBtn.classList.add("optionBtn");
  optionBtn.addEventListener("click", () => {
  });
}

function modeBtnInit() {
  duoBtn.style.border = "1px solid yellow";
  soloBtn.addEventListener("click", () => {
    gmodeState = "solo";
    if (duoBtn.style.border == "1px solid yellow") {
      duoBtn.style.border = "none";
    }
    soloBtn.style.border = "1px solid yellow";
  });
  duoBtn.addEventListener("click", () => {
    gmodeState = "duo";
    if (soloBtn.style.border == "1px solid yellow") {
      soloBtn.style.border = "none";
    }
    duoBtn.style.border = "1px solid yellow";
  });
}

function saveBtnInit() {
  saveBtn.addEventListener("click", () => {
    if (nickInput.value) {
      nickname = nickInput.value;
    }
    console.log(nickname, " ", gamemode);
    gamemode = gmodeState;
    gameMessages("Успешно сохранено", "Начать игру");
    onWinEffect();
    setTimeout(() => {
      gameMessages("", "Начать игру");
      offWinEffect();
    }, 1500);

    // nickname = nickInput.innerHTML ? nickInput.innerHTML : 'you';
  });
}
