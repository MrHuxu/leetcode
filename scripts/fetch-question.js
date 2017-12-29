const { writeFileSync, mkdirSync, existsSync } = require('fs');
const { get } = require('request');
const { load } = require('cheerio');
const { prompt } = require('inquirer');
const { info } = require('better-console');

const { DIFFICULTY_MAP, clearConsole, formatId, questionUrl, problemPath, getQuestionsDetails } = require('./script-utils.js');

const questionTitle = question => {
  const { id, difficulty, totalAcs, totalSubmitted, title } = question;
  return `${id}\t${DIFFICULTY_MAP[difficulty]}\t${(totalAcs / totalSubmitted * 100).toString().slice(0, 4)}%\t${title}`;
};

const questionOption = question => {
  let { paidOnly, id, slug } = question;
  if (paidOnly) return { name: questionTitle(question), disabled: 'Paid only' };

  if (existsSync(problemPath(id, slug))) {
    return { name: questionTitle(question), disabled: 'Solved' };
  }
  return questionTitle(question);
};

const mapTitleToQuestion = questions => questions.reduce((pre, curr) => {
  pre[questionTitle(curr)] = curr;
  return pre;
}, {});

const showQuestionSelection = questions => {
  titleQuestionMap = mapTitleToQuestion(questions);
  return prompt({
    type    : 'list',
    name    : 'title',
    message : 'Which problem do you want to solve?',
    choices : questions.map(questionOption)
  });
};

const getInfosFromPagedata = chunk => {
  const $ = load(chunk);

  return {
    code        : '',
    /*
     * pageData.codeDefinition.find(definition => 'javascript' === definition.value).defaultCode,
     * it won't work anymore since leetcode now use graphql to load code
     * definition dynamically and all the requests need to be authenticated
     */
    description : $('meta[name=description]')[0].attribs['content']
  };
};

const getQuestionContent = title => new Promise((resolve, reject) => {
  const question = titleQuestionMap[title];
  const { id, slug } = question;
  get(questionUrl(slug)).on('response', res => {
    let chunk = '';
    res.on('data', data => chunk += data);
    res.on('error', err => reject(err));
    res.on('end', () => resolve({
      id, slug,
      ...getInfosFromPagedata(chunk)
    }));
  });
});

const createIndexFile = (submissionName, slug, code) => {
  // const re = /var\ .*\ =\ function/;
  // const funcName = re.exec(code)[0].split(' ')[1];
  const funcName = slug.split('-').map((str, i) => (
    i ? Array.from(str).map((ch, j) => j ? ch : ch.toUpperCase()).join('') : str
  )).join('');
  writeFileSync(
    `./problems/${submissionName}/index.js`, `/**
 * Problem: https://leetcode.com/problems/${slug}/description/
 */
` + code + `
const ${funcName} = () => {

};

module.exports = ${funcName};
`
  );
};

const createTestFile = submissionName => {
  writeFileSync(
    `./problems/${submissionName}/test-cases.js`,
    'module.exports = [];'
  );
};

const createFiles = (id, slug, code) => {
  const submissionName = `${formatId(id)}_${slug}`;
  mkdirSync(`./problems/${submissionName}`);
  createIndexFile(submissionName, slug, code);
  createTestFile(submissionName);

  console.log(`problems/${submissionName}/index.js & problems/${submissionName}/test-cases.js are successfully created!`);
};

const actionToQuestion = question => {
  const { id, slug, code, description } = question;
  info(`\n${description}`);
  prompt({
    type    : 'list',
    name    : 'action',
    message : 'Do you want to solve the problem?',
    choices : ['Yes', 'No']
  }).then(answer => {
    switch (answer.action) {
    case 'Yes':
      createFiles(id, slug, code);
      return;

    case 'No':
      selectAndSolve();
      return;

    default:
      return;
    }
  });
};

const selectAndSolve = () => {
  clearConsole();
  getQuestionsDetails().then(
    questions => showQuestionSelection(questions),
    err => Promise.reject(err)
  ).then(
    answer => getQuestionContent(answer.title),
    err => Promise.reject(err)
  ).then(
    question => actionToQuestion(question)
  );
};

selectAndSolve();
