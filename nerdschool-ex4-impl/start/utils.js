var counter = 0;
var printToConsole = function(obj, nrOfTimes){
	if (nrOfTimes === undefined || nrOfTimes === null){
		console.log(obj);
	}
	if (counter < nrOfTimes) {
		console.log(obj);
		counter++;
	}
}

var invertNumber = function(number){
	if (number > 0){
		return -Math.abs(number);
	} else {
		return Math.abs(number);
	}
}

var getRandomNumber = function(min, max){
	// Thx to http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript
	return Math.floor(Math.random()*(max-min+1)+min);
}