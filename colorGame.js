//random generated rgb color array
var hard = true;
var easy = false;
var colorArr = randomColors(6);
//random chosen correct answer/color
var ans = colorArr[pickColor()];
var h1 = document.querySelector("h1");
var message = document.getElementById("message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var newGameBtn = document.querySelector("#newBtn");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.querySelector("#colorDisplay");
var easySquares = document.querySelectorAll(".easy");

colorDisplay.innerHTML = ans;

//button logic
newGameBtn.addEventListener("click", function() {
	if(easy) {
		reset(3);
	}
	else {
		reset(6);
	}
});

easyBtn.addEventListener("click", function() {
	easy = true;
	hard = false;
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	reset(3);
	for(var i = 0; i < 3; i++){
		easySquares[i].style.display = "none";
	}
});

hardBtn.addEventListener("click", function() {
	hard = true;
	easy = false;
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	reset(6);
	for(var i = 0; i < 3; i++){
		easySquares[i].style.display = "block";
	}
});

for(var i = 0; i < squares.length; i++) {
	//assigning colors to squares
	squares[i].style.backgroundColor = colorArr[i];
	//click event for all squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === ans) {
			changeColors(clickedColor);
		}
		else {
			//change background color to match body color
			this.style.backgroundColor = "antiquewhite";
			//try again message
			message.innerHTML = "Try again!";
		}
	});
}

function changeColors(color) {
	//congratulations message
	message.innerHTML = "You win!";

	//change new game button to play again?
	newGameBtn.innerHTML = "Play Again?";

	//change h1 background to correct ans color
	h1.style.backgroundColor = color;

	for(var j = 0; j < squares.length; j++) {
		squares[j].style.backgroundColor = color;
	};
}

function pickColor() {
	return Math.floor(Math.random() * colorArr.length);
}

function randomColors(num) {
	//create an array
	var colors =  [];
	//push an rgb string into array
	for(var i = 0; i < num; i++) {
		colors.push(colorGen());
	}

	//return arr
	return colors;
}

function colorGen() {
	//create variables
	var r, g, b;
	r = Math.floor(Math.random() * 255 + 1);
	g = Math.floor(Math.random() * 255 + 1);
	b = Math.floor(Math.random() * 255 + 1);
	//return an rgb string
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(num) {
	//generate new colors
	colorArr = randomColors(num);
	//choose a new color
	ans = colorArr[pickColor()];
	//display corect answer
	colorDisplay.innerHTML = ans;
	//change all the squares to reflect the new generated colors array
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colorArr[i];
	}		
	//change h1 background color back to steelBlue
	h1.style.backgroundColor = "steelBlue";
	message.innerHTML = "";
	newGameBtn.innerHTML = "New Colors";
}