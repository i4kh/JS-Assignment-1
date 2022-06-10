const options= ['Rock', 'Paper', 'Scissors'];
let user, ai;
let aiScore=0 , playerScore=0;
let playerPick;

const computerPlay = function(){
    let random = options[Math.random() * options.length | 0]
    ai = options.indexOf(random);
    return random;
}

const playerSelection = function(){
    let input= prompt("Rock, Paper or Scissors?").toLowerCase();
    let inputConverted= input.charAt(0).toUpperCase() + input.slice(1); 
    console.log(`Player pick is ${inputConverted}`);
    return inputConverted;
}

const inputCheck = function(){
    let j = 1;
    do{
        if(options.includes(playerPick)){
            user = options.indexOf(playerPick);
            j--;
        }
        else{
            console.log(`Input is incorrect`);
            playerPick= playerSelection();
        }
    }
    while(j)
}

const playRound = function(player, computer){
    if(player==2 && computer==0){
        console.log(`You lose! ${options[computer]} beats ${options[player]}`);
        aiScore++;
        console.log(`Score ${playerScore} - ${aiScore}`);
    }
    else if(player==0 && computer==2){
        console.log(`You win! ${options[player]} beats ${options[computer]}`);
        playerScore++;
        console.log(`Score ${playerScore} - ${aiScore}`);
    }
    else{
        if(player > computer){
            console.log(`You win! ${options[player]} beats ${options[computer]}`);
            playerScore++;
            console.log(`Score ${playerScore} - ${aiScore}`);
        }
        else if (player < computer){
            console.log(`You lose! ${options[computer]} beats ${options[player]}`);
            aiScore++;
            console.log(`Score ${playerScore} - ${aiScore}`);
        }
        else{
            console.log(`Draw!`);
            console.log(`Score ${playerScore} - ${aiScore}`);
        }
    }
}

const declareWinner = function() {
    if(playerScore > aiScore){
        alert(`Player win! Score: ${playerScore} - ${aiScore}`);
    }
    else if (playerScore < aiScore){
        alert(`Ai win! Score: ${aiScore} - ${playerScore}`);
    }
    else{
        alert('Draw!');
    }
}
 
for(let i = 1; i < 6; i++){
        
    console.log(`Computer pick is ${computerPlay()}`);
    playerPick = playerSelection();
    inputCheck();
    playRound(user, ai);

}

declareWinner();