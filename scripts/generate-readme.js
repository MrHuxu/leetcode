/**
 * first of all, goto the the problem set page of LeetCode and set the pagination to show all rows in one page
 * then run this command at the console
 * https://leetcode.com/problemset/algorithms/
 * to get all the links of the ac questions

 * JSON.stringify($.map($('.text-success.fa.fa-check'), span => $(span).parents('tr').children('td')[2].children[0].children[0].href));

 * then copy and paste the list to the solved-problems.json
 */

const { readFileSync, writeFileSync } = require('fs');
const { get } = require('request');
const { load } = require('cheerio');
const { links } = require('./solved-problems.json');

const getInfoFromPageSource = source => {
  const $ = load(source);
  const title = $('meta[property="og:title"]')[0].attribs['content'];
  const sequence = /questionId\:\ \'\d+/.exec(source)[0].split(": '")[1];
  const slug = /questionTitleSlug\:\ \'[A-Za-z0-9\-]+/.exec(source)[0].split(": '")[1];

  let formattedSequence = sequence;
  for (let i = 0, times = 3 - sequence.length; i < times; ++i) {
    formattedSequence = '0' + formattedSequence;
  }
  const dirName = `${formattedSequence}_${slug}`;

  return { title, sequence, dirName };
};

const generatePromise = url => new Promise((resolve, reject) => {
  get(url).on('response', response => {
    response.setEncoding('utf8');
    let chunk = '';
    response.on('data', data => chunk += data);
    response.on('end', () => {
      try {
        const infos = getInfoFromPageSource(chunk);
        resolve({ succeeded: true, url, infos });
      } catch (e) {
        resolve({ succeeded: false, url });
      }
    });
  });
});

const getProblemsTableContent = results => results.reduce(([items, links], result) => {
  const { succeeded, url, infos } = result;
  if (succeeded) {
    const { title, sequence, dirName } = infos;
    const problemUrlNum = parseInt(sequence) * 2 - 1;
    const submissionUrlNum = parseInt(sequence) * 2;

    return [
      [...items, `\n| ${sequence} | [${title}][${problemUrlNum}] | [${dirName}][${submissionUrlNum}] |`],
      [...links, `\n[${problemUrlNum}]: ${url}\n[${submissionUrlNum}]: https://github.com/MrHuxu/leetcode/blob/master/problems/${dirName}/index.js`]
    ];
  } else {
    console.log(`Fetch info failed: ${url}`);
    return [items, links];
  }
}, [
  ['| Sequence      | Title         | Submission  |\n| ------------- |:------------- | :---------- |'],
  []
]);

const processAllRequests = promises => {
  Promise.all(promises).then(results => {
    const [tableItems, problemLinks] = getProblemsTableContent(results);
  
    const basicContent = readFileSync(__dirname + '/readme-basic.txt');
    const submissionContent = tableItems.join('') + '\n' + problemLinks.join('');
    writeFileSync(__dirname + '/../README.md', `${basicContent}\n${submissionContent}`);
    console.log('\nRegenerate README.md done!');
  });
};

processAllRequests(
  links.map(link => generatePromise(link))
);