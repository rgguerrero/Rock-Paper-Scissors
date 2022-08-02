//Create Variables
//const submitChoice = document.getElementsByClassName("userOption");
let computerChoice;
let userScore = 0;
let computerScore = 0;
let tiedGame = 0;
let result = '';

function getComputerChoice() {
    //Create Random number for computer
    const randomNumber = Math.floor((Math.random() * 3)+1);
    //create conditionals for random number generated
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
}

function playGame(submitChoice) {
    //let userChoice = prompt("enter a choice: r or p or s ");
    getComputerChoice();
    //Change submitted choice to lower case to match with conditionals
    userChoice = submitChoice.toLowerCase();
    //Create Conditionals
    if (userChoice === computerChoice) {
        result = "Tie";
        tiedGame++;
    } else if ((userChoice === 'rock' && computerChoice === "paper" || userChoice === 'paper' && computerChoice === "scissors" || userChoice === 'scissors' && computerChoice === "rock")) {
        result = "You Lose!";
        computerScore++;
    } else if ((userChoice === 'paper' && computerChoice === "rock" || userChoice === 'scissors' && computerChoice === "paper" || userChoice === 'rock' && computerChoice === "scissors")) {
        result = "You Win!";
        userScore++;
    } else {
        //This displays error if other conditions aren't met
        result = 'Error';
    }
    //Display Results and Records in Console
    console.log('Your score: ', userScore);
    console.log('Computer score: ', computerScore);
    console.log('Tied games: ', tiedGame);
    //console.log(result);
}
