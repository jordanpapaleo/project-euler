/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

(function() {
  'use strict'

  let result = solve(999, 999)
  console.log(result)

  function checkPalindrome (num) {
    const forwardArray = `${num}`.split('')
    const reversedArray = `${num}`.split('').reverse()

    let i = forwardArray.length

    while(i > 0) {
      if(forwardArray[i] !== reversedArray[i]) {
        return false
      }

      i--
    }

    return true
  }

  function solve (numA, numB) {
    let largestNum = 0;
    let iterations = 0;

    while (numA) {
      while (numB) {
        iterations++;

        let product = numA * numB

        if (product < largestNum) {
          break;
        }

        if (checkPalindrome(product)) {
          if(product > largestNum) {
            largestNum = product;
          }
        }

        numB--
      }

      numA--
      numB = numA
    }

    return {
      iterations,
      largestNum
    }
  }
}())
