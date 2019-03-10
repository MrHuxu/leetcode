/**
 * @param {string[]} A
 * @return {string[]}
 */
let commonChars = function(A) {
  const times = A.reduce(pre => {
    const tmp = {};
    for (let i = 97; i <= 122; i++) tmp[String.fromCharCode(i)] = 0;
    return [...pre, tmp];
  }, []);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      times[i][A[i][j]]++;
    }
  }

  const result = [];
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    const time = Math.min(...A.map((val, i) => times[i][letter]));
    for (let j = 0; j < time; j++) result.push(letter);
  }
  return result;
};

console.log(commonChars(['bella','label','roller']));
console.log(commonChars(['cool','lock','cook']));