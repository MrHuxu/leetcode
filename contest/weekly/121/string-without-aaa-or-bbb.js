/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
let strWithout3a3b = function(A, B) {
  let result = '';
  let len1, len2, ch1, ch2;
  if (A > B) {
    len1 = A;
    len2 = B;
    ch1 = 'a';
    ch2 = 'b';
  } else {
    len2 = A;
    len1 = B;
    ch2 = 'a';
    ch1 = 'b';
  }

  console.log({ len1, len2, ch1, ch2 });
  while (len1 && len2 && len1 + len2 >= 3) {
    if (len1 > len2) {
      result += ch1 + ch1 + ch2;
      len1 -= 2;
      len2 -= 1;
    } else {
      result += ch1 + ch2 + ch2;
      len1 -= 1;
      len2 -= 2;
    }
  }
  while (len1--) result += ch1;
  while (len2--) result += ch2;

  return result;
};

console.log(strWithout3a3b(1, 2));
console.log(strWithout3a3b(1, 3));
console.log(strWithout3a3b(4, 1));