(function(){

	// "sut" = System Under Test, meaning the thing we are testing. This is a common naming pattern for testing.

	assert('should return 1 as 1', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(1);
		expect(result).toEqual(1);
	});

	assert('should return 2 as 2', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(2);
		expect(result).toEqual(2);
	});

	assert('should return 3 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(3);
		expect(result).toEqual('Fizz');
	});

	assert('should return 4 as 4', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(4);
		expect(result).toEqual(4);
	});

	assert('should return 5 as Buzz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(5)
		expect(result).toEqual('Buzz');
	});

	assert('should return 6 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(6)
		expect(result).toEqual('Fizz');
	});

	assert('should return 7 as 7', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(7)
		expect(result).toEqual(7);
	});

	assert('should return 8 as 8', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(8)
		expect(result).toEqual(8);
	});

	assert('should return 9 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(9)
		expect(result).toEqual('Fizz');
	});

	assert('should return 10 as Buzz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(10)
		expect(result).toEqual('Buzz');
	});

	assert('should return 11 as 11', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(11)
		expect(result).toEqual(11);
	});

	assert('should return 12 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(12)
		expect(result).toEqual('Fizz');
	});

	assert('should return 13 as 13', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(13)
		expect(result).toEqual(13);
	});

	assert('should return 14 as 14', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(14)
		expect(result).toEqual(14);
	});

	assert('should return 15 as FizzBuzz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(15)
		expect(result).toEqual('FizzBuzz');
	});

	assert('should return 16 as 16', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(16)
		expect(result).toEqual(16);
	});

	assert('should return 17 as 17', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(17)
		expect(result).toEqual(17);
	});

	assert('should return 18 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(18)
		expect(result).toEqual('Fizz');
	});

	assert('should return 19 as 19', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(19)
		expect(result).toEqual(19);
	});

	assert('should return 20 as Buzz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(20)
		expect(result).toEqual('Buzz');
	});

	assert('should return 21 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(21)
		expect(result).toEqual('Fizz');
	});

	assert('should return 22 as 22', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(22)
		expect(result).toEqual(22);
	});

	assert('should return 23 as 23', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(23)
		expect(result).toEqual(23);
	});

	assert('should return 24 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(24)
		expect(result).toEqual('Fizz');
	});

	assert('should return 25 as Buzz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(25)
		expect(result).toEqual('Buzz');
	});

	assert('should return 26 as 26', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(26)
		expect(result).toEqual(26);
	});

	assert('should return 27 as Fizz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(27)
		expect(result).toEqual('Fizz');
	});

	assert('should return 28 as 28', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(28)
		expect(result).toEqual(28);
	});

	assert('should return 29 as 29', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(29)
		expect(result).toEqual(29);
	});

	assert('should return 30 as FizzBuzz', function(){
		var sut = new FizzBuzz();
		var result = sut.tryNumber(30)
		expect(result).toEqual('FizzBuzz');
	});

}());