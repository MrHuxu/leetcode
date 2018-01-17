/**
 * Problem: https://leetcode.com/problems/daily-temperatures/description/
 */

const dailyTemperatures = temperatures => {
  const res = [];
  const dp = {
    indexs : [],
    pre    : {
      max    : Number.MIN_SAFE_INTEGER,
      min    : Number.MAX_SAFE_INTEGER,
      indexs : []
    }
  };

  for (let i = 0; i < temperatures.length; i++) {
    res[i] = 0;
    const tempI = temperatures[i];

    if (tempI === dp.pre.max) {
      dp.indexs.forEach(index => res[index] = i - index);
      dp.indexs = [];

      dp.pre.indexs.push(i);
    } else if (tempI > dp.pre.max) {
      dp.indexs.forEach(index => res[index] = i - index);
      dp.indexs = [];

      for (let j = 0; j < dp.pre.indexs.length; j++) {
        res[dp.pre.indexs[j]] = i - dp.pre.indexs[j];
      }
      dp.pre.max = tempI;
      dp.pre.indexs = [i];
    } else {
      if (tempI <= dp.pre.min) {
        dp.pre.min = tempI;
      } else {
        dp.indexs = dp.indexs.reduceRight((pre, index) => {
          const tempJ = temperatures[index];
    
          if (tempI > tempJ) res[index] = i - index;
          else pre.unshift(index);
          return pre;
        }, []);
      }
      dp.indexs.push(i);
    }
  }
  return res;
};

module.exports = dailyTemperatures;
