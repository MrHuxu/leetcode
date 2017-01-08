var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var problem = process.argv[2];
var url = `https://leetcode.com/problems/${problem}/`;

const formatSeq = seq => {
  while (seq.length < 3) seq = '0' + seq;
  return seq;
};

request.get(url).on('response', res => {
  res.setEncoding('utf8');
  var chunk = '';
  res.on('data', data => chunk += data);
  res.on('end', () => {
    var $ = cheerio.load(chunk);
    var sequence = $('.question-title')[0].children[1].children[0].data.split('. ')[0].trim();

    var programName = `${problem}.js`;
    var submissionName = `${formatSeq(sequence)}_${programName}`;
    fs.closeSync(fs.openSync(`./programs/${programName}`, 'w'));
    fs.closeSync(fs.openSync(`./submissions/${submissionName}`, 'w'));

    console.log(`${programName} & ${submissionName} are successfully created!`);
  });
});
