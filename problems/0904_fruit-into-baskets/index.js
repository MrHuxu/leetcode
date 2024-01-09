/**
 * @param {number[]} tree
 * @return {number}
 */
let totalFruit = function(tree) {
  const exist = {};
  let result = 0, start = 0, end = 0;

  for (end = 0; end < tree.length; end++) {
    if (Object.keys(exist).length < 2) exist[tree[end]] = true;
    else {
      if (!exist[tree[end]]) {
        result = Math.max(result, end - start);
        exist[tree[end]] = true;

        for (let i = end - 2; i >= 0; i--) {
          if (tree[i] !== tree[end - 1]) {
            delete(exist[tree[i]]);
            start = i + 1;
            break;
          }
        }
      }
    }
  }
  result = Math.max(result, end - start);

  return result;
};

// console.log(totalFruit([1,2,1]));
// console.log(totalFruit([0,1,2,2]));
// console.log(totalFruit([1,2,3,2,2]));
// console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));
console.log(totalFruit([1,0,1,4,1,4,1,2,3]));