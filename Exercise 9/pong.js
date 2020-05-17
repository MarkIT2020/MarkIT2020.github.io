const paddleHeight = document.getElementById("paddle1").offsetHeight;
const paddleWidth = document.getElementById("paddle1").offsetWidth;
const gameboardHeight = document.getElementById("gameBoard").offsetHeight;
const gameboardWidth = document.getElementById("gameBoard").offsetWidth;
const ballHeight = document.getElementById("ball").offsetHeight;
const startTopPositionOfBall = document.getElementById("ball").offsetTop;
const startLeftPositionOfBall = document.getElementById("ball").offsetLeft;var speedOfPaddle1 = 0;
var positionOfPaddle1 = document.getElementById("paddle1").offsetTop;
var speedOfPaddle2 = 0;
var positionOfPaddle2 = document.getElementById("paddle2").offsetTop;
var topPositionOfBall = startTopPositionOfBall;
var leftPositionOfBall = startLeftPositionOfBall;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var player1Score = 0;
var player2Score = 0;
let direction = 1;
let a = 0;



window.addEventListener('load',function(){


//	if (a == 100) {
		startBall();
//	}
});



// keydown
document.addEventListener('keydown', function(e){


	if(e.keyCode == 87 || e.which == 87){ //w
		speedOfPaddle1 = -10;
	}
	if(e.keyCode == 83 || e.which == 83){ // s
		speedOfPaddle1 = 10;
	}	
	if(e.keyCode == 38 || e.which == 38){ //up
		speedOfPaddle2 = -10;
	}
	if(e.keyCode == 40 || e.which == 40){ // down
		speedOfPaddle2 = 10;
	}	

});

// player 2


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

function startBall(){


//	if (a == 100) {

	topPositionOfBall = startTopPositionOfBall;
	leftPositionOfBall = startLeftPositionOfBall;

	// random direction
	if (Math.random()<0.5){
		topDirection = 1;
	}else{
		topDirection = -1;
	}

	console.log(direction);

//direction*Math.random()
	topSpeedOfBall = topDirection*( Math.random()*3 + 6);
	leftSpeedOfBall = direction * (Math.random()*3 + 6);
//}
}

let show = function show (){

//	if (a == 100) {

	positionOfPaddle1 += speedOfPaddle1;
	positionOfPaddle2 += speedOfPaddle2;
	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;

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

	// ball stay inside the board
	if (topPositionOfBall <= 0 || topPositionOfBall >= gameboardHeight - ballHeight) {
		topSpeedOfBall *= -1; 
	}

	//ball hit paddle
	if (leftPositionOfBall <= paddleWidth) {
		if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
			leftSpeedOfBall *= -1;
		}else{
			player1Score += 1;
			document.getElementById("score2").innerHTML = player1Score;
			direction = 1;
//			setTimeout(function(){startBall()}, 1000) ;	
			startBall();
		}
		

	}
	if (leftPositionOfBall >= gameboardWidth - paddleWidth - ballHeight) {
		if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
			leftSpeedOfBall *= -1;
		}else{
			player2Score += 1;
			document.getElementById("score1").innerHTML = player2Score;	
			direction = -1;					
//			setTimeout(function(){startBall()}, 1000) ;	
			startBall();
		}

	}	

	document.getElementById("paddle1").style.top = positionOfPaddle1 + "px";
	document.getElementById("paddle2").style.top = positionOfPaddle2 + "px";
	document.getElementById("ball").style.top = topPositionOfBall + "px";
	document.getElementById("ball").style.left = leftPositionOfBall + "px";
//}
}

// show
window.setInterval (show ,1000/60);

function changeVisibility (divID){

	var element = document.getElementById(divID);

	// if element exitsts, toggle its class
	// between hidden and unhidden

	if(element){
		element.className = (element.className == 'hidden')? 'unhidden':'hidden';
	}// if
}//changeVisibility


function numPlayer(){


	a = 100;

	console.log(a);

	changeVisibility("lightbox");
	changeVisibility("positionNavigation");
}
