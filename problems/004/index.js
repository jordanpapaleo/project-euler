'use strict'

/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

example 999 * 999 = some palindrome
*/


function checkPalindrome(num) {
  const forwardArray = `${num}`.split('')
  const reversedArray = `${num}`.split('').reverse()

  let i = forwardArray.length;
  while(i > 0) {
    if(forwardArray[i] !== reversedArray[i]) {
      return false
    }

    i--
  }

  return true
}

let numA = 999;
let numB = 999;

var largestNum = 0;

while (numA > 100) {
  while (numB > 100) {
    let product = numA * numB
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

console.log('***********')
console.log(largestNum)
