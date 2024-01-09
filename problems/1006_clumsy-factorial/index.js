/**
 * @param {number} N
 * @return {number}
 */
let clumsy = function(N) {
  let i = 0, sum = 0;
  for (i = 0; i < N; i += 4) {
    if ((i + 4) > N) break;

    tmp1 = Math.floor((N - i) * (N - i - 1) / (N - i - 2)); 
    sum += i ? -tmp1: tmp1;
    sum += N - i - 3;
  }

  if (1 === N - i) {
    sum -= i ? 1 : -1;
  } else if (2 === N - i) {
    sum -= i ? 2 * 1 : -2 * 1;
  } else if (3 === N - i) {
    sum -= i ? 3 * 2 / 1 : - 3 * 2 / 1;
  }

  return sum;
};

console.log(clumsy(1));
console.log(clumsy(4));
console.log(clumsy(10));