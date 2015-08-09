////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var playerWins = 0;
var computerWins = 0; 

function getPlayerMove(move) {
	return move || getInput(); 
    }


function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove, computerMove) {
    var winner; 
    if (playerMove === computerMove) {
    console.log("It's a tie!");
    }
    else if (playerMove === "rock" && computerMove === "scissors"){
    	winner = "You win!";
    }else if (playerMove === "paper" && computerMove === "rock"){
        winner = "You win!"; 
    }else if (playerMove === "scissors" && computerMove === "paper"){
        winner = "You win!"; 
    	}else {
    	winner = "Computer wins!";
    	}
    	return winner; 
    }
    
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
while (playerWins || computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove); 

if (winner === "Computer wins!"){
    computerWins = computerWins + 1
}else {
    playerWins = playerWins + 1
}
}
return [playerWins, computerWins];
}
playToFive(); 


