'use strict';

/*
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600851475143?
* */
require('../../scripts/Math');
require('../../scripts/Array');

function getLargestPrimeFactor(n) {
    var factors = Math.getFactors(n);
    return getLargestPrime(factors);
}

function getLargestPrime(numbers) {
    var largestPrime;
    numbers = numbers.sortAsc();

    for(var i = 0, j = numbers.length; i < j; i++) {
        var number = numbers[i];

        if(Math.isPrime(number)) {
            largestPrime = number;
            break;
        }
    }

    return largestPrime;
}

console.log('');
console.log('');
console.log(getLargestPrimeFactor(600851475143));
console.log('');
console.log('');