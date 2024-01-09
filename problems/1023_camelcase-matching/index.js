/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
let camelMatch = function(queries, pattern) {
  const match = query => {
    let i = 0, j = 0;
    while (i < query.length) {
      if (query[i] === pattern[j]) {
        i++;
        j++;
      } else if (query[i].charCodeAt() >= 97 && query[i].charCodeAt() <= 122) {
        i++;
      } else if (query[i].charCodeAt() >= 65 && query[i].charCodeAt() <= 90) {
        return false;
      }
    }
    return j === pattern.length;
  };
  return queries.map(query => match(query, pattern));
};

console.log(camelMatch(['FooBar','FooBarTest','FootBall','FrameBuffer','ForceFeedBack'], 'FB'));
console.log(camelMatch(['FooBar','FooBarTest','FootBall','FrameBuffer','ForceFeedBack'], 'FoBa'));
console.log(camelMatch(['FooBar','FooBarTest','FootBall','FrameBuffer','ForceFeedBack'], 'FoBaT'));