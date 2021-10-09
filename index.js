const X = "x";
const CIRCLE = "circle";
const cellElements = document.querySelectorAll(".cell");
const board = document.getElementById("board");
let circleTurn;
const result = document.getElementById("result");
const restartButton = document.getElementById("restartButton");
let overlay = document.querySelector(".overlay");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//Loop over cells to handle click events on them
cellElements.forEach(cell => {
  cell.addEventListener("click", handleClick, { once: true });
});

//Restart the game when the button is clicked
restartButton.addEventListener("click", restartGame);
//Handle the click event, firing different functions respectively
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE : X;
  // put X or O
  putMark(cell, currentClass);
  // change the turn
  swapTurn();
  // check whether the current position matches the winning constallation
  if (checkMatch(currentClass)) {
    result.textContent = `The winner is ${currentClass} 👏`;
    stopGame();
  } else if (isDraw()) {
    result.textContent = "It is draw buddy😎";
  }
}

//Functions:
function putMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurn() {
  circleTurn = !circleTurn;
}

function checkMatch(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X) || cell.classList.contains(CIRCLE);
  });
}

function stopGame() {
  cellElements.forEach(cell => {
    cell.removeEventListener("click", handleClick);
    //cursor.classList.add("not-allowed");
  });
}

function restartGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(X);
    cell.classList.remove(CIRCLE);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
    result.textContent = "";
  });
}
