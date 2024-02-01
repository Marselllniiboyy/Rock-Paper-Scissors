function getComputerChoice() {
    let computerChoice =Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = "rock"
    } else if(computerChoice === 2) {
        computerChoice = "paper"
    } else if (computerChoice === 3){
        computerChoice = "scissore"
    }
    return computerChoice;
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie Game";
    }else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissore" || playerSelection === "scissore" && computerSelection === "paper") {
        return "You win dude!" + " " + playerSelection + " beats" +" " + computerSelection  
    }else if (playerSelection === "paper" && computerSelection === "scissore" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissore" && computerSelection === "rock") {
        return "You Lose:( dude, " + computerSelection + " " + "beets " + playerSelection 
    }
}

const playerSelection = "SciSsorE".toLocaleLowerCase();
const computerChoice = getComputerChoice();

console.log(playRound(playerSelection,computerChoice));
console.log(playerSelection)
console.log(computerChoice);