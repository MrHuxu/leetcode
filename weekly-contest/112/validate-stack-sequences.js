/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
let validateStackSequences = function(pushed, popped) {
  let i = 0, j = 0;
  const stack = [];
  while (true) {
    if (i === pushed.length) break;

    if (pushed[i] === popped[j]) {
      j++;
      i++;
    } else if (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    } else {
      stack.push(pushed[i]);
      i++;
    }
  }
  while (stack.length > 0 && stack.pop() === popped[j]) j++;

  return 0 === stack.length;
};

console.log(validateStackSequences([2,3,0,1],[0,3,2,1]));
console.log(validateStackSequences([2, 1, 0], [1, 2, 0]));
console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]));
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]));