var computerWin=0;
var playerWin=0;
function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection){
      return ("Its a Tie");
    }
    
    //scissors
    else if(playerSelection==="scissors"){

          if(computerSelection==="rock"){
            
            computerWin++;
            return ("Computer wins");
          }
          else{
          
          playerWin++;
          return ("You Win");
          }
    }
    
  //rock
    else if(playerSelection==="rock"){

      if(computerSelection==="paper"){
        
        computerWin++;
        return ("Computer win");
      }
      else{
      
      playerWin++;
      return ("You Win");
      }
    }

    //paper
   else if(playerSelection==="paper"){

      if(computerSelection==="scissors"){
       
        computerWin++;
        return ("Computer wins");
      }
      else{
      playerWin++;
      return ("You Win");
      }
    }

    
  }

  function computerPlay(){
    const options=['rock','paper','scissors'];
    var x=Math.floor(Math.random() * 3);
    return options[x];
  }
  var computerSelection=computerPlay();
   


function game(){
          for (var i = 0; i < 5; i++)
          {
          var playerSelection=window.prompt("Choose Rock, Paper or Scissors");
          playerSelection=playerSelection.toLocaleLowerCase();
          console.log(playRound(playerSelection, computerSelection));
            
          }
       ///determine winner
        if(playerWin>computerWin){
          return ("Player Wins Overall "+playerWin);
        }
        else if(playerWin<computerWin){
          return ("Computer Wins Overall "+computerWin);
        }
        else{
          return "Its an equal score ";
        }
  }
  console.log(game());

