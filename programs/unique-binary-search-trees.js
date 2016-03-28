var numTrees = function(n) {
  var result = [];
  var dfs = function (pos, arr) {
    if (pos < n) {
      tmp = arr.slice(0);
      tmp.push(pos);
      dfs(pos + 1, tmp);

      tmp = arr.slice(0);
      tmp.push('#', pos);
      dfs(pos + 1, tmp);
    } else {
      result.push(arr);
    }
  };
  dfs(1, [0]);

  return result;
};

console.log(numTrees(3));