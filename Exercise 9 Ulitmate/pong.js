const paddleHeight = document.getElementById("paddle1").offsetHeight;
const paddleWidth = document.getElementById("paddle1").offsetWidth;
const startPositionOfPaddle1 = document.getElementById("paddle1").offsetTop;
const startPositionOfPaddle2 = document.getElementById("paddle2").offsetTop;
var positionOfPaddle1 = document.getElementById("paddle1").offsetTop;
var positionOfPaddle2 = document.getElementById("paddle2").offsetTop;
var speedOfPaddle2 = 0;
var speedOfPaddle1 = 0;

const gameboardHeight = document.getElementById("gameBoard").offsetHeight;
const gameboardWidth = document.getElementById("gameBoard").offsetWidth;

const ballHeight = document.getElementById("ball").offsetHeight;
const ballWidth = document.getElementById("ball").offsetWidth;
const startTopPositionOfBall = document.getElementById("ball").offsetTop;
const startLeftPositionOfBall = document.getElementById("ball").offsetLeft;
var topPositionOfBall = startTopPositionOfBall;
var leftPositionOfBall = startLeftPositionOfBall;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var ballspeed1 = 2;
var ballspeed2 = 6;
var ballX = ballWidth;

const ball2Height = document.getElementById("ball2").offsetHeight;
const startTopPositionOfBall2 = document.getElementById("ball2").offsetTop;
const startLeftPositionOfBall2 = document.getElementById("ball2").offsetLeft;
var topPositionOfBall2 = startTopPositionOfBall2;
var leftPositionOfBall2 = startLeftPositionOfBall2;
var topSpeedOfBall2 = 0;
var leftSpeedOfBall2 = 0;
var ball2speed1 = 2;
var ball2speed2 = 6;
var topDirection = 1;

var player1Score = 0;
var player2Score = 0;

var bounce = new sound("bounce.mp3");
var bounce2 = new sound("bounce2.mp3");
var buzzer = new sound("buzzer.mp3");

var controlPlay;

let direction = 1;
let direction2 = -1;
let a = 0;
let rand = 0;
//https://freesound.org/people/HighPixel/sounds/505628/

/*
window.addEventListener('load',function(){
		startBall();
});
*/

// keydown
document.addEventListener('keydown', function(e){

	if(e.keyCode == 87 || e.which == 87){ //w
		speedOfPaddle1 = -15;
	}
	if(e.keyCode == 83 || e.which == 83){ // s
		speedOfPaddle1 = 15;
	}	
	if(e.keyCode == 38 || e.which == 38){ //up
		speedOfPaddle2 = -15;
	}
	if(e.keyCode == 40 || e.which == 40){ // down
		speedOfPaddle2 = 15;
	}	
});
// w and s

document.addEventListener('keyup', function(e){

	if(e.keyCode == 87 || e.which == 87){
		speedOfPaddle1 = 0;
	}
	if(e.keyCode == 83 || e.which == 83){
		speedOfPaddle1 = 0;
	}	
	if(e.keyCode == 38 || e.which == 38){
		speedOfPaddle2 = 0;
	}
	if(e.keyCode == 40 || e.which == 40){
		speedOfPaddle2 = 0;
	}			
});
// up and down

//https://www.w3schools.com/graphics/game_sound.asp
function sound(src) {
	this.sound = document.createElement("audio");
  	this.sound.src = src;
  	this.sound.setAttribute("preload", "auto");
  	this.sound.setAttribute("controls", "none");
  	this.sound.style.display = "none";
  	document.body.appendChild(this.sound);
  	this.play = function(){
    	this.sound.play();
  	}
  	this.stop = function(){
    	this.sound.pause();
  	}
}
// sound

function startBall(){

	topPositionOfBall = startTopPositionOfBall;
	leftPositionOfBall = startLeftPositionOfBall;

	// random direction
	if (Math.random()<0.5){
		topDirection = 1;
	}else{
		topDirection = -1;
	}

	if (rand == 4) {
		ballspeed1 += 0.5;
		ballspeed2 += 0.5;
	}

	topSpeedOfBall = topDirection*( Math.random()*ballspeed1 + ballspeed2);
	leftSpeedOfBall = direction * (Math.random()*ballspeed1 + ballspeed2);

	if (rand == 5) {
		topPositionOfBall2 = startTopPositionOfBall;
		leftPositionOfBall2 = startLeftPositionOfBall;
	
		topSpeedOfBall2 = topDirection*( Math.random()*ballspeed1 + ballspeed2);
		leftSpeedOfBall2 = direction2 * (Math.random()*ballspeed1 + ballspeed2);
	}
}
// start ball

function show(){

	positionOfPaddle1 += speedOfPaddle1;
	positionOfPaddle2 += speedOfPaddle2;
	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;

	if(rand == 5){
		topPositionOfBall2 += topSpeedOfBall2;
		leftPositionOfBall2 += leftSpeedOfBall2;
	}

	// paddle stay inside the board
	if(positionOfPaddle1 <= 0 ){
		positionOfPaddle1 = 0;
	}
	if(positionOfPaddle1 >= gameboardHeight - paddleHeight){
		positionOfPaddle1 = gameboardHeight - paddleHeight;
	}
	if(positionOfPaddle2 <= 0 ){
		positionOfPaddle2 = 0;
	}
	if(positionOfPaddle2 >= gameboardHeight - paddleHeight){
		positionOfPaddle2 = gameboardHeight - paddleHeight;
	}

	if (rand == 3) {
		positionOfPaddle1 +=5;
		document.getElementById("paddle1").style.top = positionOfPaddle1 + 'px'; 	
		positionOfPaddle2 +=5;
		document.getElementById("paddle2").style.top = positionOfPaddle2 + 'px'; 	
	}

	// ball stay inside the board
	if (topPositionOfBall <= 0 || topPositionOfBall >= gameboardHeight - ballX) {
		bounce2.play();
		topSpeedOfBall *= -1; 
	}

	// ball hit left paddle
	if (leftPositionOfBall <= paddleWidth) {
		if (topPositionOfBall + ballX> positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
			bounce.play();
			leftSpeedOfBall *= -1;
		}else{
			player1Score += 1;
			console.log(player1Score);

			document.getElementById("score2").innerHTML = player1Score;
			buzzer.play();						
			direction *= -1;
			direction2 *= -1;								
			startBall();
		}
	}
	// ball hit right paddle
	if (leftPositionOfBall >= gameboardWidth - paddleWidth - ballX) {
		if (topPositionOfBall + ballX> positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
			bounce.play();			
			leftSpeedOfBall *= -1;
		}else{
			player2Score += 1;
			console.log(player2Score);

			document.getElementById("score1").innerHTML = player2Score;	
			buzzer.play();			
			direction *= -1;
			direction2 *= -1;					
			startBall();
		}
	}	

	// second ball
	if(rand == 5){
		// ball stay inside the board
		if (topPositionOfBall2 <= 0 || topPositionOfBall2 >= gameboardHeight - ballHeight) {
			bounce2.play();
			topSpeedOfBall2 *= -1; 
		}		

		if (leftPositionOfBall2 <= paddleWidth) {
			if (topPositionOfBall2 + ballHeight> positionOfPaddle1 && topPositionOfBall2 < positionOfPaddle1 + paddleHeight) {
				bounce.play();
				leftSpeedOfBall2 *= -1;
			}else{
				player1Score += 1;
				console.log(player1Score);

				document.getElementById("score2").innerHTML = player1Score;
				buzzer.play();						
				direction = 1;
				startBall();
			}
		}		

		if (leftPositionOfBall2 >= gameboardWidth - paddleWidth - ballHeight) {
			if (topPositionOfBall2 + ballHeight> positionOfPaddle2 && topPositionOfBall2 < positionOfPaddle2 + paddleHeight) {
				bounce.play();			
				leftSpeedOfBall2 *= -1;
			}else{
				player2Score += 1;
				console.log(player2Score);

				document.getElementById("score1").innerHTML = player2Score;	
				buzzer.play();			
				direction = -1;					
				startBall();
			}
		}	
	}

	// determine who wins
	if (player1Score == 7) {
		console.log("stop game");

		window.clearInterval(controlPlay);
		controlPlay = false;
		
		message1 = "Player 2 wins by " + player1Score + " points" ;
		message2 = "Player 1 scored " + player2Score + " points" ;

		document.getElementById("ball").style.top = 40 + "vh";
		document.getElementById("ball").style.left = 50 + "vw";

		showLightBox(message1, message2);	

		document.getElementById("paddle1").style.top = 40 + "vh";
		document.getElementById("paddle2").style.top = 40 + "vh";	
		if(rand == 1){	
			document.getElementById("ball").style.width = 25 + "px";
			document.getElementById("ball").style.height = 25 + "px";
		}
		if(rand == 2){	
			changeVisibility("fogZone");			
		}
		if(rand == 4){	
			ballspeed1 = 2;
			ballspeed2 = 6;	
			topSpeedOfBall = 0;
			leftSpeedOfBall = 0;
			topSpeedOfBall2 = 0;
			leftSpeedOfBall2 = 0;
		}			
		if(rand == 5){	
			changeVisibility("ball2");			
		}		
		changeVisibility("lightbox3");
		speedOfPaddle2 = 0;
    	speedOfPaddle1 = 0;
	}

	if (player2Score == 7) {
		console.log("stop game");

		window.clearInterval(controlPlay);
		controlPlay = false;
		
		message1 = "Player 1 wins by " + player2Score + " points" ;
		message2 = "Player 2 scored " + player1Score + " points" ;

		document.getElementById("ball").style.top = 40 + "vh";
		document.getElementById("ball").style.left = 50 + "vw";

		showLightBox(message1, message2);

		document.getElementById("paddle1").style.top = 40 + "vh";
		document.getElementById("paddle2").style.top = 40 + "vh";
		if(rand == 1){	
			document.getElementById("ball").style.width = 25 + "px";
			document.getElementById("ball").style.height = 25 + "px";
		}
		if(rand == 2){	
			changeVisibility("fogZone");			
		}
		if(rand == 4){	
			ballspeed1 = 2;
			ballspeed2 = 6;
			topSpeedOfBall = 0;
			leftSpeedOfBall = 0;
			topSpeedOfBall2 = 0;
			leftSpeedOfBall2 = 0;
		}			
		if(rand == 5){	
			changeVisibility("ball2");			
		}			
		changeVisibility("lightbox3");
		speedOfPaddle2 = 0;
    	speedOfPaddle1 = 0;
	}

	document.getElementById("paddle1").style.top = positionOfPaddle1 + "px";
	document.getElementById("paddle2").style.top = positionOfPaddle2 + "px";
	document.getElementById("ball").style.top = topPositionOfBall + "px";
	document.getElementById("ball").style.left = leftPositionOfBall + "px";

	if (rand == 5) {
		document.getElementById("ball2").style.top = topPositionOfBall2 + "px";
		document.getElementById("ball2").style.left = leftPositionOfBall2 + "px";
	}
}
// show

function resumeGame(){
	console.log("resume game");

	if (!controlPlay) {
		controlPlay = window.setInterval(show, 1000/60);
	}
	changeVisibility("pauseNavigation");
	changeVisibility("lightbox2");
}
// resume game

function pauseGame(){
	window.clearInterval(controlPlay);
	controlPlay = false;
}
// pause game

function startGame(){

	console.log("From startGame, random number is " + rand);
	console.log("startTopPositionOfBall is " + startTopPositionOfBall);
	console.log("startLeftPositionOfBall is " + startLeftPositionOfBall);

	score1 = 0;
	player1Score = 0;
	player2Score = 0;

	document.getElementById("score1").innerHTML = player1Score;
	document.getElementById("score2").innerHTML = player2Score;

	positionOfPaddle1 = startPositionOfPaddle1;
	positionOfPaddle2 = startPositionOfPaddle2;
	startBall();

	if (rand == 2) {
		changeVisibility("fogZone");
	}

	if (rand == 1) {
		ballX = 100;

		console.log("ballX is " + ballX );

		document.getElementById("ball").style.width = ballX + "px";
		document.getElementById("ball").style.height = ballX + "px";
	}

	if (!controlPlay) {
		controlPlay = window.setInterval(show, 1000/60);
	}
	changeVisibility("lightbox3");
}

// stop Game
function stopGame(){
	console.log("stop game");

	window.clearInterval(controlPlay);
	controlPlay = false;
	let message1 = "Tie game";
	let message2 = "Close to contitue";

	if(player2Score > player1Score){
		message1 = "Player 1 wins by " + player2Score + " points" ;
		message2 = "Player 2 scored " + player1Score + " points" ;
	} else if (player1Score > player2Score){
		message1 = "Player 2 wins by " + player1Score + " points" ;
		message2 = "Player 1 scored " + player2Score + " points" ;		
	} else {
		message1 = "Tie game" ;
		message2 = "Close to contitue" ;		
	}

	document.getElementById("ball").style.top = 40 + "vh";
	document.getElementById("ball").style.left = 50 + "vw";
	document.getElementById("paddle1").style.top = 40 + "vh";
	document.getElementById("paddle2").style.top = 40 + "vh";
	changeVisibility("lightbox3");

	if(rand == 1){	
			document.getElementById("ball").style.width = 25 + "px";
			document.getElementById("ball").style.height = 25 + "px";
		}
	if(rand == 2){	
		changeVisibility("fogZone");			
	}
	if(rand == 4){	
		ballspeed1 = 2;
		ballspeed2 = 6;
		topSpeedOfBall = 0;
		leftSpeedOfBall = 0;
		topSpeedOfBall2 = 0;
		leftSpeedOfBall2 = 0;
	}			
	if(rand == 5){	
		changeVisibility("ball2");			
	}			
	speedOfPaddle2 = 0;
   	speedOfPaddle1 = 0;

	changeVisibility("pauseNavigation");
	changeVisibility("lightbox2");
	showLightBox(message1, message2);
}

function changeVisibility (divID){

	var element = document.getElementById(divID);

	// if element exitsts, toggle its class
	// between hidden and unhidden

	if(element){
		element.className = (element.className == 'hidden')? 'unhidden':'hidden';
	}// if
}
// change visibility

// display message in lightbox
function showLightBox(message1, message2){

	document.getElementById("message1").innerHTML = message1;
	document.getElementById("message2").innerHTML = message2;
	
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
}

// show rule

function showRule(text1, text2){

	document.getElementById("text1").innerHTML = text1;
	document.getElementById("text2").innerHTML = text2;
	
	changeVisibility("lightbox4");
	changeVisibility("boundaryRule");
}

//contitue / restart game
function continueGame(){
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");

	changeVisibility("lightbox1");
	changeVisibility("positionNavigation");

	document.getElementById("score1").innerHTML = 0;
	document.getElementById("score2").innerHTML = 0;
}

function classic (){
	console.log("classic mode");
	changeVisibility("lightbox1");
	changeVisibility("positionNavigation");
}

function action (){
	console.log("action mode");
	changeVisibility("lightbox1");
	changeVisibility("positionNavigation");

	rand = parseInt(Math.random()*5) + 1;
	console.log("random number is " + rand);

	if (rand == 1){

		text1 = "Mega Ball"
		text2 = "Watch out for the ball! It is huge."

		showRule(text1, text2);

		setTimeout(function(){
			changeVisibility("lightbox4");
			changeVisibility("boundaryRule");
		}, 900) ;	
	} else if (rand == 2){

		text1 = "Fog Zone"
		text2 = "Can you see through the fog?"

		showRule(text1, text2);

		setTimeout(function(){
			changeVisibility("lightbox4");
			changeVisibility("boundaryRule");
		}, 900) ;	
	} else if (rand == 3){

		text1 = "Falling Paddle"
		text2 = "Paddles are falling!"

		showRule(text1, text2);

		setTimeout(function(){
			changeVisibility("lightbox4");
			changeVisibility("boundaryRule");
		}, 900) ;	
	} else if (rand == 4){

		text1 = "Speed"
		text2 = "The longer you play, the faster the ball will be."

		showRule(text1, text2);

		setTimeout(function(){
			changeVisibility("lightbox4");
			changeVisibility("boundaryRule");
		}, 900) ;	
	} else if (rand == 5){
		changeVisibility("ball2");

		text1 = "Double Ball"
		text2 = "Double the ball, double the fun"

		showRule(text1, text2);

		setTimeout(function(){
			changeVisibility("lightbox4");
			changeVisibility("boundaryRule");
		}, 900) ;	
	}
	// small paddle big ball (1)
		// press x or m to make paddle bigger
	// fog zone (2)
		// basically a strip of light box	
	// falling paddle (3)
		// keeps falling
	// high speed (4)
		// speed slow builds up
	// double ball (5)
		// two balls
}

function showPause (){
	console.log("pause game");
	changeVisibility("pauseNavigation");
	changeVisibility("lightbox2");
	window.clearInterval(controlPlay);
	controlPlay = false;
}