/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.
 */

/*
 * max: interger
 * multiples: array numbers
 * */

require('../../scripts/Array');

 function findMultiples(max, multiples) {
    if(!max || !multiples) throw "Required Params are Missing";

    var sumArray = [];

    for(var i = 0; i < max; i++) {

        for(var j = 0; j < multiples.length; j++) {
            var multiple = multiples[j];

            if(i % multiple === 0 && sumArray.indexOf(i) === -1) {
                sumArray.push(i);
            }
        }

    }

    return sumArray;
}

var mySum = findMultiples(1000, [3, 5]);

console.log('');
console.log('');
console.log("SUM: Length - " + mySum.length + ', Total - ' + mySum.sum());
console.log("" + mySum);
console.log('');
console.log('');