var lastRemaining = function(n) {
  var total = (1 + n) * n / 2, visit = {};
  var count = n, base = 1, left = true, i;

  while (count > 1) {
    base *= 2;

    if (left) {
      for (i = 1; i <= n; ++i) {
        if (!visit[i]) break;
      }
      for (; i <= n; i += base) {
        visit[i] = true;
        total -= i;
        --count;
      }
      left = false;
    } else {
      for (i = n; n >= 1; --i) {
        if (!visit[i]) break;
      }
      for (; i >= 1; i -= base) {
        visit[i] = true;
        total -= i;
        --count;
      }
      left = true;
    }
  }

  return total;
};

console.log(lastRemaining(9));
console.log(lastRemaining(15));
console.log(lastRemaining(18));
console.log(lastRemaining(100000000));