export const projectName = () => {
	return "Kata starter project";
};

export const fizzBuzz = (num) => {
	if (num % 5 === 0 && num % 3 === 0) {
		return "fizzBuzz";
	}
	if (num % 3 === 0) {
		return "fizz";
	}
	if (num % 5 === 0) {
		return "buzz";
	}

	// multiple of 3 - fizz
	// multiple of 5 - buzz
	// multiple of both - fizzbuzz

	return num;
};

https://github.com/CodingBlackFemales/tdd-js-starter/blob/main/docs/stats-calculator.md

https://github.com/CodingBlackFemales/tdd-js-starter/blob/main/docs/fibonacci-number.md