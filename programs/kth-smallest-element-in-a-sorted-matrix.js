var kthSmallest = function(matrix, k) {
  var len = matrix.length, i, j;

  var merge = function (head, tail) {
    var res = [];
    if (head === tail) {
      for (i = 0; i < len; ++i) res[i] = matrix[head][i];
      return res;
    }

    var mid = parseInt((tail + head) / 2);
    var res1, res1;
    if (tail - head > 1) {
      res1 = merge(head, mid);
      res2 = merge(mid + 1, tail);
    } else {
      res1 = matrix[head];
      res2 = matrix[tail];
    }

    i = j = 0;
    while (res1[i] !== undefined || res2[j] !== undefined) {
      if (res1[i] === undefined) {
        res.push(res2[j++]);
      } else if (res2[j] === undefined) {
        res.push(res1[i++]);
      } else if (res1[i] <= res2[j]) {
        res.push(res1[i++]);
      } else {
        res.push(res2[j++]);
      }
    }
    return res;
  };

  return(merge(0, len - 1)[k - 1]);
};

console.log(kthSmallest([
  [ 1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
], 8));

console.log(kthSmallest([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));
console.log(kthSmallest([[1,6,10,13,14,16,21],[3,10,12,18,22,27,29],[3,15,19,20,23,29,34],[8,15,19,25,27,29,39],[12,17,24,25,28,29,41],[16,22,27,31,31,33,44],[20,26,28,35,39,41,45]], 38));
console.log(kthSmallest([[0,0,0],[2,7,9],[7,8,11]], 7));