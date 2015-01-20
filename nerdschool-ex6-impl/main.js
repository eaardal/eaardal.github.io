var FizzBuzz = function(){

	return {

		tryNumber: function(nr){

			// - Should return Fizz if number is divisible by 3.
			// - Should return Buzz if number is divisible by 5.
			// - Should return FizzBuzz if number is divisible by 3 and 5.

			if (nr % 15 === 0) {
				return 'FizzBuzz';
			}

			if (nr % 3 === 0){
				return 'Fizz';
			}

			if (nr % 5 === 0){
				return 'Buzz';
			}

			return nr;

		}	

	} 

}