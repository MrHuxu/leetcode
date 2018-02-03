/**
 * Problem: https://leetcode.com/problems/find-k-closest-elements/description/
 */

const findKClosestElements = (arr, k, x) => {
  arr.sort((a, b) => a > b ? 1 : -1);

  if (x <= arr[0]) return arr.slice(0, k);
  else if (x >= arr[arr.length - 1]) return arr.slice(arr.length - k);

  const result = [];
  let i, j;
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > x) {
      j = k;
      if (i === undefined) i = k - 1;
      break;
    } else if (arr[k] === x) {
      if (i === undefined) i = k - 1;
      if (result.length < k) {
        result.push(x);
        if (result.length === k) break;
      }
    }
  }

  while (result.length < k) {
    console.log({ i, j, result });
    if (arr[i] !== undefined && arr[j] !== undefined) {
      if (x - arr[i] > arr[j] - x) {
        result.push(arr[j]);
        j++;
      } else {
        result.unshift(arr[i]);
        i--;
      }
    } else if (arr[i] === undefined) {
      result.push(arr[j]);
      j++;
    } else if (arr[j] === undefined) {
      result.unshift(arr[i]);
      i--;
    }
  }

  return result;
};

module.exports = findKClosestElements;
