const levels = [

	// level 0
	["flag", "rock", "", "", "", 
	 "fence", "rock", "", "", "",  
	 "", "tree", "animate", "animate", "animate", 
	 "", "water", "", "", "",  
	 "", "fence2", "rider", "horseup", "", 
	],
	// level 1
	["flag", "water", "", "", "", 
	 "", "water", "", "", "rider",  
	 "animate", "bridge animate", "animate", "animate", "animate", 
	 "", "water", "", "", "",  
	 "", "water", "", "horseup", "", 
	],	
	// level 2
	["tree", "rock", "flag", "tree", "rock", 
	 "animate", "animate", "animate", "animate", "animate",  
	 "water", "water", "water", "bridge", "water", 
	 "", "tree", "", "", "horseup",  
	 "", "fence2", "", "rider", "", 
	]	
];

const gridBoxes = document.querySelectorAll("#gameBoard div");
const noPassObstacles = ["rock", "tree", "water"];

var currentLevel = 0;
var riderOn = false;
var currentLocationOfHorse = 0;
var currentAnimation;
var widthOfBoard = 5;


window.addEventListener("load", function(){
	loadLevel();
})

document.addEventListener('keydown', function(e){

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
});

// try to move
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



	switch(direction){
		case "left":
			console.log("left");
			nextLocation = currentLocationOfHorse - 1;
			break;
		case "right":
			console.log("right");
			nextLocation = currentLocationOfHorse + 1;			
			break;
		case "up":
			console.log("up");
			nextLocation = currentLocationOfHorse - widthOfBoard;			
			break;			
		case "down":
			console.log("down");
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

			console.log(oldClassName);

	// if there is a fence, and rider is on, move 2 grid and animate the process
	if(nextClass.includes ("fence")){
		if(riderOn){
			gridBoxes[currentLocationOfHorse].className = "";
			
			if(direction == "left"){
				nextClass = "jumpleft";
				nextClass2 = "horserideleft"
				nextLocation2 = nextLocation - 1;
			} else if(direction == "right"){
				nextClass = "jumpright";
				nextClass2 = "horserideright"
				nextLocation2 = nextLocation + 1;
			} else if(direction == "up"){
				nextClass = "jumpup";
				nextClass2 = "horserideup"
				nextLocation2 = nextLocation - widthOfBoard;
			} else if(direction == "down"){
				nextClass = "jumpdown";
				nextClass2 = "horseridedown"
				nextLocation2 = nextLocation + widthOfBoard;
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
			}, 350);
			return;
		}	
	}


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
		document.getElementById("lose").style.display = "block";
		return;
	}

	// move up to next level if needed
	levelUp(nextClass)

}// try to move

function levelUp(nextClass){
	if(nextClass == "flag" && riderOn){
		document.getElementById("levelup").style.display = "block";
		clearTimeout(currentAnimation);
		setTimeout(function(){
			document.getElementById("levelup").style.display = "none";
			currentLevel++;
			loadLevel();
		},1000);
	}
}// level up


function loadLevel(){
	let levelMap = levels[currentLevel];
	let animateBoxes;
	riderOn = false;

	// load the board
 
 	for(i = 0; i < gridBoxes.length; i++){
		gridBoxes[i].className = levelMap[i];
		if(levelMap[i].includes("horse")) currentLocationOfHorse = i;
	}

	animateBoxes = document.querySelectorAll(".animate");
	animateEnemy(animateBoxes, 0, "right");

}

//move up, down, left, right
//boxes: array of grid box that include aniamtion
//index: current location of animation
//direction: current direction

function animateEnemy(boxes, index, direction){

	//exit of no animation
	if(boxes.length <= 0) {return; }

	//update image
	if(direction == "right") {
		boxes[index].classList.add("enemyright");
	}else{
		boxes[index].classList.add("enemyleft");
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
	currentAnimation = setTimeout(function(){
		animateEnemy(boxes, index, direction);
	}, 750);
}//animateEnemy

















