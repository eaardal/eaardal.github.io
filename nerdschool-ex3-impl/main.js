var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400;

var Game = function() {
    this.canvas = null;
    this.context = null;
    this.squares = [];

    this.handleSquare = function(event) {
        if (!this.removeSquare(event)) {
            this.makeSquare(event);
        }
    }

    this.makeSquare = function(event) {
        var square = new Square();

        square.x = event.layerX;
        square.y = event.layerY;

        var canvas = this.canvas;

        var ensureIsCreatedWithinBounds = function() {
            var buffer = 5;

            if (square.totalWidth() + buffer > canvas.width) {
                square.x = canvas.width - (square.width + buffer);
            }

            if (square.totalHeight() + buffer > canvas.height) {
                square.y = canvas.height - (square.height + buffer);
            }
        }

        ensureIsCreatedWithinBounds();

        this.squares.push(square);
    }

    this.removeSquare = function(event) {
        var x = event.layerX;
        var y = event.layerY;

        var squares = this.squares;
        var removedSquare = false;

        if (x !== null && y !== null) {
            this.squares.forEach(function(square) {
                if (square.isClicked(x, y)) {
                    var index = squares.indexOf(square);
                    if (index > -1) {
                        squares.splice(index, 1);
                        removedSquare = true;
                    }
                }

            });
        }
        return removedSquare;
    }

    this.update = function(){
        var context = this.context;
        var canvas = this.canvas;
        var squares = this.squares;

    	this.squares.forEach(function(square) {
        	square.update(context, canvas, squares);
        });
    }

    this.redraw = function() {
        if (this.context === undefined) {
            printToConsole('no context, returning...')
            return;
        }

        this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        var context = this.context;
        
        this.squares.forEach(function(square) {
            square.draw(context);
        });
    }
}

var gameLoop = function() {
    if (game.squares === undefined) {
        printToConsole('no squares, returning...')
        return;
    }
    
    game.update();
    
    window.requestAnimationFrame(gameLoop);
    
    game.redraw();
}

var Square = function() {
    var colors = ['blue', 'red'];
    this.width = 40;
    this.height = 40;
    this.x = -1;
    this.y = -1;
    this.velocityX = getRandomNumber(1, 3);
    this.velocityY = getRandomNumber(1, 3);
    this.color = colors[0];

    this.update = function(context, canvas, squares) {
        this.computeSquareMove(canvas);
        if (this.isColliding(squares)) {
            this.switchColor();
        }
    }

    this.draw = function(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.stroke();
        context.closePath();
    }

    this.isClicked = function(x, y) {
        if (this.x < x && this.totalWidth() > x &&
            this.y < y && this.totalHeight() > y) {
            return true;
        }
        return false;
    }

    this.computeSquareMove = function(canvas) {

        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.totalWidth() >= canvas.width) {
            this.velocityX = invertNumber(this.velocityX);
        }

        if (this.x <= 0) {
            this.velocityX = invertNumber(this.velocityX);
        }

        if (this.totalHeight() >= canvas.height) {
            this.velocityY = invertNumber(this.velocityY);
        }

        if (this.y <= 0) {
            this.velocityY = invertNumber(this.velocityY);
        }
    }

    this.isColliding = function(squares) {
        if (squares === undefined) {
            return;
        }

        for (var i = 0; i < squares.length; i++) {
            var square = squares[i];
            if (square === this) {
                continue;
            }

            if (this.x < square.x + square.width &&
                this.x + this.width > square.x &&
                this.y < square.y + square.height &&
                this.y + this.height > square.y) {
                return true;
            }
        };
        return false;
    }

    this.switchColor = function() {
        /* 

		Toggles between random colors in colors array:

		var color = this.color;
		while (color === this.color){
			var index = getRandomNumber(0, colors.length);
			color = colors[index];	
		}		
		this.color = color;
		*/
        this.color = colors[1];
    }

    this.totalWidth = function() {
        return this.x + this.width;
    }

    this.totalHeight = function() {
        return this.y + this.height;
    }
}

var game = new Game();

drawGameBoard = function() {
    game.canvas = document.getElementById("gameBoard");
    game.canvas.height = CANVAS_HEIGHT;
    game.canvas.width = CANVAS_WIDTH;
    game.canvas.addEventListener('click', function(event) {
        game.handleSquare(event);
    }, false);
    game.context = game.canvas.getContext("2d");
}

gameLoop();