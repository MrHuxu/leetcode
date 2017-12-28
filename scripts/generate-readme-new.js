const { get } = require('request');
const { readdir } = require('fs');
const { resolve } = require('path');

const { ALGORITHM_URL } = require('./script-utils');

const getSolvedQuestionIds = new Promise((resolve, reject) => {
  readdir(resolve(__dirname, '../problems'), (_, problems) => {
    resolve(problems.reduce((pre, problem) => {
      pre[parseInt(problem.split('_')[0])] = true;
      return pre;
    }, {}));
  });
});

const getQuestionInfos = ids;