var isAdditiveNumber = function(num) {
  if (num.length < 3) return false;
  var nums = [], flag = false;
  var i, len = num.length;
  
  var dfs = function (arr, pos) {
    if (pos === len) {
      flag = true;
      return;
    }
    if (!flag) {
      if (arr.length === 0) {
        var tmp = 0;
        if (num[pos] === '0') dfs([0], pos + 1);
        else {
          for (; pos <= len / 2; ++pos) {
            tmp = tmp * 10 + num[pos].charCodeAt() - 48;
            dfs([tmp], pos + 1);
          }
        }
      } else if (arr.length === 1) {
        var tmp = 0;
        if (num[pos] === '0') dfs([arr[0], 0], pos + 1);
        else {
          for (; pos < len - 1; ++pos) {
            tmp = tmp * 10 + num[pos].charCodeAt() - 48;
            if (num[pos + 1] !== '0') {
              dfs([arr[0], tmp], pos + 1);
            }
          }
        }
      } else {
        // console.log(arr);
        var sum = arr[arr.length - 1] + arr[arr.length - 2];
        var tmp = 0;
        
        if (num[pos] === '0') {
          arr.push(0);
          dfs(arr, pos + 1);
        } else {
          for (; pos < len; ++pos) {
            tmp = tmp * 10 + num[pos].charCodeAt() - 48;
            if (tmp === sum) {
              arr.push(tmp);
              dfs(arr, pos + 1);
              break;
            } else if (tmp > sum) {
              break;
            }
          }
        }
      }
    }
  };
  dfs([], 0);
  
  return flag;
};

console.log(isAdditiveNumber('112358'));
console.log(isAdditiveNumber('199100199'));
console.log(isAdditiveNumber('000'));
console.log(isAdditiveNumber('12113'));