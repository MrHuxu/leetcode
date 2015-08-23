var combinationSum2 = function (candidates, target) {
  var result = [], tmp;
  candidates.sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  var dfs = function (index, left, arr) {
    if (left === 0) {
      result.push(arr);
    } else if (left > 0) {
      for (var i = index; i >= 0; --i) {
        /*
        console.log('i: ' + i);
        console.log('index: ' + index);
        console.log('candidates: ' + candidates);
        console.log('left: ' + left);
        */
        if (left >= candidates[i]) {
          if (!(candidates[i - 1] && left === candidates[i - 1])) {
            tmp = arr.slice(0);
            tmp.unshift(candidates[i]);
            dfs(i - 1, left - candidates[i], tmp);
          } else if (left >= candidates[i] * 2 && candidates[i - 1] && left === candidates[i - 1]) {
            tmp = arr.slice(0);
            tmp.unshift(candidates[i]);
            dfs(i - 1, left - candidates[i], tmp);
            --i;
            tmp.unshift(candidates[i]);
            dfs(i - 1, left - candidates[i] * 2, tmp);
          }
        }
        while (candidates[i - 1] && candidates[i - 1] === candidates[i]) --i;
      }
    }
  }
  dfs(candidates.length - 1, target, []);
  return result;
};
console.log(combinationSum2([2, 2, 2], 4));

console.log(combinationSum2([1], 1));

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
