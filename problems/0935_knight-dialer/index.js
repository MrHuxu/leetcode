/**
 * @param {number} N
 * @return {number}
 */
let knightDialer = function(N) {
  const hopMap = {
    1 : [6, 8],
    2 : [7, 9],
    3 : [4, 8],
    4 : [3, 9, 0],
    5 : [],
    6 : [1, 7, 0],
    7 : [2, 6],
    8 : [1, 3],
    9 : [2, 4],
    0 : [4, 6]
  };

  let result = 0;
  const traverse = (len, num, phone) => {
    if (len === N) {
      result++;
      return;
    }

    for (hop of hopMap[num]) {
      traverse(len + 1, hop, phone + hop);
    }
  };
  for (let i = 0; i < 10; i++) traverse(1, i, '' + i);

  return result % (Math.pow(10, 9) + 7);
};

console.log(knightDialer(2));
console.log(knightDialer(3));
console.log(knightDialer(161));