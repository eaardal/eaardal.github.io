function moveSquareMovesTheSquareInBothDimensions() {
    //var game = MyGame;
    var square = new Square();
    square.x = 100;
    square.y = 100;
    square.computeSquareMove();
    var expected = 102;

    Assert.that(square.x, expected);
    Assert.that(square.y, expected);
}

(function () {
    moveSquareMovesTheSquareInBothDimensions();
})();
