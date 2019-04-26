var playerSelection=window.prompt("Choose Rock, Paper or Scissors");
playerSelection=playerSelection.toLocaleLowerCase();
var computerWin;
var playerWin;
function playRound(playerSelection, computerSelection) {
 
    if(playerSelection===computerSelection){
      return ("Its a Tie  "+"Your Selection: "+playerSelection+" computerSelection: "+computerSelection);
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
          
          return ("You Win "+"Your Selection: "+playerSelection+" computerSelection: "+computerSelection);
          playerWin++;
          
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
            
            return ("Computer Wins "+"Your Selection: "+playerSelection+" computerSelection: "+computerSelection);
            computerWin++;
    }
  }

function computerPlay(){
  const options=['rock','paper','scissors'];
  var x=Math.floor(Math.random() * 3);
  return options[x];
}
var computerSelection=computerPlay();

function game(){
    for(var i=0;i<5;i++){
      playRound(playerSelection, computerSelection);
    }
    if(playerWin>computerWin){
        return ("Player wins by ",+playerWin);
    }
    else{
        return ("computer wins by ",+computerWin);
    }

}


console.log(game());