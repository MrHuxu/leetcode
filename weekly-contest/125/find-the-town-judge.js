/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
let findJudge = function(N, trust) {
  if (1 === N) return 1;
  
  const src = {};
  const dest = {};
  for (let t of trust) {
    if (dest[t[1]] === undefined) dest[t[1]] = 0;
    dest[t[1]]++;
    src[t[0]] = true;
  }
  for (let num in dest) {
    if (dest[num] === N - 1 && !src[num]) return parseInt(num);
  }
  return -1;
};

console.log(findJudge(1, []));
console.log(findJudge(2, [[1,2]]));
console.log(findJudge(3, [[1,3],[2,3]]));
console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
console.log(findJudge(3, [[1,2],[2,3]]));
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));
