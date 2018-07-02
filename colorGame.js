var message = document.getElementById("message");
var newGameBtn = document.querySelector("#newBtn");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.querySelector("#colorDisplay");

var colorArr = randomColors(6);

//the chosen correct answer/color
var ans = colorArr[pickColor()];
colorDisplay.innerHTML = ans;

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
			this.style.backgroundColor = "rgb(255, 255, 255)";
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