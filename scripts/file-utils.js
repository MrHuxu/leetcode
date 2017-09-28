const { writeFileSync, closeSync, openSync } = require('fs');
const { get } = require('request');
const { load } = require('cheerio');

const PROBLEM_URL = slug => `https://leetcode.com/problems/${slug}/`;

const formatSeq = seq => {
  while (seq.length < 3) seq = '0' + seq;
  return seq;
};

module.exports.createFiles = (slug, code) => {
  get(PROBLEM_URL(slug)).on('response', res => {
    res.setEncoding('utf8');
    var chunk = '';
    res.on('data', data => chunk += data);
    res.on('end', () => {
      var $ = load(chunk);
      var sequence = $('.question-title')[0].children[1].children[1].children[1].children[0].data.split('. ')[0].trim();

      var programName = `${slug}.js`;
      var submissionName = `${formatSeq(sequence)}_${programName}`;
      writeFileSync(`./programs/${programName}`, code);
      closeSync(openSync(`./submissions/${submissionName}`, 'w'));

      console.log(`programs/${programName} & submissions/${submissionName} are successfully created!`);
    });
  });
};

module.exports.clearConsole = () => process.stdout.write(
  'win32' === process.platform ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
);

module.exports.traverseNode = node => {
  let texts = [];
  const dfs = node => {
    if ('text' === node.type) {
      texts.push(node.data);
    } else {
      node.children.forEach(dfs);
    }
  };
  dfs(node);
  return texts;
};

module.exports.unicodeToChar = text => text.replace(/\\u[\dA-F]{4}/gi, match => {
  return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
});
