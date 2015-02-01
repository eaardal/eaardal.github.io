// - Should return Fizz if number is divisible by 3.
// - Should return Fizz if number contains 3.
// - Should return Buzz if number is divisible by 5.
// - Should return Buzz if number contains 5.
// - Should return FizzBuzz if number is divisible by 3 and 5.
// - Should return FizzBuzz if number contains 3 and 5.

var FizzBuzz = function(){

	var containsNumber = function(value, nr){
		return value.indexOf(nr) > -1;
	}

	return {

		tryNumber: function(nr){

			var containsThree = containsNumber(nr.toString(), 3);
			var containsFive = containsNumber(nr.toString(), 5);

			if (nr % 15 === 0 || (containsThree && containsFive)) {
				return 'FizzBuzz';
			}

			if (nr % 3 === 0 || (containsThree && !containsFive)){
				return 'Fizz';
			}

			if (nr % 5 === 0 || (!containsThree && containsFive)){
				return 'Buzz';
			}

			return nr;

		}	

	} 

}