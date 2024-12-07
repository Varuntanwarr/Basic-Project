let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compcorepara = document.querySelector("#Computer-score");

const gencomputer = () => {
  const options = ["rock", "paper", "scissors"];
  const randId = Math.floor(Math.random() * 3);
  return options[randId];
};

const DrawGame = () => {
  msg.innerText = "Draw Game! Please play again.";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin) => {
  if (userwin) {
    userScore++;
    userscorepara.innerText = userScore;
    console.log("You win");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
  } else {
    CompScore++;
    compcorepara.innerText = CompScore;
    console.log("You lose");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("User choice:", userchoice);
  const compCoice = gencomputer();
  console.log("Computer choice:", compCoice);

  if (userchoice === compCoice) {
    DrawGame();
    return; // Stop further execution since it's a draw
  }

  let userwin = false;
  if (userchoice === "rock") {
    userwin = compCoice === "scissors";
  } else if (userchoice === "paper") {
    userwin = compCoice === "rock";
  } else if (userchoice === "scissors") {
    userwin = compCoice === "paper";
  }

  showwinner(userwin);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.querySelector("img").getAttribute("id");
    console.log("Choice was clicked:", userchoice);
    playgame(userchoice);
  });
});
