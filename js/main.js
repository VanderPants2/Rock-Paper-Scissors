let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoise() {
  const choices = ["r", "p", "s"];
  return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
  if (letter === "r") {
    return "rock";
  } else if (letter === "p") {
    return "paper";
  } else {
    return "scissors";
  }
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  console.log("WIN");
  result_div.innerHTML =
    convertToWord(user) + " > " + convertToWord(computer) + ". You Win!";
  document.getElementById(convertToWord(user)).classList.add("win");
  setTimeout(function () {
    document.getElementById(convertToWord(user)).classList.remove("win");
  }, 300);
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  console.log("LOSE");
  result_div.innerHTML =
    convertToWord(user) + " < " + convertToWord(computer) + ". You Lose!";
  document.getElementById(convertToWord(user)).classList.add("lose");
  setTimeout(function () {
    document.getElementById(convertToWord(user)).classList.remove("lose");
  }, 300);
}

function draw(user, computer) {
  result_div.innerHTML =
    convertToWord(user) + " == " + convertToWord(computer) + ". Draw!";
  document.getElementById(convertToWord(user)).classList.add("draw");
  setTimeout(function () {
    document.getElementById(convertToWord(user)).classList.remove("draw");
  }, 300);
}

function game(userChoice) {
  const computerChoise = getComputerChoise();

  switch (userChoice + computerChoise) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoise);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoise);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoise);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

window.onload = function () {
  main();
};
