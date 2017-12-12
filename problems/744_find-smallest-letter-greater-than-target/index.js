/**
 * Problem: https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let minSub = Number.MAX_SAFE_INTEGER, result;
  
  letters.forEach(letter => {
    let sub = letter.charCodeAt() - target.charCodeAt();
    sub = sub > 0 ? sub : sub + 26;
    if (sub > 0 && sub < minSub) {
      minSub = sub;
      result = letter;
    }
  });

  return result;
};

module.exports = nextGreatestLetter;
