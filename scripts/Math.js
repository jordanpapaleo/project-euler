'use strict';

if('function' !== typeof Math.isPrime) {
    Math.isPrime = function(n) {
        var isPrime = true;
        var max = Math.ceil(Math.sqrt(n));

        if(n !== 1 || n !== 2) {
            for(var i = 2; i < max; i++) {
                if(n % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        return isPrime;
    }
}

if('function' !== typeof Math.getFactors) {
    Math.getFactors = function(n) {
        var factors = [];
        var factor = 1;

        while (n > factor) {
            if(factors.indexOf(factor) >= 0) break;

            if(n % factor === 0) {
                factors.push(n / factor);
                factors.push(factor);
            }

            factor++;
        }

        return factors;
    }
}