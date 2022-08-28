// Create a descending array of numbers from a number.
let number = 10;
function createDescArrayNumber(number) {
	if (typeof number !== 'number') {

		let error = new Error('The argument is not a number.');
		return error;
	}

	let i = number;
	let arr = [];
	while (i) {
		arr.unshift(i);
		i--;
	}
	return arr;
}

const numbers = createDescArrayNumber(number);

console.log(numbers);