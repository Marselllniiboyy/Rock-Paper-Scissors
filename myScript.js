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

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissoreBtn = document.querySelector("#scissors")

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
        
        rockBtn.addEventListener("click", ()=>{
            const playerSelection = "rock";
            const computerSelection = getComputerChoice();
            eveluateRound(playerSelection,computerSelection)
            checkScore();
        })

        paperBtn.addEventListener("click", ()=>{
            const playerSelection = "paper";
            const computerSelection = getComputerChoice();
            eveluateRound(playerSelection,computerSelection)
            checkScore();
        })

        scissoreBtn.addEventListener("click", ()=>{
            const playerSelection = "scissore";
            const computerSelection = getComputerChoice();
            eveluateRound(playerSelection,computerSelection)
            checkScore();
        })
        
        function eveluateRound(playerSelection,computerSelection){
            if (playRound(playerSelection,computerSelection) === "Tie Game"){
                console.log(playRound(playerSelection,computerSelection))
            }else if (playRound(playerSelection,computerSelection) === "You win dude!" + " " + playerSelection + " beats" +" " + computerSelection) {
                playerScore++ //+1 if you winn
                console.log(playRound(playerSelection,computerSelection));
            }else if(playRound(playerSelection,computerSelection) === "You Lose:( dude, " + computerSelection + " " + "beets " + playerSelection){
                computerScore++
                console.log(playRound(playerSelection,computerSelection))
            }
        }

        function checkScore (){
            if (playerScore > computerScore) {
                console.log(`Congrats you win, you got ${playerScore} score and computer got ${computerScore}`)
            } else if (playerScore < computerScore){
                console.log(`Sorry You lose, you got ${playerScore} and computer got ${computerScore}`)
            } else{
                console.log(`Tie Game, you got ${playerScore} and computer got ${computerScore}`)
            }
        }
} 

playGame();

// Damm All done