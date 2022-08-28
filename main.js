'use strict';

//import isPrime;
//import createDescArrayNumber;

//const divPrime = document.querySelector('#prime');
function showPrimeNumbers(number){
	const arrNumbers = createDescArrayNumber(number);
	return arrNumbers.filter( item => isPrime(item));
}

console.log( showPrimeNumbers(100) );

function isPrime(number) {

	if (typeof number !== 'number') {

		let error = new Error('The argument is not a number.');
		return error;
	}

	if (number !== 2 && number % 2 === 0) return false;
	if (number !== 3 && number % 3 === 0) return false;
	if (number !== 5 && number % 5 === 0) return false;
	if (number !== 7 && number % 7 === 0) return false;
	if (number !== 9 && number % 9 === 0) return false;

	let i = number;
	let c = 0;

	while (i) {

		//console.log('i=', i, 'c=', c);

		if (c === 2 && i !== 1) return false;

		(number % i === 0) ? c++ : c;
		i--;
	}
	return (c === 2);
}

//console.log( isPrime(81 ) );

// Create a descending array of numbers from a number.
//let number = 10;
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

//const numbers = createDescArrayNumber(number);

//console.log(numbers);