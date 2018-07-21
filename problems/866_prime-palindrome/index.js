/**
 * Problem: https://leetcode.com/problems/prime-palindrome/description/
 */

const primePalindrome = N => {
  if (1 === N || 2 === N) return 2;
  if (0 === N % 2) N++;
  
  const isPalindrome = num => {
    if (0 == num % 10 && num != 0) return false;
    let tmp = 0;
    while (num > tmp) {
      tmp = tmp * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return tmp === num || num === Math.floor(tmp / 10);
  };

  const isPrime = num => {
    let j = Math.floor(Math.sqrt(num));
    for (let i = 3;i <= j; i += 2) {
      if (0 === num % i) return false;
    }
    return true;
  };

  for (;;N += 2) {
    if (isPalindrome(N) && isPrime(N)) return N;
  }
};

module.exports = primePalindrome;
