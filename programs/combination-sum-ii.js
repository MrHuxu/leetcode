var combinationSum2 = function (candidates, target) {
  var result = [], tmp;
  candidates.sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  
  var recursion = function (arr, sum, pos) {
    if (pos >= candidates.length) return;
    if (sum + candidates[pos] > target) {
      return;
    } else if (sum + candidates[pos] === target) {
      arr.push(candidates[pos]);
      result.push(arr);
      return;
    } else {
      tmp = arr.slice();
      recursion(tmp, sum, pos + 1);
      
      tmp = arr.slice();
      tmp.push(candidates[pos]);
      recursion(tmp, sum + candidates[pos], pos + 1);
    }
  };
  
  for (var i = 0, len = candidates.length; i < len; ++i) {
    if (candidates[i] !== candidates[i - 1]) {
      if (candidates[i] === target)
        result.push([candidates[i]]);
      else
        recursion([candidates[i]], candidates[i], i + 1);
    }
  }
  
  return result;
};

console.log(combinationSum2([2, 2, 2], 4));
console.log(combinationSum2([1], 1));
console.log(combinationSum2([2, 3, 6, 7], 7));
console.log(combinationSum2([2,5,2,1,2], 5));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
