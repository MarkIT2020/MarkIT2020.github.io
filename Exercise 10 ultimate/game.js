const levels = [

	// level 1
	["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",
	 "tree", "tree", "tree", "tree", "tree", "tree", "", "", "", "flag",
	 "tree", "tree", "tree", "tree", "tree", "", "", "", "", "tree",
	 "tree", "tree", "tree", "", "", "", "", "tree", "tree", "tree", 
	 "tree", "tree", "tree", "", "", "", "", "tree", "tree", "tree",
	 "tree", "tree", "", "", "", "", "tree", "tree", "tree", "tree",
	 "tree", "", "", "horseright", "", "", "tree", "water", "water", "water",
	 "tree", "", "", "rider", "", "tree", "water", "water", "water", "water",
	 "tree", "tree", "tree", "water", "water", "water", "water", "water", "water", "water", 
	 "tree", "tree", "water", "water", "water", "water", "water", "water", "water", "water",	 
	],
	// level 2
	["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "rock", "rock",
	 "horseright", "", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "rock",
	 "tree", "", "", "fencev", "", "", "water", "water", "tree", "rock",
	 "tree", "rider", "", "fencev", "", "", "water", "water", "water", "tree", 
	 "tree", "tree", "tree", "fencev", "", "", "", "", "", "tree",
	 "tree", "tree", "tree", "tree", "", "", "", "", "", "tree",
	 "water", "water", "tree", "tree", "tree", "tree", "fenceh", "fenceh", "fenceh", "tree",
	 "water", "water", "water", "water", "tree", "tree", "tree", "", "", "tree",
	 "water", "water", "water", "water", "water", "water", "tree", "tree", "", "flag", 
	 "water", "water", "water", "water", "water", "water", "water", "tree", "tree", "tree",	 
	],
	// level 3
	["rock", "rock", "rock", "rock", "rock", "tree", "tree", "tree", "tree", "tree",
	 "rock", "rock", "rock", "tree", "tree", "tree", "water", "water", "water", "tree",
	 "rock", "rock", "tree", "tree", "tree", "", "", "", "", "flag",
	 "rock", "tree", "tree", "", "", "", "", "tree", "tree", "tree", 
	 "tree", "tree", "animate", "animate", "animate", "animate", "animate", "animate", "tree", "tree",
	 "tree", "tree", "", "", "", "", "tree", "tree", "tree", "tree",
	 "tree", "", "", "", "", "tree", "tree", "tree", "tree", "tree",
	 "tree", "rider", "", "", "tree", "tree", "tree", "tree", "tree", "water",
	 "horseright", "", "", "tree", "tree", "tree", "tree", "water", "water", "water", 
	 "tree", "tree", "tree", "tree", "tree", "water", "water", "water", "water", "water",	 
	],
	// level 4 
	["horseright", "rider", "tree", "tree", "tree", "water", "water", "water", "water", "tree",
	 "tree", "", "", "tree", "tree", "water", "water", "water", "tree", "tree",
	 "tree", "", "", "", "water", "water", "water", "water", "tree", "tree",
	 "tree", "tree", "", "", "water", "water", "water", "tree", "tree", "tree", 
	 "tree", "tree", "", "", "bridge", "bridge", "bridge", "", "", "tree",
	 "tree", "tree", "tree", "water", "water", "water", "water", "", "", "tree",
	 "tree", "tree", "water", "water", "water", "water", "", "", "", "tree",
	 "water", "water", "water", "water", "water", "tree", "", "", "", "tree",
	 "water", "water", "water", "water", "tree", "tree", "tree", "", "", "tree", 
	 "water", "water", "water", "water", "tree", "tree", "tree", "tree", "flag", "tree",	 
	],
	// level 5
	["water", "water", "water", "water", "water", "water", "tree", "tree", "horsedown", "",
	 "water", "water", "water", "tree", "tree", "tree", "tree", "tree", "rider", "tree",
	 "water", "water", "tree", "tree", "tree", "tree", "tree", "", "", "tree",
	 "tree", "tree", "tree", "tree", "tree", "tree", "", "", "", "tree", 
	 "tree", "tree", "tree", "tree", "enemyshootdown", "", "", "", "", "tree",
	 "tree", "tree", "rock", "fencev", "", "", "", "", "", "tree",
	 "tree", "", "", "fencev", "", "", "", "", "tree", "tree",
	 "tree", "", "", "fencev", "", "", "", "tree", "tree", "tree",
	 "flag", "", "", "fencev", "", "", "tree", "tree", "tree", "tree", 
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",	 
	],
	// level 6 
	["water", "water", "water", "water", "water", "water", "water", "water", "water", "water",
	 "water", "water", "water", "water", "tree", "tree", "tree", "tree", "tree", "tree",
	 "flag", "", "", "", "", "", "", "tree", "tree", "tree",
	 "tree", "tree", "tree", "", "fenceh", "fenceh", "fenceh", "fenceh", "tree", "tree", 
	 "tree", "tree", "tree", "tree", "animate", "animate", "animate", "animate", "animate", "tree",
	 "tree", "tree", "tree", "tree", "tree", "", "", "", "", "tree",
	 "tree", "tree", "tree", "tree", "tree", "", "", "", "", "tree",
	 "tree", "tree", "tree", "tree", "tree", "tree", "", "", "", "tree",
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "", "rider", "horseleft", 
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",	 
	],
	// level 7 
	["water", "water", "water", "water", "water", "water", "water", "water", "water", "water",
	 "water", "water", "water", "water", "water", "water", "water", "water", "water", "water",
	 "water", "water", "", "", "", "fencev", "animate2", "", "rider", "horseleft",
	 "water", "animate", "animate", "animate", "animate", "fencev", "animate2", "", "", "tree", 
	 "flag", "", "", "", "", "fencev", "animate2", "", "", "tree",
	 "tree", "tree", "", "", "", "fencev", "animate2", "", "", "tree",
	 "tree", "tree", "tree", "tree", "tree", "fencev", "", "", "", "tree",
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "", "tree", "tree",
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", 
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",	 
	],
	// level 8 
	["tree", "tree", "tree", "tree", "tree", "water", "water", "water", "water", "water",
	 "tree", "tree", "tree", "tree", "tree", "water", "water", "water", "water", "tree",
	 "tree", "tree", "tree", "", "water", "water", "water", "water", "water", "tree",
	 "tree", "tree", "tree", "", "water", "water", "water", "water", "tree", "tree", 
	 "tree", "animate", "animate", "bridge animate", "bridge animate", "bridge animate", "bridge animate", "bridge animate", "rider", "horseleft",
	 "tree", "", "", "water", "water", "water", "", "", "", "tree",
	 "tree", "", "water", "water", "water", "water", "tree", "", "", "tree",
	 "tree", "", "water", "water", "water", "water", "tree", "tree", "tree", "tree",
	 "tree", "", "water", "water", "water", "tree", "tree", "tree", "tree", "tree", 
	 "tree", "flag", "tree", "water", "water", "water", "water", "tree", "tree", "tree",	 
	],	
	// level 9 
	["tree", "horsedown", "tree", "water", "water", "water", "water", "tree", "tree", "tree",
	 "tree", "rider", "", "water", "water", "water", "water", "tree", "tree", "tree",
	 "tree", "", "water", "water", "water", "water", "water", "tree", "tree", "tree",
	 "tree", "", "bridge", "bridge", "water", "water", "water", "", "", "enemyshootleft", 
	 "tree", "tree", "water", "bridge", "bridge", "water", "water", "", "tree", "tree",
	 "tree", "tree", "water", "water", "bridge", "bridge", "water", "", "tree", "tree",
	 "tree", "tree", "water", "water", "water", "bridge", "bridge", "", "", "flag",
	 "tree", "tree", "tree", "water", "water", "water", "water", "water", "water", "water",
	 "tree", "tree", "tree", "tree", "water", "water", "water", "water", "water", "water", 
	 "tree", "tree", "tree", "tree", "tree", "water", "water", "water", "water", "water",	 
	],	
	// level 10
	["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",
	 "tree", "tree", "tree", "", "", "", "fencev", "animate2", "", "flag",
	 "tree", "", "", "", "", "", "fencev", "animate2", "tree", "tree",
	 "tree", "animate", "animate", "animate", "animate", "animate", "fencev", "animate2", "tree", "tree", 
	 "tree", "fenceh", "fenceh", "fenceh", "fenceh", "tree", "tree", "animate2", "tree", "tree",
	 "tree", "animate3", "animate3", "animate3", "animate3", "tree", "tree", "tree", "tree", "tree",
	 "horseright", "rider", "", "", "", "tree", "tree", "tree", "tree", "tree",
	 "tree", "", "", "", "tree", "tree", "tree", "tree", "tree", "tree",
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", 
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",	 
	],	
	// level 11
	["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",
	 "horseright", "", "animate", "animate", "animate", "animate", "", "", "", "tree",
	 "tree", "rider", "water", "bridge", "water", "water", "", "", "", "tree",
	 "tree", "water", "water", "bridge", "water", "water", "water", "water", "", "tree", 
	 "tree", "water", "water", "bridge", "bridge animate2", "water", "water", "water", "water", "tree",
	 "tree", "water", "water", "bridge", "bridge animate2", "water", "water", "water", "water", "tree",
	 "tree", "water", "water", "water", "bridge animate2", "water", "water", "water", "water", "tree",
	 "tree", "", "water", "water", "bridge animate2", "water", "water", "water", "", "tree",
	 "tree", "", "animate3", "animate3", "animate3", "animate3", "", "", "", "flag", 
	 "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree",	 
	],	
	//level 12
	["", "", "", "", "", "", "", "", "", "",
	 "", "t", "h", "a", "n", "k", "", "", "", "",
	 "", "", "", "", "", "", "", "", "", "",
	 "", "", "", "y", "o", "u", "", "", "", "", 
	 "", "", "", "", "", "", "", "", "", "",
	 "", "", "f", "o", "r", "", "", "", "", "",
	 "", "", "", "", "", "", "", "", "", "",
	 "", "", "p", "l", "a", "smally", "i", "n", "g", "",
	 "horseright", "rider", "", "", "", "", "", "", "", "", 
	 "", "", "", "", "", "", "", "", "", "",	 
	]			
];
const gridBoxes = document.querySelectorAll("#gameBoard div");
const noPassObstacles = ["rock", "tree", "water", "t", "h", "a", "n", "k", "y", "o", "u", "f", "r", "p", "l", "smally", "i", "g"];
const passable = ["", "bridge"];

let a = false;

var currentLevel = 0;
var riderOn = false;
var currentLocationOfHorse = 0;
var currentAnimation;
var currentAnimation2;
var currentAnimation3;
var currentLocationofEnemy = 0;
var currentLocationofEnemy2 = 0;
var currentLocationofEnemy3 = 0;
let locationShoot = 0;
var widthOfBoard = 10;
var controlPlay;
let directionOfEnemy = "";
let directionOfEnemy2 = "";
let directionOfEnemy3 = "";


const gameboardHeight = document.getElementById("gameBoard").offsetHeight;
const gameboardWidth = document.getElementById("gameBoard").offsetWidth;
const ballHeight = document.getElementById("ball").offsetHeight;
let startTopPositionOfBall = document.getElementById("ball").offsetTop;
let startLeftPositionOfBall = document.getElementById("ball").offsetLeft;
var topPositionOfBall = startTopPositionOfBall;
var leftPositionOfBall = startLeftPositionOfBall;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;

function key(e){
	switch (e.keyCode){
	case 37: // left
		if(currentLocationOfHorse % widthOfBoard !== 0){
			tryToMove("left");
		}
		break;
	case 38: // up
		if(currentLocationOfHorse - widthOfBoard >= 0){
			tryToMove("up");
		}
		break;			
	case 39: // right
		if(currentLocationOfHorse % widthOfBoard < widthOfBoard - 1){
			tryToMove("right");
		}
		break;
		
	case 40: // down
		if(currentLocationOfHorse + widthOfBoard < widthOfBoard * widthOfBoard){
			tryToMove("down");
		}		
	}
}

function tryToMove(direction){

	// location before move
	let oldLocation = currentLocationOfHorse;
	// class of location before move
	let oldClassName = gridBoxes[oldLocation].className;
	let nextLocation = 0; // location player wants to move to
	let nextClass = ""; // class of location player wish to move to
	let newClass = ""; // new class to swtich to if moved
	let nextLocation2 = 0; 
	let nextClass2 = "";
	var obstacle1 = "";

	switch(direction){
		case "left":
			nextLocation = currentLocationOfHorse - 1;
			break;
		case "right":
			nextLocation = currentLocationOfHorse + 1;			
			break;
		case "up":
			nextLocation = currentLocationOfHorse - widthOfBoard;			
			break;			
		case "down":
			nextLocation = currentLocationOfHorse + widthOfBoard;			
			break;
	}// switch

	nextClass = gridBoxes[nextLocation].className;

	// if the obstacle is not passable, don't move
	if (noPassObstacles.includes(nextClass)){return;}

	// if there is a fence, and there's no rider don't move
	if(!riderOn && nextClass.includes("fence")){return;}

	// if there is a flag, and there's no rider, don't move
	if(!riderOn && nextClass.includes("flag")){return;}

	// if there is a fence, and rider is on, move 2 grid and animate the process
	if(nextClass.includes ("fence")){

		document.removeEventListener('keydown', key, true);

		// there must be a rider
		if(riderOn){
			
			if(direction == "left"){
				nextLocation2 = nextLocation - 1;
				obstacle1 = gridBoxes[nextLocation2].className;
				if(nextLocation2 % widthOfBoard== 9 ){
					console.log("can't go over gameboard");	
					document.addEventListener('keydown', key, true);
					return;
				} else if(noPassObstacles.includes(obstacle1) || obstacle1.includes("fence")) {
					console.log("there is "+obstacle1+".");
					document.addEventListener('keydown', key, true);
					return;				
				} else {
					gridBoxes[currentLocationOfHorse].className = "";
					oldClassName = gridBoxes[nextLocation].className;
					nextClass = "jumpleft";
					nextClass2 = "horserideleft";	
				}
			} else if(direction == "right"){
				nextLocation2 = nextLocation + 1;
				if(nextLocation % widthOfBoard== 9){
					console.log("can't go over gameboard");	
					document.addEventListener('keydown', key, true);
					return;
				} else {
					obstacle1 = gridBoxes[nextLocation2].className;
				} 

				if(noPassObstacles.includes(obstacle1) || obstacle1.includes("fence")) {
					console.log("there is "+obstacle1+".");
					document.addEventListener('keydown', key, true);
					return;				
				} else {
					gridBoxes[currentLocationOfHorse].className = "";
					oldClassName = gridBoxes[nextLocation].className;
					nextClass = "jumpright";
					nextClass2 = "horserideright";
				}	
			} else if(direction == "up"){
				nextLocation2 = nextLocation - widthOfBoard;
				if(nextLocation2 < 0){
					console.log("can't go over gameboard");	
					document.addEventListener('keydown', key, true);
					return;
				} else {
					obstacle1 = gridBoxes[nextLocation2].className;
				} 

				if(noPassObstacles.includes(obstacle1) || obstacle1.includes("fence")) {
					console.log("there is "+obstacle1+".");
					document.addEventListener('keydown', key, true);					
					return;				
				}else{
					gridBoxes[currentLocationOfHorse].className = "";
					oldClassName = gridBoxes[nextLocation].className;
					nextClass = "jumpup";
					nextClass2 = "horserideup";
				}	
			} else if(direction == "down"){
				nextLocation2 = nextLocation + widthOfBoard;
				if(nextLocation2 > 99){
					console.log("can't go over gameboard");	
					document.addEventListener('keydown', key, true);
					return;
				} else {
					obstacle1 = gridBoxes[nextLocation2].className;
				} 

				if(noPassObstacles.includes(obstacle1) || obstacle1.includes("fence")) {
					console.log("there is "+obstacle1+".");
					document.addEventListener('keydown', key, true);
					return;				
				} else {
					gridBoxes[currentLocationOfHorse].className = "";
					oldClassName = gridBoxes[nextLocation].className;
					nextClass = "jumpdown";
					nextClass2 = "horseridedown";
				}	
			}

				// show horse jumping
				gridBoxes[nextLocation].className = nextClass;
				//console.log(oldClassName);
				setTimeout(function(){

					// set jump back to just a fence 

					gridBoxes[nextLocation].className = oldClassName;

					// update current location of horse to 2 space past take off
					currentLocationOfHorse = nextLocation2;
					// get class of box after jump
					nextClass = gridBoxes[currentLocationOfHorse].className;
					// show horse and rider after landing
					gridBoxes[currentLocationOfHorse].className = nextClass2;
					//if next box is a flag, go up level
					levelUp(nextClass);

					document.addEventListener('keydown', key, true);

				}, 350);

			return;

		}	


	} // fence animation


	// there is a rider, add the rider
	if(nextClass == "rider"){riderOn = true;}

	// if there is a bridge in the old location, keep it
	if(oldClassName.includes("bridge")){
		gridBoxes[oldLocation].className = "bridge";
	} else {
		gridBoxes[oldLocation].className = "";
	}

	// build name for new class
	newClass = (riderOn) ? "horseride" : "horse";
	newClass += direction;

	// if there's a bridge in the next location keep it
	if(gridBoxes[nextLocation].classList.contains("bridge")){
		newClass += " bridge";
	}

	// move 1 space
	currentLocationOfHorse = nextLocation;
	gridBoxes[currentLocationOfHorse].className = newClass;

	// if it is an enemy
	if(nextClass.includes("enemy")){
		document.removeEventListener('keydown', key, true);
		clearTimeout(currentAnimation);
		clearTimeout(currentAnimation2);
		clearTimeout(currentAnimation3);
	
//		window.clearInterval(controlPlay);
//		controlPlay = false;
		document.getElementById("lose").style.display = "block";

		setTimeout(function(){

			loadLevel();
			document.addEventListener('keydown', key, true);

			document.getElementById("lose").style.display = "none";
		}, 2000);

		return;
	}

	// move up to next level if needed
	levelUp(nextClass)
}// try to move

function levelUp(nextClass){
	if(nextClass == "flag" && riderOn){
		document.getElementById("levelup").style.display = "block";
		clearTimeout(currentAnimation);
		clearTimeout(currentAnimation2);
		clearTimeout(currentAnimation3);
		setTimeout(function(){
			document.getElementById("levelup").style.display = "none";
			currentLevel++;


			console.log(currentLevel);


//			controlPlay = false;
//			window.clearInterval(controlPlay);
			document.getElementById("ball").style.top = 0 + "px";
			document.getElementById("ball").style.left = 0 + "px";

		topSpeedOfBall = 0;
		leftSpeedOfBall = 0;

			loadLevel();
		
		},1000);
	}
}// level up

function loadLevel(){
	let levelMap = levels[currentLevel];
	let animateBoxes;
	let animateBoxes2;
	let animateBoxes3;
	riderOn = false;

	// load the board

	document.addEventListener('keydown', key, true);
 
 	for(i = 0; i < gridBoxes.length; i++){
		gridBoxes[i].className = levelMap[i];
		if(levelMap[i].includes("horse")) currentLocationOfHorse = i;
	}

	for(i = 0; i < gridBoxes.length; i++){
		if(levelMap[i].includes("shoot")) {
			console.log("there's a shooter");
			document.getElementById("ball").style.display = "block";
			topSpeedOfBall = 0;
			leftSpeedOfBall = 0;			
			startBall();
			if (!controlPlay) {
				controlPlay = window.setInterval(show, 25);
			}
			return;
		} else {
			document.getElementById("ball").style.display = "none";
			console.log("there's no shooter");
			topSpeedOfBall = 0;
			leftSpeedOfBall = 0;
			controlPlay = false;
			window.clearInterval(controlPlay);
			document.getElementById("ball").style.top = 0 + "px";
			document.getElementById("ball").style.left = 0 + "px";
			//return;
		}
	}
	animateBoxes = document.querySelectorAll(".animate");
	animateEnemy(animateBoxes, 0, "right");

	animateBoxes2 = document.querySelectorAll(".animate2");
	animateEnemyv(animateBoxes2, 0, "down");

	animateBoxes3 = document.querySelectorAll(".animate3");
	animateEnemy3(animateBoxes3, 0, "right");
}

function animateEnemy(boxes, index, direction){

	//if(a){

	//move up, down, left, right
	//boxes: array of grid box that include aniamtion
	//index: current location of animation
	//direction: current direction

	//exit of no animation
	if(boxes.length <= 0) {return; }

	//update image
	if(direction == "right") {
		boxes[index].classList.add("enemyright");
		currentLocationofEnemy = index;
		directionOfEnemy = direction;
	}else{
		boxes[index].classList.add("enemyleft");
		currentLocationofEnemy = index;
		directionOfEnemy = direction;
	}
	//remove image
	for(i = 0; i < boxes.length; i++){
		if(i != index){
			boxes[i].classList.remove("enemyright");
			boxes[i].classList.remove("enemyleft");
		}
	}
	//moving right
	if(direction == "right"){
		//turn around if hit right side
		if(index == boxes.length - 1){
			index--;
			direction = "left";
		}else{
			index++;
		}
	//moving left	
	}else{
		if(index == 0){
			index++;
			direction = "right";
		}else{
			index--;
		}	
	}//else

	var currentClass = gridBoxes[currentLocationOfHorse].className;

	if(currentClass.includes("enemy")){
		document.getElementById("lose").style.display = "block";
		document.removeEventListener('keydown', key, true);

		setTimeout(function(){

			loadLevel();
			document.addEventListener('keydown', key, true);

			document.getElementById("lose").style.display = "none";
		}, 2000);

		return;
	}

		currentAnimation = setTimeout(function(){
		animateEnemy(boxes, index, direction);
		}, 750); 

	//}	
}//animateEnemy

function animateEnemyv(boxes, index2, direction){

	//if(a){

	//move up, down, left, right
	//boxes: array of grid box that include aniamtion
	//index: current location of animation
	//direction: current direction

	//exit of no animation
	if(boxes.length <= 0) {return; }

	//update image
	if(direction == "up") {
		boxes[index2].classList.add("enemyup");
		currentLocationofEnemy2 = index2;
		directionOfEnemy2 = direction;
	}else{
		boxes[index2].classList.add("enemydown");
		currentLocationofEnemy2 = index2;
		directionOfEnemy2 = direction;
	}
	//remove image
	for(i = 0; i < boxes.length; i++){
		if(i != index2){
			boxes[i].classList.remove("enemyup");
			boxes[i].classList.remove("enemydown");
		}
	}
	//moving right
	if(direction == "down"){
		//turn around if hit right side
		if(index2 == boxes.length - 1){
			index2--;
			direction = "up";
		}else{
			index2++;
		}
	//moving left	
	}else{
		if(index2 == 0){
			index2++;
			direction = "down";
		}else{
			index2--;
		}	
	}//else

	var currentClass = gridBoxes[currentLocationOfHorse].className;

	if(currentClass.includes("enemy")){
		document.getElementById("lose").style.display = "block";
		document.removeEventListener('keydown', key, true);

		setTimeout(function(){

			loadLevel();
			document.addEventListener('keydown', key, true);

			document.getElementById("lose").style.display = "none";
		}, 2000);

		return;
	}

		currentAnimation2 = setTimeout(function(){
		animateEnemyv(boxes, index2, direction);
		}, 750); 

	//}	
}//animateEnemy

function animateEnemy3(boxes, index3, direction){

	//if(a){

	//move up, down, left, right
	//boxes: array of grid box that include aniamtion
	//index: current location of animation
	//direction: current direction

	//exit of no animation
	if(boxes.length <= 0) {return; }

	//update image
	if(direction == "right") {
		boxes[index3].classList.add("enemyright");
		currentLocationofEnemy3 = index3;
		directionOfEnemy3 = direction;
	}else{
		boxes[index3].classList.add("enemyleft");
		currentLocationofEnemy3 = index3;
		directionOfEnemy3 = direction;
	}
	//remove image
	for(i = 0; i < boxes.length; i++){
		if(i != index3){
			boxes[i].classList.remove("enemyright");
			boxes[i].classList.remove("enemyleft");
		}
	}
	//moving right
	if(direction == "right"){
		//turn around if hit right side
		if(index3 == boxes.length - 1){
			index3--;
			direction = "left";
		}else{
			index3++;
		}
	//moving left	
	}else{
		if(index3 == 0){
			index3++;
			direction = "right";
		}else{
			index3--;
		}	
	}//else

	var currentClass = gridBoxes[currentLocationOfHorse].className;

	if(currentClass.includes("enemy")){
		document.getElementById("lose").style.display = "block";
		document.removeEventListener('keydown', key, true);

		setTimeout(function(){

			loadLevel();
			document.addEventListener('keydown', key, true);

			document.getElementById("lose").style.display = "none";
		}, 2000);

		return;
	}

		currentAnimation3 = setTimeout(function(){
		animateEnemy3(boxes, index3, direction);
		}, 750); 

	//}	
}//animateEnemy

function changeVisibility (divID){

	var element = document.getElementById(divID);

	// if element exitsts, toggle its class
	// between hidden and unhidden

	if(element){
		element.className = (element.className == 'hidden')? 'unhidden':'hidden';
	}// if
}

function showRule(text1, text2){

	var text1 = "Game rule:";
	var text2 = "Use Arrow keys to move, do not run into enemies with red hat. The cowboy cannot jump over fence by himself, and the horse can only jump over the fence with the cowboy on him. Also, don't run into bullets";

	document.getElementById("text1").innerHTML = text1;
	document.getElementById("text2").innerHTML = text2;
	
	
	changeVisibility("boundaryRule");
}

function showPause (){
	changeVisibility("pauseNavigation");
	changeVisibility("lightbox2");
	console.log("paused");	
	window.clearInterval(controlPlay);
	controlPlay = false;
	clearTimeout(currentAnimation);
	clearTimeout(currentAnimation2);
	clearTimeout(currentAnimation3);

	document.removeEventListener('keydown', key, true);
}

function selectLevel(){
	changeVisibility("navigation");
	changeVisibility("levelNavigation");
}

function startGame(num){

	let levelMap = levels[currentLevel];

	changeVisibility("levelNavigation");
	changeVisibility("lightbox");
	currentLevel = num;
	loadLevel();

	startBall();

	for(i = 0; i < gridBoxes.length; i++){
		if(levelMap[i].includes("shoot")) {
			console.log("shooter");	
			if (!controlPlay) {
//				changeVisibility("ball");
				controlPlay = window.setInterval(show, 20);
			}
		}
	}

		window.addEventListener("load", function(){
			loadLevel();
		})
}

function continueGame(){
	changeVisibility("boundaryRule");
}

function stopGame(){
	changeVisibility("pauseNavigation");
	changeVisibility("lightbox2");
	changeVisibility("lightbox");
	changeVisibility("navigation");

	window.removeEventListener("load", function(){
		loadLevel();
	})
}

// fix
function resumeGame(){
	let animateBoxes;
	let animateBoxes2;
	let animateBoxes3;


	animateBoxes = document.querySelectorAll(".animate");
	animateBoxes2 = document.querySelectorAll(".animate2");
	animateBoxes3 = document.querySelectorAll(".animate3");

	index = currentLocationofEnemy; 
	index2 = currentLocationofEnemy2; 
	index3 = currentLocationofEnemy3; 

	direction = directionOfEnemy;
	direction2 = directionOfEnemy2;
	direction3 = directionOfEnemy3;


	console.log(directionOfEnemy);
	console.log(directionOfEnemy2);
	console.log("index"+index);
	console.log("index2"+index2);

	if(directionOfEnemy == "right"){
		direction = "right";
	}else{
		direction = "left";
	}

	if(directionOfEnemy2 == "up"){
		direction2 = "up";
	}else{
		direction2 = "down";
	}

	if(directionOfEnemy3 == "right"){
		direction3 = "right";
	}else{
		direction3 = "left";
	}

	console.log("resume game");
	changeVisibility("pauseNavigation");
	changeVisibility("lightbox2");
	document.addEventListener('keydown', key, true);
	if (!controlPlay) {
		controlPlay = window.setInterval(show, 25);
	}	
	animateEnemy(animateBoxes, index, direction);	
	animateEnemyv(animateBoxes2, index2, direction2);
	animateEnemy3(animateBoxes3, index3, direction3);


}

function restartGame(){
	let animateBoxes;
	let animateBoxes2;

	animateBoxes = document.querySelectorAll(".animate");	
	animateBoxes2 = document.querySelectorAll(".animate2");

	loadLevel();
	changeVisibility("");
	changeVisibility("pauseNavigation");
	changeVisibility("lightbox2");
	document.addEventListener('keydown', key, true);
	if (!controlPlay) {
		controlPlay = window.setInterval(show, 25);
	}
//	animateEnemy(animateBoxes, 0, "right");	
//	animateEnemyv(animateBoxes2, 0, "down");	
}

// 作12个level 

function startBall(){

	let levelMap = levels[currentLevel];

	var locationShoot = 0;

	for(i = 0; i < gridBoxes.length; i++){
		if(levelMap[i].includes("shoot")) {
			locationShoot = i;
		} 
	}

	var a = gridBoxes[locationShoot].className;
	var width = window.screen.width;

//	console.log(locationShoot);	
//	console.log(locationShoot%widthOfBoard);	
//	console.log((locationShoot-locationShoot%widthOfBoard)/10*60);	

	startLeftPositionOfBall = ((width-600)/2 + locationShoot%widthOfBoard*60 + 18);
	startTopPositionOfBall = ((locationShoot-locationShoot%widthOfBoard)/10*60 + 77 +38);
	
	topPositionOfBall = startTopPositionOfBall;
	leftPositionOfBall = startLeftPositionOfBall;

	document.getElementById("ball").style.top = topPositionOfBall + "px";
	document.getElementById("ball").style.left = leftPositionOfBall + "px";


	if(a.includes("up")){
		topDirection = -1;
		topSpeedOfBall = topDirection*( Math.random()*1 + 6);
		console.log("up speed: " + topSpeedOfBall);			
	} else if(a.includes("down")){
		topDirection = 1;
		topSpeedOfBall = topDirection*( Math.random()*1 + 6);		
		console.log("down speed: " + topSpeedOfBall);					
	} else if(a.includes("left")){
		direction = -1;
		leftSpeedOfBall = direction*( Math.random()*1 + 6);		
		console.log("left speed: " + leftSpeedOfBall);			
	} else if(a.includes("right")){
		direction = 1;
		leftSpeedOfBall = direction*( Math.random()*1 + 6);		
		console.log("right speed: " + leftSpeedOfBall);					
	}
}

function show(){

	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;
	document.getElementById("ball").style.top = topPositionOfBall + "px";
	document.getElementById("ball").style.left = leftPositionOfBall + "px";

	//	console.log("Ball left location: " + leftPositionOfBall);	
	//	console.log("Ball top location: " + topPositionOfBall);	

	var width = window.screen.width;
	var leftLocationOfHorse = ((width-600)/2 + currentLocationOfHorse%widthOfBoard*60 + 18);
	var topLocationOfHorse = ((currentLocationOfHorse-currentLocationOfHorse%widthOfBoard)/10*60 + 77 +38);

	//	console.log("Horse left location: " + leftLocationOfHorse);	
	//	console.log("Horse top location: " + topLocationOfHorse);	

	// ball stay inside the board
	if (topPositionOfBall - ballHeight <= 77 || topPositionOfBall >= gameboardHeight - ballHeight + 100 || leftPositionOfBall <= (width-600)/2 || leftPositionOfBall >= 600 + (width-600)/2 - ballHeight) {
	//	console.log("stay inside the board");	

		topPositionOfBall = startTopPositionOfBall;
		leftPositionOfBall = startLeftPositionOfBall;

		document.getElementById("ball").style.top = startTopPositionOfBall + "px";
		document.getElementById("ball").style.left = startLeftPositionOfBall + "px";
	}

	if((leftLocationOfHorse <= leftPositionOfBall && leftPositionOfBall <= leftLocationOfHorse +10) && (topLocationOfHorse <= topPositionOfBall && topPositionOfBall <= topLocationOfHorse + 10 )) {
		
		document.removeEventListener('keydown', key, true);		
		document.getElementById("lose").style.display = "block";
		clearTimeout(currentAnimation);
		clearTimeout(currentAnimation2);
		clearTimeout(currentAnimation3);

		loadLevel();

		window.clearInterval(controlPlay);
		controlPlay = false;

		setTimeout(function(){

			document.getElementById("lose").style.display = "none";
			document.addEventListener('keydown', key, true);

		}, 3000);

	}	
}

