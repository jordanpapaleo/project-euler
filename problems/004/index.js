/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

COMPLETED ON:
  1468529241434
  Thu Jul 14 2016 13:47:21 GMT-0700 (PDT)

CURRENT RECORD: { iterations: 7156, largestNum: 906609 }
*/

(function() {
  'use strict'

  let result = solve(999, 999)
  console.log(result)

  function checkPalindrome (num) {
    const stringNum = `${num}`

    let i = 0
    let length = stringNum.length

    while(i < length) {
      if(stringNum[i] !== stringNum[length - (1 + i)]) {
        return false
      }

      i++
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
