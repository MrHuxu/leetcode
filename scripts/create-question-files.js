const { closeSync, openSync } = require('fs');
const { get } = require('request');
const { load } = require('cheerio');

const PROBLEM_URL = slug => `https://leetcode.com/problems/${slug}/`;

const formatSeq = seq => {
  while (seq.length < 3) seq = '0' + seq;
  return seq;
};

module.exports = slug => {
  get(PROBLEM_URL(slug)).on('response', res => {
    res.setEncoding('utf8');
    var chunk = '';
    res.on('data', data => chunk += data);
    res.on('end', () => {
      var $ = load(chunk);
      var sequence = $('.question-title')[0].children[1].children[0].data.split('. ')[0].trim();

      var programName = `${slug}.js`;
      var submissionName = `${formatSeq(sequence)}_${programName}`;
      closeSync(openSync(`./programs/${programName}`, 'w'));
      closeSync(openSync(`./submissions/${submissionName}`, 'w'));

      console.log(`${programName} & ${submissionName} are successfully created!`);
    });
  });
};

