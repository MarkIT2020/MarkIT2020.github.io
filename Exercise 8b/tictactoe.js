let currentPlayer = "X";
let gameStatus = "";
let numTurns = 0;
let idNames = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
let numplayer = 0;

// take player turn
function playerTakeTurn(e, id, num){

	if(e.innerHTML == ""){
		e.innerHTML = currentPlayer;
		checkGameStatus();
		changeColor(id);

// single or multi
		if(numplayer == 1){	

			setTimeout(function(){
			if(gameStatus  == ""){
						computerTakeTurn(id);
						checkGameStatus(id);
				}	
			}, 250) ;
		}
	} else {
		showLightBox("This box is taken","Please pick another one");
	}
}//playerTakeTurn

function pickRandomGrid(id){

	do{
		let rand = parseInt(Math.random()*9) + 1;

		idName = idNames[rand - 1];

		if(document.getElementById(idName).innerHTML == ""){

			document.getElementById(idName).innerHTML = "O";
		
				break;
			}

	}while(true);
}

function computerTakeTurn(id) {
	let idName = "";
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

	if(cb[5] == "X" && cb[1] == "" && cb[2] == "" && cb[3] == "" && cb[4] == "" && cb[6] == "" && cb[7] == "" && cb[8] == "" && cb[9] == ""){
		console.log("center");

		var random = parseInt(Math.random()*4) + 1;

		if (random == 1){
			console.log("random number 1");
			document.getElementById("cell1").innerHTML = "O";		
		}else if (random == 2){
			console.log("random number 2");			
			document.getElementById("cell3").innerHTML = "O";		
		}else if (random == 3){
			console.log("random number 3");
			document.getElementById("cell7").innerHTML = "O";		
		}else if (random == 4){
			console.log("random number 4");
			document.getElementById("cell9").innerHTML = "O";		
		}

	}else if (cb[5] == "X" && cb[7] == "X" && cb[3] == ""){ // bottom left to top right
		console.log("fill cb3");
		document.getElementById("cell3").innerHTML = "O";		
	}else if (cb[5] == "X" && cb[3] == "X" && cb[7] == ""){ 
		console.log("fill cb7");
		document.getElementById("cell7").innerHTML = "O";		
	}else if (cb[5] == "X" && cb[1] == "X" && cb[9] == ""){ //top left to bottom right
		console.log("fill cb9");
		document.getElementById("cell9").innerHTML = "O";		
	}else if (cb[5] == "X" && cb[9] == "X" && cb[1] == ""){
		console.log("fill cb1");
		document.getElementById("cell1").innerHTML = "O";		
	}else if (cb[1] == "X" && cb[4] == "X" && cb[7] == ""){ // vertical left
		console.log("fill cb7");
		document.getElementById("cell7").innerHTML = "O";		
	}else if (cb[1] == "X" && cb[7] == "X" && cb[4] == ""){
		console.log("fill cb4");
		document.getElementById("cell4").innerHTML = "O";		
	}else if (cb[7] == "X" && cb[4] == "X" && cb[1] == ""){
		console.log("fill cb1");
		document.getElementById("cell1").innerHTML = "O";		
	}else if (cb[2] == "X" && cb[5] == "X" && cb[8] == ""){ // vertical center
		console.log("fill cb8");
		document.getElementById("cell8").innerHTML = "O";		
	}else if (cb[2] == "X" && cb[8] == "X" && cb[5] == ""){
		console.log("fill cb5");
		document.getElementById("cell5").innerHTML = "O";		
	}else if (cb[5] == "X" && cb[8] == "X" && cb[2] == ""){
		console.log("fill cb2");
		document.getElementById("cell2").innerHTML = "O";		
	}else if (cb[3] == "X" && cb[6] == "X" && cb[9] == ""){ // vertical right
		console.log("fill cb9");
		document.getElementById("cell9").innerHTML = "O";		
	}else if (cb[3] == "X" && cb[9] == "X" && cb[6] == ""){
		console.log("fill cb6");
		document.getElementById("cell6").innerHTML = "O";		
	}else if (cb[6] == "X" && cb[9] == "X" && cb[3] == ""){
		console.log("fill cb3");
		document.getElementById("cell3").innerHTML = "O";		
	}else if (cb[1] == "X" && cb[2] == "X" && cb[3] == ""){ // horizontal top
		console.log("fill cb3");
		document.getElementById("cell3").innerHTML = "O";		
	}else if (cb[1] == "X" && cb[3] == "X" && cb[2] == ""){
		console.log("fill cb2");
		document.getElementById("cell2").innerHTML = "O";		
	}else if (cb[3] == "X" && cb[2] == "X" && cb[1] == ""){
		console.log("fill cb1");
		document.getElementById("cell1").innerHTML = "O";		
	}else if (cb[4] == "X" && cb[5] == "X" && cb[6] == ""){ // horizontal center
		console.log("fill cb6");
		document.getElementById("cell6").innerHTML = "O";		
	}else if (cb[4] == "X" && cb[6] == "X" && cb[5] == ""){
		console.log("fill cb5");
		document.getElementById("cell5").innerHTML = "O";		
	}else if (cb[6] == "X" && cb[5] == "X" && cb[4] == ""){
		console.log("fill cb4");
		document.getElementById("cell4").innerHTML = "O";		
	}else if (cb[7] == "X" && cb[8] == "X" && cb[9] == ""){ //  horizontal bottom
		console.log("fill cb9");
		document.getElementById("cell9").innerHTML = "O";
	}else if (cb[7] == "X" && cb[9] == "X" && cb[8] == ""){
		console.log("fill cb8");
		document.getElementById("cell8").innerHTML = "O";
	}else if (cb[8] == "X" && cb[9] == "X" && cb[7] == ""){
		console.log("fill cb7");
		document.getElementById("cell7").innerHTML = "O";
	}else{
		pickRandomGrid(id);									// other exceptions
	}	
}

function changeColor(id) {

	if(currentPlayer == "X"){
	console.log("The current player is " + currentPlayer);
	console.log("the color is red");
  	document.getElementById(id).style.color = "#ff2a6d";
	} 
	if(currentPlayer == "O"){
	console.log("The current player is " + currentPlayer);
	console.log("the color is blue");
	document.getElementById(id).style.color = "#001eff";			
	}
	// body...
}

// after each turn, check for a winner, tie, or continue
function checkGameStatus(){

	changeVisibility("lightbox1");	

	numTurns++;
	//check Win

	if(checkWin()){
		gameStatus = currentPlayer + " Wins";
		setTimeout(function(){showLightBox(gameStatus, "Game over")}, 250) ;	
	}//checkWin

	if(numTurns == 9 && checkWin() != true){
		gameStatus = "Tie Game";
		setTimeout(function(){showLightBox(gameStatus, "Game over")}, 250) ;	
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

	if(gameStatus != ""){
		changeVisibility("controls");
	}
}

function newGame(){
		
	for(var i = 0; i < 9; i++){
		
		document.getElementById(idNames[i]).innerHTML = "";
  		document.getElementById(idNames[i]).style.color = "#ff2a6d";
	}

	currentPlayer = "X";
	gameStatus = "";
	numTurns = 0;

	changeVisibility("controls");
	changeVisibility("lightbox");
	changeVisibility("positionNavigation");

	console.log("hide the button");
}

function numPlayer(){
	changeVisibility("lightbox");
	changeVisibility("positionNavigation");
}

function player(num){

	console.log("num is " + num.innerHTML);

	if(num.innerHTML == "Single Player"){
		console.log("single Player");
		numplayer = 1;
	} else {
		console.log("multiplayer");
		numplayer = 2;
	}
}
