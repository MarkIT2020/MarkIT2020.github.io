let currentPlayer = "X";
let gameStatus = "";
let numTurns = 0;

// take player turn
function playerTakeTurn(e, id){

	if(e.innerHTML == ""){
		e.innerHTML = currentPlayer;
		checkGameStatus();

		console.log(currentPlayer);

		if(currentPlayer == "X"){
  			document.getElementById(id).style.color = "#ff2a6d";
		} 
		if(currentPlayer == "O"){
			document.getElementById(id).style.color = "#001eff";
		}	
	} else {
		showLightBox("This box is taken","Please pick another one");
	}
}//playerTakeTurn

// after each turn, check for a winner, tie, or continue
function checkGameStatus(){

	numTurns++;
	//check Win
 
	if(checkWin()){
		gameStatus = currentPlayer + " Wins";
		showLightBox(gameStatus, "Game over");	

	}//checkWin

	if(numTurns == 9 && checkWin() != true){
		gameStatus = "Tie Game";
		showLightBox(gameStatus, "Game over");	
	} // numTurns

	console.log(numTurns);

	if(gameStatus != ""){
		console.log("Game is over, " + gameStatus);
	}

	currentPlayer = (currentPlayer == "X" ? "O" :"X");

} //checkGameStatus

// check win
function checkWin(){
	let cb = [];
	cb [0] = "";
	cb [1] = document.getElementById("cell1").innerHTML;
	cb [2] = document.getElementById("cell2").innerHTML;
	cb [3] = document.getElementById("cell3").innerHTML;
	cb [4] = document.getElementById("cell4").innerHTML;
	cb [5] = document.getElementById("cell5").innerHTML;
	cb [6] = document.getElementById("cell6").innerHTML;
	cb [7] = document.getElementById("cell7").innerHTML;
	cb [8] = document.getElementById("cell8").innerHTML;
	cb [9] = document.getElementById("cell9").innerHTML;

	if (cb[1] != "" && cb[1] == cb[2] && cb[2] == cb[3]){
		return true;
	}
	if (cb[1] != "" && cb[1] == cb[4] && cb[4] == cb[7]){
		return true;
	}
	if (cb[1] != "" && cb[1] == cb[5] && cb[5] == cb[9]){
		return true;
	}
	if (cb[2] != "" && cb[2] == cb[5] && cb[5] == cb[8]){
		return true;
	}
	if (cb[3] != "" && cb[3] == cb[6] && cb[6] == cb[9]){
		return true;
	}
	if (cb[4] != "" && cb[4] == cb[5] && cb[5] == cb[6]){
		return true;
	}	
	if (cb[7] != "" && cb[7] == cb[8] && cb[8] == cb[9]){
		return true;
	}	
	if (cb[3] != "" && cb[3] == cb[5] && cb[5] == cb[7]){
		return true;
	}
}// checkWin

//change the visibility of a div with a given ID.
function changeVisibility (divID){

	var element = document.getElementById(divID);

	// if element exitsts, toggle its class
	// between hidden and unhidden

	if(element){
		element.className = (element.className == 'hidden')? 'unhidden':'hidden';
	}// if
}//changeVisibility

// display message in lightbox
function showLightBox(message, message2){

	document.getElementById("message").innerHTML = message;
	document.getElementById("message2").innerHTML = message2;
	
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");

}//changeVisibility

//contitue / restart game
function continueGame(){
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");

}


//changeVisibility