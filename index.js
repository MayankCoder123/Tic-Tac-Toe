// Gettig Names
let modal = document.getElementById("modal");
let modalTitle = document.getElementById("modalTitle");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let player1Name = document.getElementById("player1");
let player2Name = document.getElementById("player2");

function getPlayerNames() {
  if (player1Name.value == "") {
    player1Name.value = "Player1";
  }
  if (player2Name.value == "") {
    player2Name.value = "Player2";
  }

  name1.innerText = player1Name.value + `(X)`;
  name2.innerText = player2Name.value + `(O)`;
  localStorage.setItem("Player1", player1Name.value);
  localStorage.setItem("Player2", player2Name.value);
  modal.style.display = "none";
  setScore();
  window.location.reload();
}

// Adding Score Systems
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let player1Score;
let player2Score;
let p1Points = 0;
let p2Points = 0;

function setScore() {
  if (localStorage.getItem("Player1Score") == null) {
    p1Points = 0;
  }
  if (localStorage.getItem("Player2Score") == null) {
    p2Points = 0;
  }

  player1Score = "Score: " + p1Points;
  player2Score = "Score: " + p2Points;

  score1.innerText = player1Score;
  score2.innerText = player2Score;
  localStorage.setItem("Player1Score", p1Points);
  localStorage.setItem("Player2Score", p2Points);
}
function addScore(player) {
  if (player == "1") {
    if (isContinuedMatch != null) {
      p1Points = parseInt(p1Points);
    }
    p1Points += 1;
    player1Score = "Score: " + p1Points;
    score1.innerText = player1Score;
    localStorage.setItem("Player1Score", p1Points);
    notifyMatchWinner(player);
    gameWinner();
  } else {
    if (isContinuedMatch != null) {
      p2Points = parseInt(p2Points);
    }
    p2Points += 1;
    player2Score = "Score: " + p2Points;
    score2.innerText = player2Score;
    localStorage.setItem("Player2Score", p2Points);
    notifyMatchWinner(player);
    gameWinner();
  }
}

// Continue Match Session
let isContinuedMatch = localStorage.getItem("Player1Score");

// Set Active Player
let player1 = document.getElementById(`player1`);
let player2 = document.getElementById(`player2`);
player1.className = "playerActive center player";

function setActivePlayer(player) {
  if (player == "1") {
    player1.className = "playerActive center player";
    player2.className = "player center";
  } else {
    player2.className = "playerActive center player";
    player1.className = "player center";
  }
}

// XO Touch System & Reset Board
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let square5 = document.getElementById("square5");
let square6 = document.getElementById("square6");
let square7 = document.getElementById("square7");
let square8 = document.getElementById("square8");
let square9 = document.getElementById("square9");
let square1Active = false;
let square2Active = false;
let square3Active = false;
let square4Active = false;
let square5Active = false;
let square6Active = false;
let square7Active = false;
let square8Active = false;
let square9Active = false;

square1.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square1Active == false
  ) {
    square1.innerText = "X";
    square1.className = "square x";
    setActivePlayer("2");
    square1Active = true;
    matchWinner();
  } else if (square1Active == false) {
    square1.innerText = "O";
    square1.className = "square o";
    setActivePlayer("1");
    square1Active = true;
    matchWinner();
  }
});
square2.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square2Active == false
  ) {
    square2.innerText = "X";
    square2.className = "square x";
    setActivePlayer("2");
    square2Active = true;
    matchWinner();
  } else if (square2Active == false) {
    square2.innerText = "O";
    square2.className = "square o";
    setActivePlayer("1");
    square2Active = true;
    matchWinner();
  }
});
square3.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square3Active == false
  ) {
    square3.innerText = "X";
    square3.className = "square x";
    setActivePlayer("2");
    square3Active = true;
    matchWinner();
  } else if (square3Active == false) {
    square3.innerText = "O";
    square3.className = "square o";
    setActivePlayer("1");
    square3Active = true;
    matchWinner();
  }
});
square4.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square4Active == false
  ) {
    square4.innerText = "X";
    square4.className = "square x";
    setActivePlayer("2");
    square4Active = true;
    matchWinner();
  } else if (square4Active == false) {
    square4.innerText = "O";
    square4.className = "square o";
    setActivePlayer("1");
    square4Active = true;
    matchWinner();
  }
});
square5.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square5Active == false
  ) {
    square5.innerText = "X";
    square5.className = "square x";
    setActivePlayer("2");
    square5Active = true;
    matchWinner();
  } else if (square5Active == false) {
    square5.innerText = "O";
    square5.className = "square o";
    setActivePlayer("1");
    square5Active = true;
    matchWinner();
  }
});
square6.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square6Active == false
  ) {
    square6.innerText = "X";
    square6.className = "square x";
    setActivePlayer("2");
    square6Active = true;
    matchWinner();
  } else if (square6Active == false) {
    square6.innerText = "O";
    square6.className = "square o";
    setActivePlayer("1");
    square6Active = true;
    matchWinner();
  }
});
square7.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square7Active == false
  ) {
    square7.innerText = "X";
    square7.className = "square x";
    setActivePlayer("2");
    square7Active = true;
    matchWinner();
  } else if (square7Active == false) {
    square7.innerText = "O";
    square7.className = "square o";
    setActivePlayer("1");
    square7Active = true;
    matchWinner();
  }
});
square8.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square8Active == false
  ) {
    square8.innerText = "X";
    square8.className = "square x";
    setActivePlayer("2");
    square8Active = true;
    matchWinner();
  } else if (square8Active == false) {
    square8.innerText = "O";
    square8.className = "square o";
    setActivePlayer("1");
    square8Active = true;
    matchWinner();
  }
});
square9.addEventListener("click", () => {
  if (
    player1.className == "playerActive center player" &&
    square9Active == false
  ) {
    square9.innerText = "X";
    square9.className = "square x";
    setActivePlayer("2");
    square9Active = true;
    matchWinner();
  } else if (square9Active == false) {
    square9.innerText = "O";
    square9.className = "square o";
    setActivePlayer("1");
    square9Active = true;
    matchWinner();
  }
});

// Winner
function notifyMatchWinner(player) {
  if (player == "1") {
    alert(localStorage.getItem("Player1") + " Wins this round!");
  } else {
    alert(localStorage.getItem("Player2") + " Wins this round!");
  }
}
function matchWinner() {
  let squares = [
    square1.innerText,
    square2.innerText,
    square3.innerText,
    square4.innerText,
    square5.innerText,
    square6.innerText,
    square7.innerText,
    square8.innerText,
    square9.innerText,
  ];

  // Horizontal
  if (squares[0] == "X" && squares[1] == "X" && squares[2] == "X") {
    addScore("1");
  } else if (squares[0] == "O" && squares[1] == "O" && squares[2] == "O") {
    addScore("2");
  } else if (squares[3] == "X" && squares[4] == "X" && squares[5] == "X") {
    addScore("1");
  } else if (squares[3] == "O" && squares[4] == "O" && squares[5] == "O") {
    addScore("2");
  } else if (squares[6] == "X" && squares[7] == "X" && squares[8] == "X") {
    addScore("1");
  } else if (squares[6] == "O" && squares[7] == "O" && squares[8] == "O") {
    addScore("2");
  }

  // Vertical
  else if (squares[0] == "X" && squares[3] == "X" && squares[6] == "X") {
    addScore("1");
  } else if (squares[0] == "O" && squares[3] == "O" && squares[6] == "O") {
    addScore("2");
  } else if (squares[1] == "X" && squares[4] == "X" && squares[7] == "X") {
    addScore("1");
  } else if (squares[1] == "O" && squares[4] == "O" && squares[7] == "O") {
    addScore("2");
  } else if (squares[2] == "X" && squares[5] == "X" && squares[8] == "X") {
    addScore("1");
  } else if (squares[2] == "O" && squares[5] == "O" && squares[8] == "O") {
    addScore("2");
  }

  // Cross
  else if (squares[0] == "X" && squares[4] == "X" && squares[8] == "X") {
    addScore("1");
  } else if (squares[0] == "O" && squares[4] == "O" && squares[8] == "O") {
    addScore("2");
  } else if (squares[2] == "X" && squares[4] == "X" && squares[6] == "X") {
    addScore("1");
  } else if (squares[2] == "O" && squares[4] == "O" && squares[6] == "O") {
    addScore("2");
  }

  // Draw
  else {
    let squaresFilled = 0;
    squares.forEach((square) => {
      if (square == "X" || square == "O") {
        squaresFilled += 1;
      }
    });
    if (squaresFilled == 9) {
      alert("Ohh! It's Draw");
      window.location.reload();
    }
  }
}
function winningBoard(player) {
  localStorage.clear();
  modalTitle.innerText = player + " Wins! Start a new Game?";
  modal.style.display = "flex";
}
function gameWinner() {
  if (p1Points == 5) {
    setTimeout(() => {
      winningBoard("Player1");
    }, 500);
  } else if (p2Points == 5) {
    setTimeout(() => {
      winningBoard("Player2");
    }, 500);
  } else {
    window.location.reload();
  }
}

// Start
function start() {
  if (isContinuedMatch == null) {
    modalTitle.innerText = "Enter Names of Players";
    modal.style.display = "flex";
  } else {
    name1.innerText = localStorage.getItem("Player1") + `(X)`;
    name2.innerText = localStorage.getItem("Player2") + `(O)`;

    p1Points = localStorage.getItem("Player1Score");
    p2Points = localStorage.getItem("Player2Score");

    player1Score = "Score: " + p1Points;
    player2Score = "Score: " + p2Points;

    score1.innerText = player1Score;
    score2.innerText = player2Score;
  }
}
setTimeout(start, 1000);
