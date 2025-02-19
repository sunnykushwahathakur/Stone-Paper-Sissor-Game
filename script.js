let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was Draw.");
    msg.innerText = "Game was Draw"; 
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you Win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;  
        msg.style.backgroundColor = "Green"
    } else {
        compScore++;
        compScorePara.innerText = compScore; 
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red"
    }
}

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId); // Pass choiceId instead of userChoice
    });
});
