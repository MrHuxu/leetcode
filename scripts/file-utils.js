const { writeFileSync, mkdirSync } = require('fs');
const { get } = require('request');
const { load } = require('cheerio');

const PROBLEM_URL = slug => `https://leetcode.com/problems/${slug}/`;

const formatSeq = seq => {
  while (seq.length < 3) seq = '0' + seq;
  return seq;
};

const createFiles = (slug, code) => {
  get(PROBLEM_URL(slug)).on('response', res => {
    res.setEncoding('utf8');
    var chunk = '';
    res.on('data', data => chunk += data);
    res.on('end', () => {
      var $ = load(chunk);
      var sequence = $('.question-title')[0].children[1].children[1].children[1].children[0].data.split('. ')[0].trim();

      var submissionName = `${formatSeq(sequence)}_${slug}`;
      mkdirSync(`./problems/${submissionName}`);
      createIndexFile(submissionName, slug, code);
      createTestFile(submissionName);

      console.log(`problems/${submissionName}/index.js & problems/${submissionName}/test-cases.js are successfully created!`);
    });
  });
};

const createIndexFile = (submissionName, slug, code) => {
  const re = /var\ .*\ =\ function/;
  const funcName = re.exec(code)[0].split(' ')[1];
  writeFileSync(
    `./problems/${submissionName}/index.js`, `/**
 * Problem: https://leetcode.com/problems/${slug}/description/
 */
` + code + `

module.exports = ${funcName};
`
  );
};

const createTestFile = submissionName => {
  writeFileSync(
    `./problems/${submissionName}/test-cases.js`,
    `module.exports = [];`
  );
};

const clearConsole = () => process.stdout.write(
  'win32' === process.platform ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
);

const traverseNode = node => {
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

const unicodeToChar = text => text.replace(/\\u[\dA-F]{4}/gi, match => {
  return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
});

module.exports = {
  createFiles,
  clearConsole,
  traverseNode,
  unicodeToChar
};
