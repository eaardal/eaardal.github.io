var Game = function() {
	this.canvas = null;
	this.context = null;
	this.squares = [];

	this.makeSquare = function(event){
		var square = new Square();
		square.x = event.layerX;
		square.y = event.layerY;
		this.squares.push(square);
	}

	this.redraw = function(){
		if (this.context === undefined ) {
			console.log('no context, returning...')
			return;
		}

		this.context.clearRect(0, 0, 400, 400);
		var context = this.context;
		var canvas = this.canvas;
		this.squares.forEach(function(square){
			square.computeSquareMove(canvas);
			context.beginPath();
			context.rect(square.x, square.y, square.width, square.height);
			context.stroke();
			context.closePath();
		});
	}
}

var gameLoop = function(){
	if (game.squares === undefined) {
		console.log('no squares, returning...')
		return;
	}
	window.requestAnimationFrame(gameLoop);
	game.redraw();
}

var Square = function(){
	this.width = 15;
	this.height = 15;
	this.x = -1;
	this.y = -1;
	this.velocityX = 3;
	this.velocityY = 3;

	this.computeSquareMove = function(canvas){

		this.x += this.velocityX;
		this.y += this.velocityY;

		if (totalWidth() >= canvas.width){			
			this.velocityX = invertNumber(this.velocityX);
		} 

		if (this.x <= 0){
			this.velocityX = invertNumber(this.velocityX);
		}

		if (totalHeight() >= canvas.height){
			this.velocityY = invertNumber(this.velocityY);
		} 

		if (this.y <= 0){
			this.velocityY = invertNumber(this.velocityY);
		}
	}

	var square = this;

	var totalWidth = function(){
		return square.x + square.width;
	}

	var totalHeight = function(){
		return square.y + square.height;
	}
}

var game = new Game();

drawGameBoard = function(){
	game.canvas = document.getElementById("gameBoard");
	game.canvas.height = 400;
	game.canvas.width = 400;
	game.canvas.addEventListener('click', function(event){
		game.makeSquare(event);
	}, false);
	game.context = game.canvas.getContext("2d");
}

gameLoop();